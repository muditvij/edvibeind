   const ViewTestSeries = () => {
            const hasAITestAttempts = store.user?.aiTestAttempts?.length > 0;
            const latestAITest = hasAITestAttempts ? store.user.aiTestAttempts[store.user.aiTestAttempts.length - 1] : null;

            return `
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold mb-2 gradient-text">Test Series</h2>
                    <p class="text-gray-400 mb-8">Challenge yourself with AI-generated tests</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                        <div class="glass p-6 rounded-2xl">
                            <div class="text-4xl mb-4">📝</div>
                            <h3 class="text-xl font-bold mb-2">Standard Test</h3>
                            <p class="text-gray-400 mb-4">30 questions max covering all subjects</p>
                            <button onclick="startTest('standard')" class="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition">
                                Start Standard Test
                            </button>
                        </div>
                        <div class="glass p-6 rounded-2xl">
                            <div class="text-4xl mb-4">🎯</div>
                            <h3 class="text-xl font-bold mb-2">Custom Test</h3>
                            <p class="text-gray-400 mb-4">Select topics & question count</p>
                            <button onclick="showCustomTestModal()" class="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition">
                                Create Custom Test
                            </button>
                        </div>
                        <div class="glass p-6 rounded-2xl">
                            <div class="text-4xl mb-4">🏆</div>
                            <h3 class="text-xl font-bold mb-2">AI Global Test</h3>
                            <p class="text-gray-400 mb-2">40 questions • Compete with all students</p>
                            ${hasAITestAttempts ? `
                                <div class="text-xs text-yellow-400 mb-2">
                                    <i class="fas fa-crown"></i> Rank: ${latestAITest.rank || 'N/A'} 
                                    | XP Earned: ${latestAITest.xpEarned || '0'}
                                </div>
                            ` : ''}
                            <button onclick="startAIGlobalTest()" class="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:opacity-90 py-3 rounded-lg font-semibold transition">
                                ${hasAITestAttempts ? 'Retake Test' : 'Start Global Test'}
                            </button>
                        </div>
                    </div>
                    
                    <div class="glass p-6 rounded-2xl">
                        <h3 class="text-xl font-bold mb-4">Test History</h3>
                        ${store.user?.testScores?.length > 0 ? `
                            <div class="space-y-3">
                                ${store.user.testScores.slice(-5).reverse().map(test => `
                                    <div class="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition">
                                        <div>
                                            <div class="font-semibold flex items-center gap-2">
                                                ${test.type === 'standard' ? '<i class="fas fa-book text-indigo-400"></i>' :
                    test.type === 'custom' ? '<i class="fas fa-bullseye text-purple-400"></i>' :
                        '<i class="fas fa-globe text-pink-400"></i>'}
                                                ${test.type === 'standard' ? 'Standard Test' :
                    test.type === 'custom' ? 'Custom Test' :
                        'AI Global Test'}
                                            </div>
                                            <div class="text-sm text-gray-400">${new Date(test.date).toLocaleDateString()}</div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-2xl font-bold ${test.percentage >= 70 ? 'text-green-400' : test.percentage >= 50 ? 'text-yellow-400' : 'text-red-400'}">${test.percentage}%</div>
                                            <div class="text-sm text-gray-400 flex items-center gap-1">
                                                <i class="fas fa-bolt text-yellow-400"></i> +${test.xpEarned} XP
                                                ${test.rank ? `<span class="ml-2"><i class="fas fa-crown text-yellow-400"></i> #${test.rank}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <div class="text-center py-8 text-gray-500">
                                <i class="fas fa-clipboard-list text-4xl mb-4"></i>
                                <p>No tests taken yet. Start your first test!</p>
                            </div>
                        `}
                    </div>

                    <!-- Global Rankings Section -->
                    <div class="glass p-6 rounded-2xl mt-6">
                        <h3 class="text-xl font-bold mb-4">Global Rankings</h3>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <p class="text-gray-400 mb-2">Compete with students worldwide</p>
                                <p class="text-sm text-indigo-400"><i class="fas fa-sync-alt mr-2"></i>Weekly reset • XP based rankings</p>
                            </div>
                            <button onclick="store.view='leaderboard'; render(); setTimeout(() => loadLeaderboard(), 100)" 
                                    class="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-6 py-3 rounded-lg font-semibold transition shadow-lg">
                                <i class="fas fa-trophy mr-2"></i> View Leaderboard
                            </button>
                        </div>
                    </div>
                </div>
            `;
        };
