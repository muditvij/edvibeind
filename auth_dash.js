const ViewAuth = () => `
            <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f19] bg-grid-pattern p-4 md:p-0">
                <div class="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div class="w-full max-w-7xl min-h-screen md:min-h-[80vh] grid grid-cols-1 md:grid-cols-2 z-10">
                    
                    <div class="hidden md:flex flex-col justify-between relative p-12 lg:p-16">
                        <div class="absolute top-20 left-10 text-6xl float-anim opacity-80"></div>
                        <div class="absolute bottom-32 right-20 text-6xl float-anim float-anim-delay-1 opacity-80">🧠</div>
                        <div class="absolute top-1/2 right-16 text-5xl float-anim float-anim-delay-2 opacity-60">⚛️</div>
                        
                        <div class="mt-10">
                            <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                                Master Your <br>
                                <span class="gradient-text">Future.</span>
                            </h1>
                            <p class="text-xl text-gray-400 mb-8 max-w-md leading-relaxed">
                                Experience the next evolution of learning with AI-driven notes, quizzes, and real-world simulations.
                            </p>
                            
                            <div class="flex items-center gap-4">
                                <div class="glass px-6 py-3 rounded-full flex items-center gap-3 border border-white/5">
                                    <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="font-bold text-sm">AI Powered</span>
                                </div>
                                <div class="glass px-6 py-3 rounded-full flex items-center gap-3 border border-white/5">
                                    <span class="text-yellow-400 text-sm">★★★★★</span>
                                    <span class="font-bold text-sm">Top Rated</span>
                                </div>
                            </div>
                        </div>

                        <div class="pt-8">
                            <p class="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-2">Developed By</p>
                            <div class="flex items-center gap-3">
                                <div class="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                <div>
                                    <p class="font-bold text-white text-lg tracking-tight">MWD Agra</p>
                                    <p class="text-xs text-indigo-400 flex gap-1">
                                        <a href="https://www.linkedin.com/in/mudit-vij" target="_blank" class="hover:text-white hover:underline transition">Mudit Vij</a> 
                                        & 
                                        <a href="https://www.linkedin.com/in/ankit-sen" target="_blank" class="hover:text-white hover:underline transition">Ankit Sen</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center p-4">
                        <div class="glass w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur-xl">
                            <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                            
                            <div class="text-center mb-8">
                                <h2 class="text-3xl font-bold mb-2">Welcome to EdVibe</h2>
                                <p class="text-gray-400 text-sm">Sign in to continue your learning journey</p>
                            </div>

                            <div id="auth-tabs" class="flex p-1.5 bg-gray-900/50 rounded-xl mb-8 border border-white/5">
                                <button onclick="switchAuthTab('login')" class="flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg bg-indigo-600 text-white" id="tab-login">Login</button>
                                <button onclick="switchAuthTab('signup')" class="flex-1 py-2.5 rounded-lg font-semibold text-sm text-gray-400 hover:text-white transition-all hover:bg-white/5" id="tab-signup">Sign Up</button>
                            </div>

                            <div id="auth-form" class="fade-in">${AuthForm('login')}</div>
                            
                            <p class="text-center text-[10px] text-gray-600 mt-8">
                                By continuing, you agree to our Terms of Service & Privacy Policy.
                            </p>
                            
                            <div class="md:hidden mt-6 pt-6 border-t border-gray-800 text-center">
                                 <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Developed by</p>
                                 <div class="text-xs">
                                     <span class="text-indigo-400 font-bold">MWD Agra</span> 
                                     <span class="text-gray-600">•</span>
                                     <a href="#" class="text-gray-400 hover:text-white">Mudit Vij</a> & 
                                     <a href="#" class="text-gray-400 hover:text-white">Ankit Sen</a>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const AuthForm = (type) => {
            const isLogin = type === 'login';
            return `
        <div class="space-y-4">
            ${!isLogin ? `
                <div class="group">
                    <input type="text" id="name" placeholder="Full Name" 
                        class="w-full bg-gray-900/50 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200">
                </div>
            ` : ''}
            <div class="group">
                <input type="email" id="email" placeholder="Email Address" 
                    class="w-full bg-gray-900/50 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200">
            </div>
            <div class="group">
                <input type="password" id="password" placeholder="Password" 
                    class="w-full bg-gray-900/50 border border-gray-700 p-3 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200">
            </div>
            
            ${isLogin ? `
                <div class="text-right">
                    <button onclick="showForgotPassword()" class="text-sm text-indigo-400 hover:text-indigo-300 transition">Forgot Password?</button>
                </div>
            ` : ''}

            <button id="auth-submit-btn" onclick="${isLogin ? 'handleLogin()' : 'handleSignup()'}" 
                class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center">
                ${isLogin ? 'Sign In' : 'Create Account'}
            </button>

            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-700"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-[#0b0f19] text-gray-500">Or continue with</span>
                </div>
            </div>

            <button onclick="loginWithGoogle()" 
                class="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition shadow-lg">
                <i class="fab fa-google text-red-500 text-xl"></i> Google
            </button>
        </div>
    `;
        };
        const ViewOnboard = () => `
            <div class="min-h-screen flex flex-col items-center justify-center p-4">
                <div class="text-center mb-8">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">Welcome to <span class="gradient-text">EdVibe</span>!</h2>
                    <p class="text-gray-400">Select your learning path to begin</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl w-full px-4">
                    ${Object.keys(SYLLABUS).map(std => `
                        <div onclick="setStandard('${std}')" 
                            class="glass p-8 rounded-2xl text-center hover:bg-indigo-600/20 hover:border-indigo-500 border border-transparent transition-all duration-300 cursor-pointer transform hover:scale-[1.02] group">
                            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
                                ${std === 'Skills' ? '💼' : '🎓'}
                            </div>
                            <h3 class="text-2xl font-bold mb-2">${std}</h3>
                            <p class="text-gray-400 text-sm">${Object.keys(SYLLABUS[std]).length} Subjects</p>
                            <div class="mt-4 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition">
                                Click to select →
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const ViewDashboard = () => {
            const level = Math.floor((store.user?.xp || 0) / 1000) + 1;
            const xpInLevel = Math.floor(store.user?.xp || 0) % 1000;
            const nextLevelXp = 1000;
            const progressPercent = (xpInLevel / nextLevelXp) * 100;
            const firstName = store.user?.name?.split(' ')[0] || 'Student';

            // Time-based greeting
            const hour = new Date().getHours();
            const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

            return `
                <div class="max-w-7xl mx-auto space-y-6 pb-20 md:pb-0">
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <div class="lg:col-span-2 glass p-6 md:p-8 rounded-3xl relative overflow-hidden group">
                            <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/30 transition duration-1000"></div>
                            
                            <div class="relative z-10">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <p class="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-1">${greeting}</p>
                                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-2">${firstName} 👋</h2>
                                        <p class="text-gray-400 max-w-md text-sm md:text-base">You are on a roll! Keep up the momentum to reach Level ${level + 1}.</p>
                                    </div>
                                    <div class="hidden md:block text-right">
                                        <div class="inline-block glass px-4 py-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10">
                                            <div class="text-2xl font-bold text-yellow-400">Lv. ${level}</div>
                                            <div class="text-[10px] text-yellow-200/70 uppercase tracking-wider">Current Level</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-8">
                                    <div class="flex justify-between text-xs font-bold text-gray-400 mb-2">
                                        <span>Progress to Level ${level + 1}</span>
                                        <span class="text-indigo-300">${Math.floor(xpInLevel)} / ${nextLevelXp} XP</span>
                                    </div>
                                    <div class="w-full bg-gray-800/50 h-4 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                        <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] relative overflow-hidden" style="width: ${progressPercent}%">
                                            <div class="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            <div class="glass p-5 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-indigo-500/30 transition">
                                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110">
                                    <i class="fas fa-bolt text-6xl text-yellow-400"></i>
                                </div>
                                <div class="text-3xl md:text-4xl font-bold text-white mb-1">${Math.floor(store.user?.xp || 0)}</div>
                                <div class="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total XP Earned</div>
                            </div>

                            <div class="glass p-5 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-orange-500/30 transition">
                                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110">
                                    <i class="fas fa-fire text-6xl text-orange-500"></i>
                                </div>
                                <div class="text-3xl md:text-4xl font-bold text-white mb-1">${store.user?.streak || 0} <span class="text-lg text-gray-500">Days</span></div>
                                <div class="text-xs text-gray-400 uppercase tracking-wider font-semibold">Current Streak</div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <div class="lg:col-span-2 glass p-6 rounded-3xl border border-white/5">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-xl font-bold flex items-center gap-2">
                                    <span class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><i class="fas fa-chart-line"></i></span>
                                    Learning Velocity
                                </h3>
                                <select class="bg-gray-800/50 border-none text-xs rounded-lg px-3 py-1 text-gray-400 outline-none">
                                    <option>Last 7 Days</option>
                                </select>
                            </div>
                            <div class="relative w-full h-64 md:h-72">
                                <canvas id="progressChart"></canvas>
                            </div>
                        </div>

                        <div class="glass p-6 rounded-3xl border border-white/5 flex flex-col">
                            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                                <span class="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400"><i class="fas fa-medal"></i></span>
                                Recent Unlocks
                            </h3>
                            
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1 max-h-[300px]">
                                ${(store.user?.badges?.slice(-4).reverse() || []).map(badgeId => {
                const badge = BADGES[badgeId];
                if (!badge) return '';
                return `
                                        <div class="flex items-center gap-4 p-3 rounded-2xl bg-gradient-to-r from-gray-800/50 to-transparent hover:from-white/5 border border-transparent hover:border-white/10 transition group">
                                            <div class="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">${badge.icon}</div>
                                            <div class="flex-1 min-w-0">
                                                <div class="font-bold text-sm text-gray-200 truncate">${badge.name}</div>
                                                <div class="text-[10px] text-gray-400 truncate">${badge.desc}</div>
                                            </div>
                                            <div class="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg">+${badge.xp}</div>
                                        </div>
                                    `;
            }).join('')}
                                
                                ${(!store.user?.badges?.length) ? `
                                    <div class="h-full flex flex-col items-center justify-center text-gray-500 opacity-60 py-8">
                                        <i class="fas fa-lock text-3xl mb-3"></i>
                                        <p class="text-sm">No badges yet.</p>
                                        <p class="text-xs">Complete a lesson to unlock!</p>
                                    </div>
                                ` : ''}
                            </div>
                            
                            <button onclick="store.view='profile'; render()" class="w-full mt-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition border border-white/5">
                                View All Badges
                            </button>
                        </div>
                    </div>

                    <div class="glass p-1 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600">
                        <div class="bg-[#0b0f19] rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" 
                                style="background-image: radial-gradient(#6366f1 1px, transparent 1px); background-size: 20px 20px;"></div>

                            <div class="relative z-10 flex items-center gap-6">
                                <div class="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-600/30 animate-bounce">
                                    📚
                                </div>
                                <div>
                                    <h3 class="text-xl md:text-2xl font-bold text-white">Ready to continue?</h3>
                                    <p class="text-gray-400 text-sm md:text-base">
                                        You have <span class="text-indigo-400 font-bold">${Object.keys(SYLLABUS[store.user?.standard || '10th'] || {}).length} subjects</span> available to master.
                                    </p>
                                </div>
                            </div>
                            
                            <button onclick="store.view='syllabus'; render()" 
                                class="relative z-10 w-full md:w-auto bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Resume Learning <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            `;
        };

        const ViewSyllabus = () => {
            if (!store.user?.standard) {
                return `
                    <div class="max-w-6xl mx-auto text-center py-20">
                        <div class="glass p-8 rounded-2xl inline-block">
                            <h2 class="text-2xl font-bold mb-4">No Class Selected</h2>
                            <p class="text-gray-400 mb-6">Please select your class to view the syllabus.</p>
                            <button onclick="setStandard('10th')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition">
                                Select Class
                            </button>
                        </div>
                    </div>
                `;
            }

            let subjectsObj = SYLLABUS[store.user?.standard] || {};
            let subjectEntries = Object.entries(subjectsObj);

            // FIX: Reorder subjects based on Branch preference (Engineering Only)
            if (store.user?.standard === 'Engineering' && store.user?.branch) {
                subjectEntries.sort((a, b) => {
                    const [subA] = a;
                    const [subB] = b;
                    const myBranch = store.user.branch;

                    // 1. Put my branch subjects FIRST
                    if (subA === myBranch) return -1;
                    if (subB === myBranch) return 1;

                    // 2. Put Engineering Mathematics SECOND
                    if (subA === "Engineering Mathematics") return -1;
                    if (subB === "Engineering Mathematics") return 1;

                    return 0;
                });
            }

            return `
                <div class="max-w-6xl mx-auto">
                    <div class="flex items-center justify-between mb-8">
                        <div>
                            <h2 class="text-3xl font-bold gradient-text">${store.user.standard} Syllabus</h2>
                            <p class="text-gray-400">
                                ${store.user.branch ? `<span class="text-indigo-400 font-bold"><i class="fas fa-code-branch"></i> ${store.user.branch}</span> • ` : ''}
                                Complete topics to earn XP
                            </p>
                        </div>
                        <div class="glass px-4 py-2 rounded-lg">
                            <span class="text-green-400">
                                <i class="fas fa-check-circle mr-2"></i>${store.user.completedTopics?.length || 0} Completed
                            </span>
                        </div>
                    </div>
                    
                    <div class="space-y-6">
                        ${subjectEntries.map(([subject, topics]) => `
                            <div class="glass rounded-2xl overflow-hidden border border-gray-700/50">
                                <div class="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-5 border-b border-white/5">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                                            ${subject === store.user.branch ? '<i class="fas fa-star text-yellow-400"></i>' : ''}
                                            ${subject}
                                        </h3>
                                        <span class="bg-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-300">${topics.length} Units</span>
                                    </div>
                                </div>
                                <div class="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    ${topics.map(topic => {
                const isComplex = typeof topic === 'object';
                const topicName = isComplex ? topic.title : topic;
                const topicKey = `${subject}:${topicName}`;
                const isCompleted = store.user.completedTopics?.includes(topicKey);

                if (isComplex) {
                    // Engineering/Complex Topic (with subtopics)
                    return `
                                                <div class="glass border border-gray-700 rounded-xl overflow-hidden group hover:border-indigo-500/50 transition">
                                                    <div onclick="startLesson('${subject}', '${topicName}')" 
                                                         class="p-4 cursor-pointer hover:bg-white/5 transition flex justify-between items-center ${isCompleted ? 'bg-green-900/20' : ''}">
                                                        <div class="font-bold text-lg ${isCompleted ? 'text-green-400' : 'text-indigo-300'}">
                                                            ${topicName}
                                                        </div>
                                                        <div class="text-[10px] text-gray-400 uppercase tracking-wider bg-black/30 px-2 py-1 rounded">
                                                            ${topic.subtopics.length} Modules
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="bg-black/20 p-2 space-y-1 border-t border-white/5">
                                                        ${topic.subtopics.map(sub => {
                        const subKey = `${topicName}: ${sub}`;
                        const fullSubKey = `${subject}:${subKey}`;
                        const isSubDone = store.user.completedTopics?.includes(fullSubKey);
                        return `
                                                                <div onclick="event.stopPropagation(); startLesson('${subject}', '${subKey}')"
                                                                    class="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/10 transition pl-4 group/sub">
                                                                    <div class="w-1.5 h-1.5 rounded-full ${isSubDone ? 'bg-green-500 shadow-[0_0_5px_lime]' : 'bg-gray-600'}"></div>
                                                                    <div class="text-sm text-gray-300 flex-1 group-hover/sub:text-white transition">${sub}</div>
                                                                    <i class="fas fa-play-circle text-gray-600 group-hover/sub:text-indigo-400 text-xs"></i>
                                                                </div>
                                                            `;
                    }).join('')}
                                                    </div>
                                                </div>
                                            `;
                } else {
                    // Standard Topic (School)
                    return `
                                                <div onclick="startLesson('${subject}','${topic}')" 
                                                    class="p-4 rounded-xl hover:bg-white/5 cursor-pointer border ${isCompleted ? 'border-green-500/30 bg-green-500/10' : 'border-gray-700'} transition group hover:scale-[1.01]">
                                                    <div class="flex items-center justify-between mb-2">
                                                        <span class="font-semibold ${isCompleted ? 'text-green-300' : 'text-gray-300 group-hover:text-white'}">${topic}</span>
                                                        ${isCompleted ? '<span class="text-green-400"><i class="fas fa-check-circle"></i></span>' : '<i class="fas fa-chevron-right text-gray-600 group-hover:text-indigo-400 transition"></i>'}
                                                    </div>
                                                    <div class="flex items-center justify-between text-sm">
                                                        <span class="text-gray-500 text-xs">Tap to start</span>
                                                        <span class="text-yellow-400/80 text-xs font-mono">+50 XP</span>
                                                    </div>
                                                </div>
                                            `;
                }
            }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        };
