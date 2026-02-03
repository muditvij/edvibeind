# EdVibe - Ultimate Learning Platform
## Design Specification

### 1. System Architecture

#### 1.1 High-Level Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client Side   │    │   Firebase       │    │  External APIs  │
│                 │    │   Backend        │    │                 │
│  ┌───────────┐  │    │  ┌─────────────┐ │    │ ┌─────────────┐ │
│  │    SPA    │  │◄──►│  │ Firestore   │ │    │ │ Gemini AI   │ │
│  │ (Vanilla  │  │    │  │ Database    │ │    │ │ API         │ │
│  │    JS)    │  │    │  └─────────────┘ │    │ └─────────────┘ │
│  └───────────┘  │    │  ┌─────────────┐ │    │ ┌─────────────┐ │
│  ┌───────────┐  │    │  │ Firebase    │ │    │ │ YouTube     │ │
│  │ Tailwind  │  │    │  │ Auth        │ │    │ │ Data API    │ │
│  │    CSS    │  │    │  └─────────────┘ │    │ └─────────────┘ │
│  └───────────┘  │    │  ┌─────────────┐ │    └─────────────────┘
└─────────────────┘    │  │ Firebase    │ │
                       │  │ Hosting     │ │
                       │  └─────────────┘ │
                       └──────────────────┘
```

#### 1.2 Component Architecture
```
EdVibe Application
├── Authentication Layer
│   ├── Firebase Auth Integration
│   ├── Google OAuth Provider
│   └── Session Management
├── State Management
│   ├── Global Store Object
│   ├── User State
│   ├── UI State
│   └── Learning Progress State
├── View Layer
│   ├── Single Page Application Router
│   ├── Component-based UI
│   └── Responsive Layout System
├── Business Logic Layer
│   ├── Learning Management
│   ├── Assessment Engine
│   ├── Gamification System
│   └── Social Features
└── Data Layer
    ├── Firebase Firestore
    ├── Local Storage
    └── External API Integration
```

### 2. Database Design

#### 2.1 Firestore Collections Structure

##### Users Collection
```javascript
users/{userId} {
  uid: string,
  name: string,
  email: string,
  photoURL: string,
  standard: string, // "6th", "7th", ..., "12th", "Engineering"
  branch?: string, // For engineering students
  xp: number,
  badges: string[], // Array of badge IDs
  streak: number,
  lastLogin: timestamp,
  totalStudyTime: number,
  completedTopics: string[],
  testScores: object[],
  xpHistory: object[],
  sandboxStats: {
    solved: number,
    attempted: number,
    accuracy: number
  },
  aiTestAttempts: object[],
  createdAt: timestamp
}
```

##### Global Tests Collection
```javascript
global_tests/{testId} {
  testId: string,
  userId: string,
  userName: string,
  standard: string,
  questions: object[],
  answers: number[],
  score: number,
  xpEarned: number,
  completedAt: timestamp,
  active: boolean,
  weekStart: string, // YYYY-MM-DD format
  month: string // YYYY-MM format
}
```

##### Leaderboard Entries Collection
```javascript
leaderboard_entries/{entryId} {
  userId: string,
  userName: string,
  photoURL: string,
  standard: string,
  xpEarned: number,
  score: number,
  weekStart: string,
  month: string,
  createdAt: timestamp
}
```

##### Chat Messages Collection
```javascript
chat_messages/{messageId} {
  senderId: string,
  senderName: string,
  receiverId: string,
  message: string,
  timestamp: timestamp,
  read: boolean
}
```

##### Class Chat Collection
```javascript
class_chat/{standard}/{messageId} {
  senderId: string,
  senderName: string,
  senderPhoto: string,
  message: string,
  timestamp: timestamp
}
```

#### 2.2 Data Relationships
- One-to-Many: User → Test Results
- One-to-Many: User → Chat Messages
- Many-to-Many: Users ↔ Badges
- One-to-Many: Standard → Class Chat Messages

### 3. User Interface Design

#### 3.1 Design System

##### Color Palette
```css
Primary Colors:
- Background: #0b0f19 (Dark Navy)
- Surface: rgba(255, 255, 255, 0.05) (Glass Effect)
- Primary: #6366f1 (Indigo)
- Secondary: #8b5cf6 (Purple)
- Accent: #ec4899 (Pink)

Text Colors:
- Primary Text: #ffffff (White)
- Secondary Text: #e5e7eb (Light Gray)
- Muted Text: #9ca3af (Gray)
- Success: #10b981 (Green)
- Warning: #f59e0b (Amber)
- Error: #ef4444 (Red)
```

##### Typography
```css
Font Family: 'Outfit', sans-serif
Headings: 
- H1: 3rem (48px), font-weight: 800
- H2: 2.25rem (36px), font-weight: 700
- H3: 1.875rem (30px), font-weight: 600
Body Text: 1rem (16px), font-weight: 400
Small Text: 0.875rem (14px), font-weight: 400
```

##### Glassmorphism Effects
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.glass-high {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### 3.2 Layout Structure

##### Desktop Layout (≥768px)
```
┌─────────────────────────────────────────────────────────┐
│                    Fixed Sidebar (256px)                │
│  ┌─────────────┐  ┌─────────────────────────────────────┤
│  │             │  │                                     │
│  │ Navigation  │  │         Main Content Area           │
│  │   Menu      │  │                                     │
│  │             │  │                                     │
│  │ - Dashboard │  │                                     │
│  │ - Syllabus  │  │                                     │
│  │ - Tests     │  │                                     │
│  │ - Sandbox   │  │                                     │
│  │ - Social    │  │                                     │
│  │ - Profile   │  │                                     │
│  │ - Leaderbd  │  │                                     │
│  │             │  │                                     │
│  │ User Info   │  │                                     │
│  └─────────────┘  └─────────────────────────────────────┘
└─────────────────────────────────────────────────────────┘
```

##### Mobile Layout (<768px)
```
┌─────────────────────────────────────────┐
│              Main Content               │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│        Bottom Navigation Bar            │
│  [Home] [Learn] [Tests] [AI] [Chat] [Me]│
└─────────────────────────────────────────┘
```

#### 3.3 Key UI Components

##### Navigation Component
- Fixed sidebar for desktop with glassmorphism effect
- Bottom tab bar for mobile with 6 main sections
- Active state highlighting with indigo color
- User profile section with avatar and level display

##### Dashboard Cards
- Glass effect containers with rounded corners
- Gradient backgrounds for important metrics
- Hover animations and transitions
- Progress bars and circular progress indicators

##### Test Interface
- Full-screen overlay during active tests
- Question counter and timer display
- Multiple choice options with hover states
- Progress indicator at the top

##### Chat Interface
- Real-time message bubbles with different styles for sender/receiver
- Online status indicators
- Typing indicators
- Message timestamps

### 4. Technical Implementation

#### 4.1 Frontend Architecture

##### State Management Pattern
```javascript
// Global Store Object
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
  // ... other state properties
};
```

##### Component Pattern
```javascript
// View Components as Functions
const ViewDashboard = () => {
  return `
    <div class="dashboard-container">
      ${CompStatsCards()}
      ${CompRecentActivity()}
      ${CompQuickActions()}
    </div>
  `;
};

// Reusable Components
const CompStatsCards = () => {
  // Component logic and HTML template
};
```

##### Routing System
```javascript
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
    'sandbox': ViewSandbox,
    'leaderboard': ViewLeaderboard
  };
  return views[store.view] ? views[store.view]() : ViewLoading();
};
```

#### 4.2 AI Integration Architecture

##### Multi-Model Fallback System
```javascript
const models = [
  'gemini-1.5-flash',
  'gemini-1.5-pro', 
  'gemini-1.0-pro',
  'gemini-pro',
  'gemini-2.0-flash-exp'
];

// Retry logic with exponential backoff
// Automatic model switching on 404 errors
// Rate limit handling with delays
// Fallback to offline content on complete failure
```

##### Content Generation Pipeline
```
User Request → Prompt Construction → AI API Call → Response Cleaning → Content Validation → UI Rendering
```

#### 4.3 Real-time Features

##### Firebase Realtime Listeners
```javascript
// Chat message listener
db.collection('chat_messages')
  .where('receiverId', '==', userId)
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
    // Update UI with new messages
  });

// Class chat listener  
db.collection('class_chat').doc(standard)
  .collection('messages')
  .orderBy('timestamp', 'desc')
  .limit(50)
  .onSnapshot(snapshot => {
    // Update class chat UI
  });
```

##### Leaderboard Updates
```javascript
// Weekly reset system
const checkAndResetLeaderboard = async () => {
  if (now.getDay() === 0) { // Sunday
    // Deactivate current tests
    // Reset weekly rankings
    // Notify users
  }
};
```

### 5. Security Design

#### 5.1 Authentication Security
- Firebase Authentication with email/password and Google OAuth
- JWT token-based session management
- Automatic token refresh
- Secure password reset via email

#### 5.2 Data Security
- Firestore security rules for user data isolation
- Input validation and sanitization
- XSS protection through proper HTML escaping
- Rate limiting on API calls

#### 5.3 API Security
- API key management through environment variables
- Request validation and error handling
- Timeout mechanisms for external API calls
- Graceful degradation on API failures

### 6. Performance Optimization

#### 6.1 Frontend Performance
- Lazy loading of components and content
- Image optimization and CDN usage
- Minification of CSS and JavaScript
- Efficient DOM manipulation patterns

#### 6.2 Database Performance
- Firestore query optimization with proper indexing
- Pagination for large data sets
- Caching strategies for frequently accessed data
- Batch operations for bulk updates

#### 6.3 AI Performance
- Response caching for repeated queries
- Parallel API calls where possible
- Timeout handling and fallback mechanisms
- Progressive content loading

### 7. Responsive Design Strategy

#### 7.1 Breakpoint System
```css
/* Mobile First Approach */
/* Base styles: 320px+ */

/* Small tablets: 640px+ */
@media (min-width: 640px) { }

/* Large tablets/Small laptops: 768px+ */
@media (min-width: 768px) { }

/* Desktops: 1024px+ */
@media (min-width: 1024px) { }

/* Large desktops: 1280px+ */
@media (min-width: 1280px) { }
```

#### 7.2 Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for navigation
- Optimized keyboard interactions
- Reduced animation complexity on mobile

#### 7.3 Progressive Web App Features
- Service worker for offline functionality
- App manifest for installation
- Push notifications for important updates
- Background sync for data updates

### 8. Testing Strategy

#### 8.1 Unit Testing
- Component rendering tests
- State management function tests
- Utility function validation
- API integration tests

#### 8.2 Integration Testing
- User authentication flows
- Data persistence verification
- Real-time feature testing
- Cross-browser compatibility

#### 8.3 User Acceptance Testing
- Learning workflow validation
- Assessment system accuracy
- Social feature functionality
- Performance benchmarking

### 9. Deployment Architecture

#### 9.1 Firebase Hosting Setup
```
firebase.json configuration:
- Public directory: public/
- Single page application: true
- Rewrites for client-side routing
- Headers for caching optimization
```

#### 9.2 Environment Configuration
```javascript
// Development
const CONFIG = {
  geminiKey: "dev_api_key",
  youtubeKey: "dev_youtube_key"
};

// Production
const CONFIG = {
  geminiKey: process.env.GEMINI_API_KEY,
  youtubeKey: process.env.YOUTUBE_API_KEY
};
```

#### 9.3 CI/CD Pipeline
- Automated testing on code commits
- Build optimization and minification
- Deployment to Firebase Hosting
- Performance monitoring and alerts

### 10. Monitoring & Analytics

#### 10.1 User Analytics
- Firebase Analytics integration
- User engagement tracking
- Learning progress metrics
- Feature usage statistics

#### 10.2 Performance Monitoring
- Page load time tracking
- API response time monitoring
- Error rate tracking
- User session analysis

#### 10.3 Business Metrics
- Daily/Monthly Active Users
- Test completion rates
- Badge achievement rates
- User retention metrics

---

**Document Version:** 1.0  
**Last Updated:** January 22, 2026  
**Prepared By:** MWD Agra Team