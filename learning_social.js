 const ViewLearning = () => {
            if (!store.current.topic) {
                store.view = 'syllabus';
                render();
                return '';
            }

            return `
                <div class="flex flex-col h-full bg-[#0b0f19]">
                    <div class="p-3 md:p-4 border-b border-gray-700 flex items-center justify-between bg-[#0b0f19] z-10 shrink-0">
                        <div class="flex items-center gap-3 md:gap-4 overflow-hidden">
                            <button onclick="store.view='syllabus'; render()" class="p-2 glass rounded-xl hover:bg-white/5 transition text-gray-400 hover:text-white">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                            <div class="truncate">
                                <h2 class="text-base md:text-xl font-bold truncate text-white leading-tight">${store.current.topic}</h2>
                                <div class="text-xs text-indigo-400 truncate">${store.current.subject}</div>
                            </div>
                        </div>
                        <button onclick="markAsCompleted()" class="whitespace-nowrap bg-green-600/10 text-green-400 border border-green-600/20 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-green-600/20 transition">
                            <i class="fas fa-check-circle mr-1 md:mr-2"></i> <span class="hidden md:inline">Mark</span> Done
                        </button>
                    </div>

                    <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                        
                        <div class="flex-1 flex flex-col overflow-y-auto pb-20 md:pb-0 relative custom-scrollbar">
                            
                            <div class="w-full p-4 md:p-6 pb-0">
                                <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black group border border-gray-800 ring-1 ring-white/5">
                                    
                                    <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    
                                    <div class="relative z-10 bg-black rounded-xl overflow-hidden">
                                        <div id="video-container" class="w-full aspect-video bg-[#050505] flex items-center justify-center relative">
                                            <div class="flex flex-col items-center gap-3">
                                                <div class="loader"></div>
                                                <span class="text-xs text-gray-500 uppercase tracking-widest">Loading Player...</span>
                                            </div>
                                        </div>
                                        
                                        <div class="absolute top-0 w-full p-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/80 to-transparent">
                                            <div class="flex items-center gap-2">
                                                <div class="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase tracking-wide">Live</div>
                                                <span class="text-white/80 text-xs font-mono">EdVibe Player</span>
                                            </div>
                                            <button onclick="openChangeVideoModal()" class="bg-white/10 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-2 transition-all hover:scale-105">
                                                <i class="fas fa-search"></i> Find Alternative
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4 flex items-center justify-between px-1">
                                    <div class="flex items-center gap-2 text-xs text-gray-500">
                                        <i class="fas fa-shield-alt text-indigo-400"></i> Verified Content (In case a video not played, click on "Find Alternative" and change the video.)
                                    </div>
                                    <div class="text-[10px] text-gray-600 font-mono">
                                        Powered by MWD Agra Player
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 md:p-6 space-y-6">
                                <div class="glass p-4 rounded-xl border border-gray-700/50">
<div class="flex flex-wrap gap-3 border-b border-gray-700 pb-3 mb-4">
    <button onclick="loadNotesForChapter()" id="notes-btn" 
        class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-sm transition flex items-center gap-2 shadow-lg shadow-indigo-500/20">
        <i class="fas fa-magic"></i> Generate AI Notes
    </button>
    
    <button onclick="exportNotesToPDF()" id="export-btn" 
        class="hidden px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200 font-semibold text-sm transition items-center gap-2">
        <i class="fas fa-file-pdf text-red-400"></i> PDF
    </button>

    <button onclick="loadLearningTab('flashcards')" 
        class="px-4 py-2 glass hover:bg-white/10 rounded-lg text-gray-300 hover:text-white font-semibold text-sm transition flex items-center gap-2">
        <i class="fas fa-layer-group text-blue-400"></i> Flashcards
    </button>

    <button onclick="loadLearningTab('quiz')" 
        class="px-4 py-2 glass hover:bg-white/10 rounded-lg text-gray-300 hover:text-white font-semibold text-sm transition flex items-center gap-2">
        <i class="fas fa-question-circle text-yellow-400"></i> Take Quiz
    </button>
    
    <button onclick="toggleDoubtChat()" 
        class="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 rounded-lg text-white font-semibold text-sm transition shadow-lg flex items-center gap-2">
        <i class="fas fa-robot"></i> Clear Doubt
    </button>
</div>
                                    
                                    <div id="doubt-chat-ui" class="doubt-chat-container glass border border-purple-500/30 rounded-xl mb-6">
                                        <div class="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-3 border-b border-white/10 flex justify-between items-center">
                                            <span class="font-bold text-sm text-purple-200"><i class="fas fa-sparkles mr-2"></i>AI Tutor (${store.current.topic})</span>
                                            <button onclick="toggleDoubtChat()" class="text-gray-400 hover:text-white"><i class="fas fa-times"></i></button>
                                        </div>
                                        <div id="doubt-messages" class="h-64 overflow-y-auto p-4 space-y-3 bg-black/20 custom-scrollbar text-sm">
                                            <div class="text-center text-gray-500 text-xs mt-4">Ask any question about this topic!</div>
                                        </div>
                                        <div class="p-3 border-t border-white/10 flex gap-2">
                                            <input type="text" id="doubt-input" placeholder="What is confusing you?" class="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-purple-500 outline-none">
                                            <button onclick="sendDoubtMessage()" class="bg-purple-600 hover:bg-purple-500 text-white px-4 rounded-lg"><i class="fas fa-paper-plane"></i></button>
                                        </div>
                                    </div>

                                    <div id="learning-content" class="prose prose-invert max-w-none text-gray-300 text-sm md:text-base leading-relaxed notes-section min-h-[200px]">
                                        <div class="flex flex-col items-center justify-center h-48 text-gray-500 opacity-60">
                                            <i class="fas fa-book-open text-4xl mb-3"></i>
                                            <p>Tap "Generate AI Notes" to start learning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-80 border-l border-gray-700 bg-[#0f141f] flex flex-col h-[400px] md:h-full shrink-0">
                            <div class="p-3 bg-gray-800/50 border-b border-gray-700 font-bold flex items-center gap-2 text-sm backdrop-blur-md">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Class Chat <span class="text-xs text-gray-500 font-normal">(${store.user?.standard || 'Gen'})</span>
                            </div>
                            
                            <div id="chat-messages" class="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar scroll-smooth">
                                <div class="text-center text-gray-600 mt-10 text-xs">Loading chat...</div>
                            </div>

                            <form onsubmit="sendClassMessage(event)" class="p-3 bg-gray-800/80 border-t border-gray-700 flex gap-2">
                                <input id="class-chat-input" class="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:bg-gray-800 transition" placeholder="Type a message..." autocomplete="off">
                                <button type="submit" class="text-indigo-400 hover:text-white p-2 rounded-lg hover:bg-indigo-600 transition">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            `;
        };

        const ViewSocial = () => {
            return `
                <div class="h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] max-w-6xl mx-auto flex flex-col md:flex-row gap-4 pb-2 md:pb-0 p-2 md:p-0">
                    
                    <div class="h-[35%] md:h-auto md:w-1/3 glass rounded-2xl flex flex-col overflow-hidden border border-gray-700 peer-list order-1">
                        <div class="p-3 border-b border-gray-700 bg-gray-800/50">
                            <h3 class="font-bold flex items-center gap-2 text-sm md:text-base">
                                <i class="fas fa-users text-indigo-400"></i>
                                Classmates <span class="text-xs text-gray-500">(${store.user?.standard || 'Gen'})</span>
                            </h3>
                        </div>
                        <div id="peer-list" class="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                            <div class="loader mx-auto mt-4"></div>
                        </div>
                    </div>

                    <div class="h-[65%] md:h-auto md:w-2/3 glass rounded-2xl flex flex-col overflow-hidden border border-gray-700 relative order-2">
                        <div id="chat-header" class="p-3 border-b border-gray-700 bg-gray-800/50 min-h-[50px] flex items-center">
                            <div class="font-bold text-gray-400 text-sm truncate">
                                <i class="fas fa-comment-dots mr-2"></i>
                                ${store.currentChatPeer ? `Chat with ${store.currentChatPeer.name}` : 'Select a classmate'}
                            </div>
                        </div>

                        <div id="peer-chat-container" class="flex-1 p-3 overflow-y-auto bg-[#0b0f19] flex flex-col gap-3 chat-messages">
                            ${!store.currentChatPeer ? `
                                <div class="flex h-full items-center justify-center text-gray-500 flex-col opacity-50">
                                    <i class="fas fa-paper-plane text-4xl mb-2"></i>
                                    <p class="text-xs">Tap a name above to chat</p>
                                </div>
                            ` : ''}
                        </div>

                        <div class="p-2 bg-gray-800 border-t border-gray-700">
                            <form onsubmit="sendPeerMessage(event)" class="flex gap-2">
                                <input type="text" id="peer-msg-input" placeholder="Message..." 
                                    ${!store.currentChatPeer ? 'disabled' : ''}
                                    class="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500 transition">
                                <button id="peer-send-btn" ${!store.currentChatPeer ? 'disabled' : ''} type="submit" 
                                    class="bg-indigo-600 ${!store.currentChatPeer ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'} w-10 h-10 rounded-xl text-white flex items-center justify-center transition">
                                    <i class="fas fa-paper-plane text-sm"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
        };

        const ViewProfile = () => {
            const level = Math.floor((store.user?.xp || 0) / 1000) + 1;
            const xpInLevel = Math.floor(store.user?.xp || 0) % 1000; const xpForNextLevel = 1000;
            const progress = (xpInLevel / xpForNextLevel) * 100;

            return `
                <div class="max-w-6xl mx-auto pb-20 md:pb-0">
                    <div class="glass p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
                        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div class="relative">
                                <img src="${store.user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(store.user?.name || 'Student')}" 
                                    class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-indigo-500 shadow-2xl object-cover">
                                <div class="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                                    Lv. ${level}
                                </div>
                            </div>
                            <div class="flex-1 text-center md:text-left w-full">
                                <h2 class="text-2xl md:text-3xl font-bold mb-1">${store.user?.name || 'Student'}</h2>
                                <p class="text-gray-400 mb-4 text-sm">${store.user?.email || 'No email'} • ${store.user?.standard || 'No Class'}</p>
                                
                                <div class="mb-4 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
                                    <div class="flex justify-between text-xs md:text-sm mb-2 font-mono text-indigo-300">
                                        <span>Level Progress</span>
                                        <span>${xpInLevel} / ${xpForNextLevel} XP</span>
                                    </div>
                                    <div class="w-full bg-gray-900 h-3 rounded-full overflow-hidden shadow-inner">
                                        <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-1000 relative" 
                                            style="width: ${progress}%">
                                            <div class="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-2 md:gap-4 mt-4">
                                    <div class="bg-white/5 p-2 rounded-lg text-center">
                                        <div class="text-xl md:text-2xl font-bold text-yellow-400">${store.user?.streak || 0}</div>
                                        <div class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Streak</div>
                                    </div>
                                    <div class="bg-white/5 p-2 rounded-lg text-center">
<div class="text-xl md:text-2xl font-bold text-indigo-400">${Math.floor(store.user?.xp || 0)}</div>                                        <div class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Total XP</div>
                                    </div>
                                    <div class="bg-white/5 p-2 rounded-lg text-center">
                                        <div class="text-xl md:text-2xl font-bold text-green-400">${store.user?.completedTopics?.length || 0}</div>
                                        <div class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Topics</div>
                                    </div>
                                </div>

                                <div class="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                                    <button onclick="store.view='editProfile'; render()" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2">
                                        <i class="fas fa-edit"></i> Edit
                                    </button>
                                    <button onclick="changeClassModal()" class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2">
                                        <i class="fas fa-graduation-cap"></i> Class
                                    </button>
                                    <button onclick="logout()" class="bg-red-900/30 text-red-400 hover:bg-red-900/50 border border-red-800/50 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2">
                                        <i class="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col-reverse md:block gap-8">
                        
                        <div class="mb-8">
                            <h3 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2 border-l-4 border-yellow-500">Badge Collection</h3>
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-4">
                                ${Object.values(BADGES).map(badge => {
                const hasBadge = store.user?.badges?.includes(badge.id) || false;
                return `
                                        <div class="glass p-4 rounded-xl text-center transition-all duration-300 ${hasBadge ? 'transform hover:scale-105 border border-yellow-500/30 bg-yellow-500/10' : 'opacity-40 grayscale'}">
                                            <div class="text-4xl mb-3 ${hasBadge ? 'badge-unlocked drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]' : ''}">${badge.icon}</div>
                                            <div class="font-bold text-sm ${hasBadge ? 'text-white' : 'text-gray-500'}">${badge.name}</div>
                                            <div class="text-[10px] text-gray-400 mt-1 line-clamp-2">${badge.desc}</div>
                                            ${hasBadge ? `<div class="mt-2 text-[10px] text-green-400 font-mono bg-green-900/30 rounded py-1">+${badge.xp} XP</div>` : ''}
                                        </div>
                                    `;
            }).join('')}
                            </div>
                        </div>

                        <div class="glass p-6 rounded-2xl mb-8 border border-gray-700/50">
                            <h3 class="text-xl font-bold mb-6 px-2 border-l-4 border-indigo-500">Learning Statistics</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                <div>
                                    <h4 class="font-bold text-gray-400 text-xs uppercase mb-3 tracking-wider">Recent Activity</h4>
                                    <div class="space-y-3">
                                        ${(store.user?.xpHistory?.slice(-5).reverse() || []).map(activity => `
                                            <div class="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-white/5 transition">
                                                <span class="truncate pr-2">${activity.reason || 'Activity'}</span>
                                                <span class="text-green-400 font-mono whitespace-nowrap">+${activity.amount || 0} XP</span>
                                            </div>
                                        `).join('')}
                                        ${(!store.user?.xpHistory?.length) ? '<div class="text-gray-600 text-sm text-center py-4 italic">Start learning to see activity!</div>' : ''}
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 class="font-bold text-gray-400 text-xs uppercase mb-3 tracking-wider">Subject Mastery</h4>
                                    <div class="space-y-3">
                                        ${store.user?.standard && SYLLABUS[store.user.standard] ?
                    Object.keys(SYLLABUS[store.user.standard]).map(subject => {
                        const completed = (store.user.completedTopics || []).filter(t => t.startsWith(subject)).length;
                        const total = SYLLABUS[store.user.standard][subject].length;
                        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
                        return `
                                                    <div>
                                                        <div class="flex justify-between text-xs mb-1 text-gray-300">
                                                            <span>${subject}</span>
                                                            <span>${percentage}%</span>
                                                        </div>
                                                        <div class="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                                            <div class="bg-indigo-500 h-full transition-all duration-1000" style="width: ${percentage}%"></div>
                                                        </div>
                                                    </div>
                                                `;
                    }).join('') :
                    '<div class="text-gray-600 text-sm text-center py-4">Select a class to view mastery</div>'
                }
                                    </div>
                                </div>

                                <div>
                                    <h4 class="font-bold text-gray-400 text-xs uppercase mb-3 tracking-wider">Performance</h4>
                                    <div class="space-y-4">
                                        <div class="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                                            <span class="text-sm text-gray-300">Badges</span>
                                            <span class="text-yellow-400 font-bold">${store.user?.badges?.length || 0} <span class="text-gray-600 text-xs">/ ${Object.keys(BADGES).length}</span></span>
                                        </div>
                                        <div class="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                                            <span class="text-sm text-gray-300">Tests Taken</span>
                                            <span class="text-indigo-400 font-bold">${store.user?.testScores?.length || 0}</span>
                                        </div>
                                        <div class="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                                            <span class="text-sm text-gray-300">Sandbox Solved</span>
                                            <span class="text-green-400 font-bold">${store.user?.sandboxStats?.solved || 0}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `;
        };
        window.toggleBranchSelect = () => {
            const std = document.getElementById('edit-standard').value;
            const container = document.getElementById('branch-select-container');
            if (std === 'Engineering') container.classList.remove('hidden');
            else container.classList.add('hidden');
        };
        const ViewEditProfile = () => `
            <div class="max-w-2xl mx-auto">
                <div class="glass p-8 rounded-2xl">
                    <h2 class="text-3xl font-bold mb-6 gradient-text">Edit Profile</h2>
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" id="edit-name" value="${store.user?.name || ''}" 
                                class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 outline-none transition text-white">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Language Preference (for Videos)</label>
                            <select id="edit-language" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 outline-none transition text-white">
                                <option value="English" ${store.user?.language === 'English' ? 'selected' : ''}>English</option>
                                <option value="Hindi" ${store.user?.language === 'Hindi' ? 'selected' : ''}>Hindi</option>
                                <option value="Hinglish" ${store.user?.language === 'Hinglish' ? 'selected' : ''}>Hinglish</option>
                            </select>
                        </div>
                        <div id="branch-select-container" class="${store.user?.standard === 'Engineering' ? '' : 'hidden'}">
                            <label class="block text-sm font-medium mb-2">Engineering Branch (Prioritize Subjects)</label>
                            <select id="edit-branch" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 outline-none transition text-white">
                                <option value="">Select Branch</option>
                                <option value="Computer Science" ${store.user?.branch === 'Computer Science' ? 'selected' : ''}>Computer Science</option>
                                <option value="Mechanical" ${store.user?.branch === 'Mechanical' ? 'selected' : ''}>Mechanical</option>
                                <option value="Electrical" ${store.user?.branch === 'Electrical' ? 'selected' : ''}>Electrical</option>
                                <option value="Electronics & Comm" ${store.user?.branch === 'Electronics & Comm' ? 'selected' : ''}>Electronics</option>
                                <option value="Civil" ${store.user?.branch === 'Civil' ? 'selected' : ''}>Civil</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Class/Grade</label>
                            <select id="edit-standard" onchange="toggleBranchSelect()"
                                class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 outline-none transition text-white">
                            ${Object.keys(SYLLABUS).filter(std => std && std.trim() !== '').map(std =>
            `<option value="${std}" ${store.user?.standard === std ? 'selected' : ''}>${std}</option>`
        ).join('')}
                            </select>
                        </div>
                        <div class="pt-4 flex gap-4">
                            <button onclick="saveProfile()" 
                                class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition flex-1 text-white">
                                Save Changes
                            </button>
                            <button onclick="store.view='profile'; render()" 
                                class="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition flex-1 text-white">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            `;

        const ViewTestLoading = () => `
            <div class="max-w-4xl mx-auto">
                <div class="glass p-8 rounded-2xl text-center">
                    <div class="loader mx-auto mb-6"></div>
                    <h2 class="text-2xl font-bold mb-4">Generating Your Test</h2>
                    <p class="text-gray-400 mb-2">Using AI to create personalized questions...</p>
                    <p class="text-sm text-gray-500">This may take a moment as we generate high-quality questions</p>
                    <div class="mt-8 grid grid-cols-3 gap-4">
                        <div class="p-4 bg-indigo-900/20 rounded-lg">
                            <div class="text-2xl mb-2">🤖</div>
                            <p class="text-sm">AI Question Generation</p>
                        </div>
                        <div class="p-4 bg-purple-900/20 rounded-lg">
                            <div class="text-2xl mb-2">📊</div>
                            <p class="text-sm">Difficulty Balancing</p>
                        </div>
                        <div class="p-4 bg-blue-900/20 rounded-lg">
                            <div class="text-2xl mb-2">🎯</div>
                            <p class="text-sm">Topic Coverage</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
