 window.initSandboxResizer = () => {
            const resizer = document.getElementById('sandbox-resizer');
            const leftPanel = document.getElementById('sandbox-left-panel');
            const container = document.getElementById('sandbox-container');

            if (!resizer || !leftPanel || !container) return;

            let isResizing = false;

            resizer.addEventListener('mousedown', (e) => {
                isResizing = true;
                document.body.style.cursor = 'col-resize';
                resizer.classList.add('bg-indigo-500');
                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isResizing) return;
                const containerRect = container.getBoundingClientRect();
                const newWidth = e.clientX - containerRect.left;
                const percentage = (newWidth / containerRect.width) * 100;

                if (percentage > 20 && percentage < 80) {
                    leftPanel.style.width = `${percentage}%`;
                    leftPanel.style.flex = 'none';
                }
            });

            document.addEventListener('mouseup', () => {
                if (isResizing) {
                    isResizing = false;
                    document.body.style.cursor = 'default';
                    resizer.classList.remove('bg-indigo-500');
                }
            });
        };
        // ================= ENHANCED SANDBOX VIEW =================
        // ================= ENHANCED SANDBOX VIEW =================
        // ================= ENHANCED SANDBOX VIEW =================
        const ViewSandbox = () => {
            const sandboxStats = store.user?.sandboxStats || { solved: 0, attempted: 0, accuracy: 0 };
            const accuracy = sandboxStats.attempted > 0 ? Math.round((sandboxStats.solved / sandboxStats.attempted) * 100) : 0;

            return `
                <div class="max-w-7xl mx-auto h-[calc(100vh-140px)] flex flex-col sandbox-container">
                    <div class="mb-4 md:mb-6">
                        <h2 class="text-2xl md:text-3xl font-bold gradient-text mb-2">
                            <i class="fas fa-code mr-2"></i>AI Scenario Sandbox
                        </h2>
                        <p class="text-gray-400">Solve real-world problems based on your syllabus</p>
                        
                        <div class="flex flex-wrap gap-4 mt-4">
                            <div class="sandbox-stats glass p-3 rounded-xl flex items-center gap-3">
                                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-check text-green-400"></i>
                                </div>
                                <div>
                                    <div class="text-lg font-bold">${sandboxStats.solved}</div>
                                    <div class="text-xs text-gray-400">Solved</div>
                                </div>
                            </div>
                            <div class="sandbox-stats glass p-3 rounded-xl flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-play text-blue-400"></i>
                                </div>
                                <div>
                                    <div class="text-lg font-bold">${sandboxStats.attempted}</div>
                                    <div class="text-xs text-gray-400">Attempted</div>
                                </div>
                            </div>
                            <div class="sandbox-stats glass p-3 rounded-xl flex items-center gap-3">
                                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <i class="fas fa-bullseye text-purple-400"></i>
                                </div>
                                <div>
                                    <div class="text-lg font-bold">${accuracy}%</div>
                                    <div class="text-xs text-gray-400">Accuracy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass p-3 md:p-4 rounded-xl mb-4 sandbox-controls">
                        <div class="flex flex-wrap gap-2 md:gap-4 items-center">
                            <select id="sandbox-class" onchange="updateSandboxSubjects()" 
                                class="flex-1 min-w-[100px] bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500">
                                ${Object.keys(SYLLABUS).map(std =>
                `<option value="${std}" ${store.user?.standard === std ? 'selected' : ''}>${std}</option>`
            ).join('')}
                            </select>

                            <select id="sandbox-subject" onchange="updateSandboxTopics()"
                                class="flex-1 min-w-[120px] bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500">
                                <option value="">Select Subject</option>
                            </select>

                            <select id="sandbox-topic-select" onchange="toggleCustomTopic()"
                                class="flex-1 min-w-[150px] bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500">
                                <option value="">Select Topic (Optional)</option>
                                <option value="general">General Questions</option>
                                <option value="custom">Custom Topic...</option>
                            </select>

                            <input type="text" id="sandbox-topic-custom" placeholder="Type custom topic..." 
                                class="hidden flex-1 min-w-[150px] bg-gray-800 border border-indigo-500 rounded-lg px-3 py-2 text-sm outline-none">

                            <button onclick="getSandboxChallenge()" 
                                class="flex-1 min-w-[140px] bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-bold shadow-lg text-sm transition flex items-center justify-center gap-2">
                                <i class="fas fa-magic"></i> Generate
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-0">
                        <div class="glass flex flex-col rounded-2xl overflow-hidden border border-gray-700 sandbox-column">
                            <div class="bg-gray-800/50 p-3 border-b border-gray-700 flex justify-between items-center">
                                <span class="text-sm font-mono text-gray-400">Challenge Scenario</span>
                                <span class="text-xs text-indigo-400 bg-indigo-900/30 px-2 py-1 rounded">AI Generated</span>
                            </div>
                            
                            <div id="sandbox-challenge-display" class="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 overflow-y-auto max-h-[250px] md:max-h-[300px] min-h-[150px]">
                                <div class="text-center text-gray-400 py-4">
                                    <i class="fas fa-robot text-3xl mb-2"></i>
                                    <p>Select Class & Subject above, then click <b>Generate</b>.</p>
                                    <p class="text-xs mt-1">Topic is optional - leave blank for general questions</p>
                                </div>
                            </div>

                            <textarea id="sandbox-input" 
                                class="flex-1 bg-[#0f141f] p-4 md:p-6 font-mono text-sm md:text-base text-gray-200 outline-none resize-none focus:bg-[#131926] transition min-h-[200px] md:min-h-[300px]" 
                                placeholder="Type your solution/answer here..." 
                                rows="8"></textarea>
                            
                            <div class="p-3 bg-gray-800/50 border-t border-gray-700 text-right">
                                <button onclick="runSandbox()" 
                                    class="bg-green-600 hover:bg-green-700 px-4 md:px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-green-600/20 transition">
                                    <i class="fas fa-check-circle mr-2"></i>Submit & Check
                                </button>
                            </div>
                        </div>

                        <div class="glass flex flex-col rounded-2xl overflow-hidden border border-gray-700 sandbox-column">
                            <div class="bg-gray-800/50 p-3 border-b border-gray-700 flex justify-between items-center">
                                <span class="text-sm font-mono text-gray-400">AI Tutor Feedback</span>
                                <div class="flex gap-1">
                                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div id="sandbox-output" class="flex-1 bg-[#0b0f19] p-4 md:p-6 overflow-y-auto font-mono text-sm">
                                <div class="text-gray-500 text-center py-8 md:py-20">
                                    <i class="fas fa-terminal text-3xl md:text-4xl mb-4 opacity-50"></i>
                                    <p>Feedback will appear here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        // ================= ENHANCED TEST REPORT VIEW =================
        const ViewTestReport = () => {
            const latestTest = store.user?.testScores?.[store.user.testScores.length - 1];
            if (!latestTest) return `
                <div class="max-w-4xl mx-auto">
                    <div class="glass p-8 rounded-2xl text-center">
                        <div class="text-6xl mb-6">📝</div>
                        <h2 class="text-3xl font-bold mb-2">No Test Results</h2>
                        <p class="text-gray-400 mb-8">Take a test to see your results</p>
                        <button onclick="store.view='testSeries'; render()" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
                            Take a Test
                        </button>
                    </div>
                </div>
            `;

            const subjectBreakdown = {};
            store.testQuestions.forEach((q, idx) => {
                const subject = q.subject || 'General';
                if (!subjectBreakdown[subject]) {
                    subjectBreakdown[subject] = { correct: 0, total: 0 };
                }
                subjectBreakdown[subject].total++;
                if (store.userAnswers[idx] === q.ans) {
                    subjectBreakdown[subject].correct++;
                }
            });

            const timePerQuestion = latestTest.timeTaken / latestTest.total;
            const speedRating = timePerQuestion < 30 ? 'Fast' : timePerQuestion < 60 ? 'Moderate' : 'Slow';
            const speedColor = timePerQuestion < 30 ? 'text-green-400' : timePerQuestion < 60 ? 'text-yellow-400' : 'text-red-400';

            return `
                <div class="max-w-6xl mx-auto">
                    <div class="glass p-8 rounded-2xl text-center mb-8 test-report-card">
                        <div class="flex flex-col md:flex-row items-center justify-between mb-8">
                            <div class="text-left">
                                <h2 class="text-3xl font-bold mb-2">Test Completed!</h2>
                                <p class="text-gray-400">${latestTest.type === 'standard' ? 'Standard Test' :
                    latestTest.type === 'custom' ? 'Custom Test' :
                        'AI Global Test'}</p>
                            </div>
                            ${latestTest.rank ? `
                                <div class="rank-badge px-6 py-3 rounded-full mt-4 md:mt-0">
                                    <div class="text-2xl font-bold">Rank #${latestTest.rank}</div>
                                    <div class="text-sm">Top ${latestTest.percentile}%</div>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div class="glass p-4 rounded-xl">
                                <div class="text-3xl md:text-4xl font-bold ${latestTest.percentage >= 70 ? 'text-green-400' :
                    latestTest.percentage >= 50 ? 'text-yellow-400' :
                        'text-red-400'}">
                                    ${latestTest.percentage}%
                                </div>
                                <div class="text-sm text-gray-400">Score</div>
                                <div class="text-xs">${latestTest.score}/${latestTest.total}</div>
                            </div>
                            <div class="glass p-4 rounded-xl">
                                <div class="text-3xl md:text-4xl font-bold text-yellow-400">${latestTest.xpEarned}</div>
                                <div class="text-sm text-gray-400">XP Earned</div>
                                <div class="text-xs">+${Math.floor(latestTest.xpEarned / latestTest.score)} per correct</div>
                            </div>
                            <div class="glass p-4 rounded-xl">
                                <div class="text-3xl md:text-4xl font-bold text-indigo-400">
                                    ${Math.floor(latestTest.timeTaken / 60)}:${(latestTest.timeTaken % 60).toString().padStart(2, '0')}
                                </div>
                                <div class="text-sm text-gray-400">Time Taken</div>
                                <div class="text-xs ${speedColor}">${speedRating} pace</div>
                            </div>
                            <div class="glass p-4 rounded-xl">
                                <div class="text-3xl md:text-4xl font-bold text-purple-400">
                                    ${Math.round(latestTest.timeTaken / latestTest.total)}s
                                </div>
                                <div class="text-sm text-gray-400">Per Question</div>
                                <div class="text-xs">Average time</div>
                            </div>
                        </div>

                        <!-- Subject Breakdown -->
                        <div class="glass p-6 rounded-xl text-left mb-8">
                            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                                <i class="fas fa-chart-pie"></i> Subject Breakdown
                            </h3>
                            <div class="space-y-3">
                                ${Object.entries(subjectBreakdown).map(([subject, stats]) => {
                            const percentage = Math.round((stats.correct / stats.total) * 100);
                            return `
                                        <div>
                                            <div class="flex justify-between text-sm mb-1">
                                                <span>${subject}</span>
                                                <span>${stats.correct}/${stats.total} (${percentage}%)</span>
                                            </div>
                                            <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                                <div class="h-full ${percentage >= 70 ? 'bg-green-500' :
                                    percentage >= 50 ? 'bg-yellow-500' :
                                        'bg-red-500'}" 
                                                     style="width: ${percentage}%"></div>
                                            </div>
                                        </div>
                                    `;
                        }).join('')}
                            </div>
                        </div>

                        <!-- Performance Analysis -->
                        <div class="glass p-6 rounded-xl text-left mb-8">
                            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                                <i class="fas fa-robot"></i> AI Performance Analysis
                            </h3>
                            <div class="space-y-4">
                                <div class="p-4 bg-white/5 rounded-lg">
                                    <h4 class="font-bold text-lg mb-2 ${latestTest.percentage >= 70 ? 'text-green-400' :
                    latestTest.percentage >= 50 ? 'text-yellow-400' :
                        'text-red-400'}">
                                        ${latestTest.percentage >= 90 ? 'Outstanding! 🎉' :
                    latestTest.percentage >= 70 ? 'Great Job! 👍' :
                        latestTest.percentage >= 50 ? 'Good Effort! 📚' :
                            'Keep Practicing! 💪'}
                                    </h4>
                                    <p class="text-gray-300">
                                        ${latestTest.percentage >= 90 ? 'You have mastered the concepts. Consider challenging yourself with advanced topics.' :
                    latestTest.percentage >= 70 ? 'You have a solid understanding. Focus on the areas where you lost points to reach excellence.' :
                        latestTest.percentage >= 50 ? 'You\'re on the right track. Review the explanations and try similar questions.' :
                            'Take time to review the fundamental concepts. Practice more before attempting another test.'}
                                    </p>
                                </div>
                                
                                ${latestTest.percentage < 100 ? `
                                    <div class="p-4 bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                                        <h4 class="font-bold text-blue-300 mb-2">Recommendations</h4>
                                        <ul class="list-disc pl-5 space-y-1 text-sm">
                                            ${Object.entries(subjectBreakdown)
                        .filter(([_, stats]) => (stats.correct / stats.total) < 0.7)
                        .map(([subject, stats]) => {
                            const percentage = Math.round((stats.correct / stats.total) * 100);
                            return `<li>Focus on <strong>${subject}</strong> (${percentage}% correct)</li>`;
                        }).join('')}
                                            <li>Review all incorrect answers and their explanations</li>
                                            <li>Take topic-specific quizzes to strengthen weak areas</li>
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-wrap gap-4 justify-center">
                            <button onclick="store.view='test'; render()" 
                                class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition flex items-center gap-2">
                                <i class="fas fa-redo"></i> Review Solutions
                            </button>
                            <button onclick="store.view='testSeries'; render()" 
                                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition flex items-center gap-2">
                                <i class="fas fa-plus"></i> New Test
                            </button>
                            <button onclick="store.view='dashboard'; render()" 
                                class="px-6 py-3 glass hover:bg-white/10 rounded-lg font-semibold transition flex items-center gap-2">
                                <i class="fas fa-home"></i> Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            `;
        };
