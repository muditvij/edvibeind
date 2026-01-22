const ViewLoading = () => `
            <div class="min-h-screen flex flex-col items-center justify-center">
                <div class="loader mb-8"></div>
                <h2 class="text-2xl font-bold mb-2">Loading EdVibe</h2>
                <p class="text-gray-400">Preparing your learning experience...</p>
            </div>
        `;

        const CompNavbar = () => {
            if (!store.user) return '';
            const userName = store.user.name || 'Student';
            const userPhoto = store.user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=6366f1&color=fff`;
            const userLevel = Math.floor((store.user.xp || 0) / 1000) + 1;

            const NavItem = (id, icon, label) => `
                <button onclick="store.view='${id}'; render()" 
                    class="w-full text-left p-3 md:p-4 text-lg md:text-xl flex items-center gap-4 hover:bg-white/5 transition rounded-xl ${store.view === id ? 'text-indigo-400 bg-white/5' : 'text-gray-500'}">
                    <div class="nav-icon-wrapper">
                        <i class="${icon} w-6 text-center"></i>
                        <div id="badge-${id}" class="nav-badge"></div>
                    </div>
                    <span class="font-semibold hidden md:inline">${label}</span>
                </button>`;

            return `
                <aside class="fixed top-0 left-0 w-64 h-full glass border-r border-gray-700 hidden md:flex flex-col z-50 slide-in">
                    <div class="p-6 text-3xl font-bold gradient-text tracking-tighter">EdVibe.</div>
                    <nav class="flex-1 px-4 space-y-2 mt-4">
                        ${NavItem('dashboard', 'fas fa-th-large', 'Dashboard')}
                        ${NavItem('syllabus', 'fas fa-book-open', 'Syllabus')}
                        ${NavItem('testSeries', 'fas fa-clipboard-list', 'Test Series')}
                        ${NavItem('sandbox', 'fas fa-code', 'AI Sandbox')}
                        ${NavItem('social', 'fas fa-users', 'Peer Connect')}
                        ${NavItem('profile', 'fas fa-user-astronaut', 'Profile')}
                        ${NavItem('leaderboard', 'fas fa-trophy', 'Leaderboard')}
                    </nav>
                    <div class="p-4">
                        <div class="glass p-4 rounded-xl flex items-center gap-3">
                            <img src="${userPhoto}" class="w-10 h-10 rounded-full border-2 border-indigo-500">
                            <div class="overflow-hidden">
                                <div class="font-bold text-sm truncate">${userName}</div>
                                <div class="text-xs text-yellow-400 font-mono">Lv. ${userLevel}</div>
                            </div>
                        </div>
                        <button onclick="logout()" class="w-full mt-3 text-xs text-gray-500 hover:text-red-400 flex items-center justify-center gap-2">
                            <i class="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                        <div class="mt-4 pt-4 border-t border-gray-800 text-center">
                            <p class="text-[10px] text-gray-600 font-mono uppercase tracking-wider">Developed by</p>
                            <p class="text-[11px] text-indigo-400 font-bold mt-1">MWD Agra</p>
                            <p class="text-[9px] text-gray-500">Mudit Vij & Ankit Sen</p>
                        </div>
                    </div>
                </aside>
            `;
        };

        const CompMain = () => `
            <main class="md:ml-64 p-4 md:p-8 pb-16 md:pb-8 w-full fade-in">
                ${getCurrentView()}
            </main>
        `;

        const CompMobileNav = () => `
            <div class="fixed bottom-0 w-full h-16 glass md:hidden flex justify-around items-center z-50 px-1 border-t border-gray-700 backdrop-blur-xl bg-[#0b0f19]/90">
                <button onclick="store.view='dashboard'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'dashboard' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-home text-xl"></i>
                    <span class="text-[10px]">Home</span>
                </button>
                
                <button onclick="store.view='syllabus'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'syllabus' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-book text-xl"></i>
                    <span class="text-[10px]">Learn</span>
                </button>
                
                <button onclick="store.view='testSeries'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'testSeries' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-clipboard-list text-xl"></i>
                    <span class="text-[10px]">Tests</span>
                </button>

                <button onclick="store.view='sandbox'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'sandbox' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-code text-xl"></i>
                    <span class="text-[10px]">AI Lab</span>
                </button>

                <button onclick="store.view='social'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'social' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-users text-xl"></i>
                    <span class="text-[10px]">Connect</span>
                </button>
                
                <button onclick="store.view='profile'; render()" class="p-2 flex flex-col items-center gap-1 ${store.view === 'profile' ? 'text-indigo-400' : 'text-gray-500'}">
                    <i class="fas fa-user text-xl"></i>
                    <span class="text-[10px]">Me</span>
                </button>
            </div>
        `;

        const getCurrentView = () => {
            const views = {
                'auth': ViewAuth,
                'onboard': ViewOnboard,
                'dashboard': ViewDashboard,
                'syllabus': ViewSyllabus,
                'learning': ViewLearning,
                'test': ViewTest,
                'testReport': ViewTestReport,
                'profile': ViewProfile,
                'social': ViewSocial,
                'testSeries': ViewTestSeries,
                'testLoading': ViewTestLoading,
                'editProfile': ViewEditProfile,
                'sandbox': ViewSandbox,
                'leaderboard': ViewLeaderboard
            };
            return views[store.view] ? views[store.view]() : ViewLoading();
        };
