window.loadLeaderboard = async () => {
            const container = document.getElementById('leaderboard-content');
            if (!container) return;

            container.innerHTML = '<div class="text-center py-12"><div class="loader mx-auto mb-4"></div><p class="text-gray-400">Loading rankings...</p></div>';

            try {
                const filter = document.getElementById('leaderboard-filter')?.value || 'all_time';
                let rawDocs = [];
                let isGeneralXP = false;

                // --- STRATEGY: FETCH DATA FIRST, SORT LATER (Prevents Index Errors) ---

                if (filter === 'all_time') {
                    isGeneralXP = true;
                    // Get all users (limit to 100 to save bandwidth)
                    const snapshot = await db.collection('users').limit(100).get();
                    rawDocs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                    // Sort by XP Descending in JavaScript
                    rawDocs.sort((a, b) => (b.xp || 0) - (a.xp || 0));
                }
                else if (filter === 'my_class') {
                    isGeneralXP = true;
                    const standard = store.user?.standard || 'General';
                    // Get users of specific class
                    const snapshot = await db.collection('users').where('standard', '==', standard).limit(100).get();
                    rawDocs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                    // Sort by XP Descending in JavaScript
                    rawDocs.sort((a, b) => (b.xp || 0) - (a.xp || 0));
                }
                else {
                    // Weekly or Monthly (Uses leaderboard_entries collection)
                    let query = db.collection('leaderboard_entries');
                    const now = new Date();

                    if (filter === 'weekly') {
                        const weekStart = new Date(now);
                        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                        const weekKey = weekStart.toISOString().split('T')[0];
                        query = query.where('weekStart', '==', weekKey);
                    } else if (filter === 'monthly') {
                        const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
                        query = query.where('month', '==', monthKey);
                    }

                    const snapshot = await query.limit(100).get();
                    rawDocs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                    // Sort by XP Earned Descending
                    rawDocs.sort((a, b) => (b.xpEarned || 0) - (a.xpEarned || 0));
                }

                // --- RENDER LOGIC ---

                if (rawDocs.length === 0) {
                    container.innerHTML = `
                    <div class="text-center py-12">
                        <div class="text-4xl mb-4">📊</div>
                        <h3 class="text-xl font-bold mb-2">No Rankings Found</h3>
                        <p class="text-gray-400 mb-4">
                            ${isGeneralXP ? "No students found yet." : "No test entries for this period."}
                        </p>
                    </div>
                `;
                    return;
                }

                // Process Data for Display
                let entries = [];

                if (isGeneralXP) {
                    // Formatting for General XP View
                    entries = rawDocs.map((data, index) => ({
                        rank: index + 1,
                        userId: data.id,
                        userName: data.name || 'Anonymous',
                        photoURL: data.photoURL,
                        standard: data.standard || '-',
                        xpDisplay: Math.round(data.xp || 0), scoreDisplay: data.badges?.length || 0,
                        subText: "Badges",
                        isMe: data.id === store.user?.uid
                    }));
                } else {
                    // Formatting for Weekly/Test View
                    // Filter unique users keeping their highest score
                    const userMap = new Map();
                    rawDocs.forEach(data => {
                        if (!userMap.has(data.userId) || userMap.get(data.userId).xpEarned < data.xpEarned) {
                            userMap.set(data.userId, data);
                        }
                    });

                    entries = Array.from(userMap.values())
                        .sort((a, b) => b.xpEarned - a.xpEarned)
                        .map((data, index) => ({
                            rank: index + 1,
                            userId: data.userId,
                            userName: data.userName,
                            photoURL: data.photoURL,
                            standard: data.standard || '-',
                            xpDisplay: Math.round(data.xpEarned), scoreDisplay: data.score + "%",
                            subText: "Score",
                            isMe: data.userId === store.user?.uid
                        }));
                }

                // Slice to top 50 to keep list clean
                entries = entries.slice(0, 50);

                // Generate HTML
                container.innerHTML = `
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-800/50">
                            <tr>
                                <th class="text-left p-4">Rank</th>
                                <th class="text-left p-4">Student</th>
                                <th class="text-left p-4">Class</th>
                                <th class="text-left p-4">XP (${isGeneralXP ? 'Total' : 'Won'})</th>
                                <th class="text-left p-4">${isGeneralXP ? 'Badges' : 'Score'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${entries.map(entry => `
                                <tr class="border-b border-gray-700 hover:bg-white/5 transition ${entry.isMe ? 'bg-indigo-900/20 border-indigo-500/30' : ''}">
                                    <td class="p-4">
                                        <div class="flex items-center gap-3">
                                            ${entry.rank <= 3 ?
                        `<div class="w-10 h-10 rounded-full flex items-center justify-center ${entry.rank === 1 ? 'first-place' : entry.rank === 2 ? 'second-place' : 'third-place'}">
                                                    <span class="font-bold text-lg text-white shadow-md">${entry.rank}</span>
                                                </div>` :
                        `<span class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 font-bold">${entry.rank}</span>`
                    }
                                        </div>
                                    </td>
                                    <td class="p-4">
                                        <div class="flex items-center gap-3">
                                            <img src="${entry.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(entry.userName)}`}" 
                                                 class="w-10 h-10 rounded-full object-cover border-2 ${entry.isMe ? 'border-indigo-400' : 'border-transparent'}">
                                            <div>
                                                <span class="font-semibold ${entry.isMe ? 'text-indigo-300' : 'text-gray-200'}">
                                                    ${entry.userName} ${entry.isMe ? '(You)' : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-4">
                                        <span class="px-2 py-1 rounded bg-gray-800 text-xs text-gray-400">${entry.standard}</span>
                                    </td>
                                    <td class="p-4">
                                        <div class="flex items-center gap-2">
                                            <i class="fas fa-bolt text-yellow-400"></i>
                                            <span class="font-bold text-xl text-white">
                                                ${entry.xpDisplay}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="p-4">
                                        <div class="flex flex-col">
                                            <span class="font-bold text-gray-300">${entry.scoreDisplay}</span>
                                            <span class="text-[10px] text-gray-500 uppercase">${entry.subText}</span>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

            } catch (error) {
                console.error("Leaderboard Error:", error); // Check Console (F12) for details
                container.innerHTML = `
                <div class="text-center py-12 text-red-400">
                    <i class="fas fa-exclamation-triangle text-4xl mb-4"></i>
                    <p>Failed to load leaderboard. ${error.message}</p>
                    <button onclick="loadLeaderboard()" class="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">
                        Retry
                    </button>
                </div>
            `;
            }
        };
