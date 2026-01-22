// ================= CONFIGURATION =================
const FIREBASE_CONFIG = {
    
};

const CONFIG = {
    
};

// ================= SYLLABUS =================
const SYLLABUS = {
    "6th": {
        "Mathematics": ["Knowing Our Numbers", "Whole Numbers", "Playing With Numbers", "Basic Geometrical Ideas", "Integers", "Fractions", "Decimals", "Data Handling", "Mensuration", "Algebra", "Ratio & Proportion", "Symmetry", "Practical Geometry"],
        "Science": ["Food: Where Does It Come From?", "Components of Food", "Fibre to Fabric", "Sorting Materials into Groups", "Separation of Substances", "Changes Around Us", "Getting to Know Plants", "Body Movements", "The Living Organisms", "Motion & Measurement", "Light, Shadows & Reflections", "Electricity & Circuits", "Fun with Magnets", "Water", "Air Around Us", "Garbage In, Garbage Out"],
        "Social Science": ["What, Where, How & When?", "On The Trial of Earliest People", "From Gathering to Growing Food", "In the Earliest Cities", "What Books & Burials Tell Us", "Kingdoms, Kings & Early Republic", "New Questions & Ideas", "Ashoka, The Emperor Who Gave Up War", "Vital Villages, Thriving Towns", "Traders, Kings & Pilgrims", "New Empires & Kingdoms", "Buildings, Paintings & Books", "The Earth in Solar System", "Globe: Latitudes & Longitudes", "Motions of Earth", "Maps", "Major Domains of Earth", "Major Landforms of Earth", "Our Country India", "India: Climate, Vegetation & Wildlife"],
        "English": ["Who Did Patrick's Homework?", "How the Dog Found Himself", "Taro's Reward", "An Indian-American Woman", "A Different Kind of School", "Who I Am", "Fair Play", "A Game of Chance", "Desert Animals", "The Banyan Tree"]
    },
    "7th": {
        "Mathematics": ["Integers", "Fractions & Decimals", "Data Handling", "Simple Equations", "Lines & Angles", "Triangle & Its Properties", "Congruence of Triangles", "Comparing Quantities", "Rational Numbers", "Practical Geometry", "Perimeter & Area", "Algebraic Expressions", "Exponents & Powers", "Symmetry", "Visualising Solid Shapes"],
        "Science": ["Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat", "Acids, Bases & Salts", "Physical & Chemical Changes", "Weather, Climate & Adaptations", "Winds, Storms & Cyclones", "Soil", "Respiration in Organisms", "Transportation in Animals & Plants", "Reproduction in Plants", "Motion & Time", "Electric Current & Effects", "Light", "Water: A Precious Resource", "Forests: Our Lifeline", "Wastewater Story"],
        "Social Science": ["Tracing Changes", "New Kings & Kingdoms", "The Delhi Sultans", "The Mughal Empire", "Rulers & Buildings", "Towns, Traders & Craftspersons", "Tribes, Nomads & Settled Communities", "Devotional Paths", "The Making of Regional Cultures", "Eighteenth-Century Political Formations", "Environment", "Inside Our Earth", "Our Changing Earth", "Air", "Water", "Natural Vegetation", "Human Environment", "Life in Deserts"],
        "English": ["Three Questions", "A Gift of Chappals", "Gopal & the Hilsa Fish", "The Ashes that Made Trees", "Quality", "Expert Detectives", "The Invention of Vita-Wonk", "Fire: Friend & Foe", "A Bicycle in Good Repair", "The Story of Cricket"]
    },
    "8th": {
        "Mathematics": ["Rational Numbers", "Linear Equations", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Squares & Square Roots", "Cubes & Cube Roots", "Comparing Quantities", "Algebraic Expressions", "Visualising Solid Shapes", "Mensuration", "Exponents & Powers", "Direct & Inverse Proportions", "Factorisation", "Introduction to Graphs", "Playing with Numbers"],
        "Science": ["Crop Production", "Microorganisms", "Synthetic Fibres", "Materials: Metals & Non-Metals", "Coal & Petroleum", "Combustion & Flame", "Conservation of Plants", "Cell Structure & Functions", "Reproduction in Animals", "Reaching Age of Adolescence", "Force & Pressure", "Friction", "Sound", "Chemical Effects of Current", "Some Natural Phenomena", "Light", "Stars & Solar System", "Pollution of Air & Water"],
        "Social Science": ["How, When & Where", "From Trade to Territory", "Ruling the Countryside", "Tribals, Dikus & Vision", "When People Rebel", "Colonialism & City", "Weavers, Iron Smelters", "Civilising the Native", "Women, Caste & Reform", "The Changing World", "India After Independence", "Resources", "Land, Soil, Water", "Natural Vegetation", "Mineral & Power Resources", "Agriculture", "Industries", "Human Resources"],
        "English": ["The Best Christmas Present", "The Tsunami", "Glimpses of the Past", "Bepin Choudhury's Lapse", "The Summit Within", "This is Jody's Fawn", "A Visit to Cambridge", "A Short Monsoon Diary", "The Great Stone Face"]
    },
    "9th": {
        "Mathematics": ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Introduction to Euclid", "Lines & Angles", "Triangles", "Quadrilaterals", "Areas of Parallelograms", "Circles", "Constructions", "Heron's Formula", "Surface Areas", "Statistics", "Probability"],
        "Science": ["Matter in Surroundings", "Is Matter Around Us Pure?", "Atoms & Molecules", "Structure of Atom", "Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms", "Motion", "Force & Laws of Motion", "Gravitation", "Work & Energy", "Sound", "Why Do We Fall Ill?", "Natural Resources", "Improvement in Food Resources"],
        "Social Science": ["French Revolution", "Socialism in Europe", "Nazism & Rise of Hitler", "Forest Society", "Pastoralists in Modern", "Peasants & Farmers", "History & Sport", "Clothing: A Social History", "India Size & Location", "Physical Features of India", "Drainage", "Climate", "Natural Vegetation", "Population", "What is Democracy?", "Constitutional Design", "Electoral Politics", "Working of Institutions", "Democratic Rights"],
        "English": ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", "The Snake & the Mirror", "My Childhood", "Packing", "Reach for the Top", "The Bond of Love", "Kathmandu", "If I Were You"]
    },
    "10th": {
        "Mathematics": ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Applications of Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Areas", "Statistics", "Probability"],
        "Science": ["Chemical Reactions", "Acids, Bases & Salts", "Metals & Non-Metals", "Carbon & Compounds", "Life Processes", "Control & Coordination", "How Do Organisms Reproduce?", "Heredity & Evolution", "Light: Reflection", "Human Eye & Colorful World", "Electricity", "Magnetic Effects", "Sources of Energy", "Our Environment", "Management of Resources"],
        "Social Science": ["Rise of Nationalism", "Nationalism in India", "Making of Global World", "Age of Industrialization", "Print Culture", "Novels, Society & History", "Resources & Development", "Forest & Wildlife", "Water Resources", "Agriculture", "Minerals & Energy", "Manufacturing Industries", "Lifelines of Economy", "Power Sharing", "Federalism", "Democracy & Diversity", "Gender, Religion & Caste", "Popular Struggles", "Political Parties", "Outcomes of Democracy"],
        "English": ["A Letter to God", "Nelson Mandela", "Two Stories About Flying", "From the Diary of Anne", "The Hundred Dresses", "The Proposal", "The Sermon at Benares", "The Necklace", "The Hack Driver", "Bholi", "The Book that Saved Earth"]
    },
    "11th": {
        "Physics": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles & Rotation", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
        "Chemistry": ["Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "s-Block Elements", "p-Block Elements", "Organic Chemistry Basics", "Hydrocarbons", "Environmental Chemistry"],
        "Mathematics": ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Math Induction", "Complex Numbers", "Linear Inequalities", "Permutations & Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "3D Geometry Intro", "Limits and Derivatives", "Mathematical Reasoning", "Statistics", "Probability"],
        "Biology": ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Org in Animals", "Cell: The Unit of Life", "Biomolecules", "Cell Cycle & Division", "Transport in Plants", "Mineral Nutrition", "Photosynthesis", "Respiration in Plants", "Plant Growth & Development", "Digestion and Absorption", "Breathing & Exchange of Gases", "Body Fluids & Circulation", "Excretory Products", "Locomotion & Movement", "Neural Control", "Chemical Coordination"]
    },
    "12th": {
        "Physics": ["Electrostatics", "Current Electricity", "Magnetic Effects of Current", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics", "Wave Optics", "Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor Electronics", "Communication Systems"],
        "Chemistry": ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Metallurgy", "p-Block Elements", "d and f Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones, Carboxylic", "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life"],
        "Mathematics": ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity & Differentiability", "Applications of Derivatives", "Integrals", "Applications of Integrals", "Differential Equations", "Vector Algebra", "3D Geometry", "Linear Programming", "Probability"],
        "Biology": ["Reproduction in Organisms", "Sexual Reproduction in Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Strategies for Food Production", "Microbes in Human Welfare", "Biotechnology: Principles", "Biotechnology: Applications", "Organisms and Populations", "Ecosystem", "Biodiversity & Conservation", "Environmental Issues"]
    },
    "Engineering": {
        "Computer Science": [
            { title: "C Programming", subtopics: ["Basics & Syntax", "Pointers & Memory", "File Handling"] },
            { title: "Data Structures (DSA)", subtopics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees & BST", "Graphs", "Hashing", "Heaps"] },
            { title: "Algorithms", subtopics: ["Sorting Techniques", "Searching Algorithms", "Dynamic Programming", "Greedy Algorithms"] },
            { title: "Operating Systems", subtopics: ["Process Management", "Memory Management", "Deadlocks", "File Systems"] },
            { title: "DBMS", subtopics: ["SQL Basics", "Normalization", "Transactions", "NoSQL Introduction"] },
            { title: "Computer Networks", subtopics: ["OSI Model", "TCP/IP Protocol", "HTTP/HTTPS", "Network Security"] },
            { title: "Artificial Intelligence", subtopics: ["Machine Learning Basics", "Neural Networks", "NLP Introduction"] }
        ],
        "Web Development": [
            { title: "Frontend", subtopics: ["HTML5 & Semantics", "CSS3, Flexbox & Grid", "JavaScript ES6+", "React: Components & Hooks", "Redux State Management"] },
            { title: "Backend", subtopics: ["Node.js Runtime", "Express.js Framework", "REST API Design", "Authentication (JWT)", "GraphQL"] },
            { title: "Database", subtopics: ["MongoDB & Mongoose", "PostgreSQL Basics", "Firebase Realtime DB"] },
            { title: "DevOps & Tools", subtopics: ["Git & GitHub", "Docker Basics", "CI/CD Pipelines", "AWS Deployment"] }
        ],
        "Electronics & Comm": [
            { title: "Circuit Theory", subtopics: ["Network Theorems", "AC Analysis", "Transient Response"] },
            { title: "Digital Electronics", subtopics: ["Boolean Algebra", "Combinational Circuits", "Sequential Circuits", "Microprocessors (8085/8086)"] },
            { title: "Analog Electronics", subtopics: ["Diodes & Rectifiers", "Transistors (BJT/FET)", "Op-Amps"] },
            { title: "Signals & Systems", subtopics: ["Fourier Series", "Laplace Transforms", "Z-Transforms"] },
            { title: "Communication", subtopics: ["Analog Modulation", "Digital Communication", "Satellite Communication"] }
        ],
        "Electrical": [
            { title: "Power Systems", subtopics: ["Transmission Lines", "Fault Analysis", "Stability"] },
            { title: "Electrical Machines", subtopics: ["DC Machines", "Transformers", "Induction Motors", "Synchronous Machines"] },
            { title: "Control Systems", subtopics: ["Block Diagrams", "Time Response Analysis", "Frequency Response"] },
            { title: "Power Electronics", subtopics: ["Thyristors", "Inverters", "Choppers"] }
        ],
        "Mechanical": [
            { title: "Thermodynamics", subtopics: ["Laws of Thermodynamics", "Entropy", "Power Cycles"] },
            { title: "Fluid Mechanics", subtopics: ["Fluid Properties", "Bernoulli's Equation", "Flow Through Pipes"] },
            { title: "Theory of Machines", subtopics: ["Kinematics", "Dynamics", "Vibrations"] },
            { title: "Machine Design", subtopics: ["Stress & Strain", "Failure Theories", "Gears & Bearings"] }
        ],
        "Engineering Mathematics": [
            { title: "Calculus", subtopics: ["Limits & Continuity", "Differentiation", "Integration", "Multivariable Calculus"] },
            { title: "Linear Algebra", subtopics: ["Matrices", "Determinants", "Eigenvalues", "Vector Spaces"] },
            { title: "Differential Equations", subtopics: ["First Order ODEs", "Higher Order ODEs", "Laplace Transforms", "PDEs"] },
            { title: "Complex Analysis", subtopics: ["Complex Numbers", "Analytic Functions", "Complex Integration"] },
            { title: "Probability & Stats", subtopics: ["Probability Distributions", "Hypothesis Testing", "Regression Analysis"] },
            { title: "Numerical Methods", subtopics: ["Root Finding", "Numerical Integration", "Interpolation"] }
        ]
    },
    "Professional Skills": {
        "Programming Stack": ["Python", "Java", "React JS", "Node JS", "Git & GitHub"],
        "Data Science": ["Power BI", "SQL", "Tableau", "Python for Data"],
        "Design & Creative": ["Figma UI/UX", "Adobe Photoshop", "Video Editing", "Copywriting"],
        "Business": ["Digital Marketing", "Entrepreneurship", "Financial Literacy"]
    }
};

// ================= BADGES =================
const BADGES = {
    'newbie': { id: 'newbie', icon: '🚀', name: 'Liftoff', desc: 'Started your journey', xp: 50, tier: 'bronze' },
    'scholar': { id: 'scholar', icon: '📖', name: 'Scholar', desc: 'Completed first lesson', xp: 100, tier: 'bronze' },
    'quiz_master': { id: 'quiz_master', icon: '🧠', name: 'Brainiac', desc: 'Scored 100% on quiz', xp: 150, tier: 'silver' },
    'night_owl': { id: 'night_owl', icon: '🦉', name: 'Night Owl', desc: 'Studied after 10 PM', xp: 75, tier: 'bronze' },
    'streak_3': { id: 'streak_3', icon: '🔥', name: 'On Fire', desc: '3 Day Login Streak', xp: 200, tier: 'silver' },
    'streak_7': { id: 'streak_7', icon: '🌟', name: 'Weekly Warrior', desc: '7 Day Login Streak', xp: 500, tier: 'gold' },
    'streak_30': { id: 'streak_30', icon: '👑', name: 'Legendary', desc: '30 Day Login Streak', xp: 2000, tier: 'platinum' },
    'socialite': { id: 'socialite', icon: '💬', name: 'Connector', desc: 'Sent 10 messages', xp: 150, tier: 'bronze' },
    'perfectionist': { id: 'perfectionist', icon: '🎯', name: 'Perfectionist', desc: 'Perfect score in all quizzes', xp: 1000, tier: 'platinum' },
    'speedster': { id: 'speedster', icon: '⚡', name: 'Speedster', desc: 'Complete quiz under 1 min', xp: 300, tier: 'silver' },
    'explorer': { id: 'explorer', icon: '🧭', name: 'Explorer', desc: 'Visit all subjects', xp: 400, tier: 'silver' },
    'bookworm': { id: 'bookworm', icon: '📚', name: 'Bookworm', desc: 'Read 100 pages', xp: 500, tier: 'gold' },
    'debater': { id: 'debater', icon: '🎤', name: 'Debater', desc: 'Participate in 5 discussions', xp: 300, tier: 'silver' },
    'helper': { id: 'helper', icon: '🤝', name: 'Helper', desc: 'Help 5 classmates', xp: 400, tier: 'silver' },
    'early_bird': { id: 'early_bird', icon: '🌅', name: 'Early Bird', desc: 'Study before 6 AM', xp: 200, tier: 'bronze' },
    'marathon': { id: 'marathon', icon: '🏃', name: 'Marathon', desc: 'Study 5 hours continuously', xp: 800, tier: 'gold' },
    'polyglot': { id: 'polyglot', icon: '🌐', name: 'Polyglot', desc: 'Learn 3 languages', xp: 1500, tier: 'platinum' },
    'scientist': { id: 'scientist', icon: '🔬', name: 'Scientist', desc: 'Complete all science topics', xp: 1200, tier: 'platinum' },
    'mathematician': { id: 'mathematician', icon: '📐', name: 'Mathematician', desc: 'Complete all math topics', xp: 1200, tier: 'platinum' },
    'historian': { id: 'historian', icon: '🏛️', name: 'Historian', desc: 'Complete all history topics', xp: 1000, tier: 'platinum' },
    'test_champion': { id: 'test_champion', icon: '🏆', name: 'Test Champion', desc: 'Top rank in monthly test', xp: 1500, tier: 'platinum' },
    'consistency_king': { id: 'consistency_king', icon: '👑', name: 'Consistency King', desc: '30 days learning streak', xp: 2000, tier: 'platinum' },
    'quick_learner': { id: 'quick_learner', icon: '🚀', name: 'Quick Learner', desc: 'Complete course 2x faster', xp: 800, tier: 'gold' },
    'note_taker': { id: 'note_taker', icon: '📝', name: 'Note Taker', desc: 'Take 100 notes', xp: 500, tier: 'silver' },
    'video_binger': { id: 'video_binger', icon: '🎬', name: 'Video Binger', desc: 'Watch 50 videos', xp: 600, tier: 'silver' },
    'question_master': { id: 'question_master', icon: '❓', name: 'Question Master', desc: 'Ask 50 questions', xp: 400, tier: 'silver' },
    'accuracy_90': { id: 'accuracy_90', icon: '🎯', name: 'Sharpshooter', desc: '90%+ accuracy in tests', xp: 1000, tier: 'gold' },
    'completionist': { id: 'completionist', icon: '✅', name: 'Completionist', desc: 'Complete entire syllabus', xp: 3000, tier: 'platinum' },
    'peer_mentor': { id: 'peer_mentor', icon: '👨‍🏫', name: 'Peer Mentor', desc: 'Mentor 10 students', xp: 1500, tier: 'platinum' },
    'weekend_warrior': { id: 'weekend_warrior', icon: '⚔️', name: 'Weekend Warrior', desc: 'Complete weekend challenges', xp: 700, tier: 'gold' },
    'all_rounder': { id: 'all_rounder', icon: '🦸', name: 'All Rounder', desc: 'Excel in all subjects', xp: 2500, tier: 'platinum' }
};

// ================= STATE MANAGEMENT =================
const store = {
    user: null,
    view: 'loading',
    current: { subject: null, chapter: null, topic: null },
    ui: {
        loading: false,
        sidebarOpen: false,
        testType: 'standard',
        timer: 0,
        testActive: false
    },
    users: [],
    testQuestions: [],
    userAnswers: [],
    testStartTime: null,
    learningData: [],
    dailyStreak: 0,
    currentQuestionIndex: 0,
    quizAnswers: [],
    currentSandboxChallenge: null,
    currentChatPeer: null,
    sandboxStats: { solved: 0, attempted: 0, accuracy: 0 },
    aiTestData: null,
    currentAITestId: null
};

// ================= HELPER FUNCTIONS =================
const $ = (s) => document.querySelector(s);
const ensureUserLoaded = () => new Promise((resolve, reject) => {
    if (store.user) resolve(store.user);
    else {
        let attempts = 0;
        const checkUser = setInterval(() => {
            attempts++;
            if (store.user) {
                clearInterval(checkUser);
                resolve(store.user);
            } else if (attempts >= 50) {
                clearInterval(checkUser);
                reject(new Error('User not loaded after timeout'));
            }
        }, 100);
    }
});
