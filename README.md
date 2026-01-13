<<<<<<< HEAD
# TravelMate 🌏

**Your AI-Powered Singapore Adventure Companion for Exchange Students**

---

## 📋 Product Brief

### Project Name
**TravelMate**

### One-Line Pitch
*An AI-powered web platform that transforms the overwhelming experience of foreign exchange students in Singapore into a seamless, stress-free journey through personalized guidance on transport, dining, and leisure activities.*

### Why It Matters
Foreign exchange students at Republic Polytechnic face significant challenges adapting to life in Singapore. Without local knowledge, they struggle with:
- Navigating Singapore's complex transport system (MRT, buses, alternative routes)
- Finding affordable, student-friendly dining options
- Discovering leisure activities and cultural experiences
- Planning daily life efficiently

Traditional methods (online research, word-of-mouth) are time-consuming, inconsistent, and often lead to missed opportunities and increased stress. TravelMate solves this by providing **real-time, AI-powered recommendations** that adapt to individual preferences, budget constraints, weather conditions, and current location—essentially becoming a knowledgeable local friend available 24/7.

**Impact**: Reduces adaptation stress, saves time, enhances cultural immersion, and ensures students make the most of their Singapore exchange experience.

---

## 🎯 Problem Statement

Foreign exchange students arriving at Republic Polytechnic (RP) often feel overwhelmed during their stay in Singapore. They struggle with:
- Planning daily life activities
- Navigating Singapore's transport systems
- Finding affordable food options
- Discovering leisure activities

Without proper guidance, students rely on fragmented online research and word-of-mouth advice, leading to stress, wasted time, and missed experiences.

---

## 👥 Target Audience

**Primary Users**: Foreign exchange students at Republic Polytechnic
- **Age Group**: 18-25 years old
- **Context**: New to Singapore, lacking local knowledge
- **Needs**: Quick adaptation to Singaporean life, efficient planning tools, budget-friendly recommendations
- **Tech Proficiency**: Comfortable with mobile and web applications

---

## 🤖 AI Solution

### Why Use AI?

1. **Data Processing at Scale**: AI can analyze vast amounts of information about Singapore's attractions, transport routes, food venues, and real-time conditions (weather, events, crowd levels).

2. **Personalization**: Unlike static maps or guides, AI learns user preferences and provides tailored recommendations based on:
   - Budget constraints
   - Dietary preferences
   - Activity interests (cultural, adventure, relaxation)
   - Time availability
   - Current location

3. **Real-Time Adaptation**: AI adjusts suggestions dynamically:
   - Raining? Suggest indoor activities and covered walkways
   - Peak hour? Recommend alternative transport routes
   - Weekend? Highlight special events and markets

4. **24/7 Support**: Always available to answer questions and provide guidance, reducing stress and uncertainty.

### Ethical Considerations
- **Transparency**: Users understand when interacting with AI
- **Privacy**: No sensitive personal data collected without consent
- **Inclusivity**: Accessible to all students regardless of background
- **Accuracy**: Information regularly updated and verified

---

## 🎨 Design Principles

### Color Scheme
- **Primary Red** (#8B4444): Energy, excitement, cultural richness
- **Primary Green** (#5B7854): Nature, balance, harmony (Singapore = Garden City)
- **White** (#FFFFFF): Cleanliness, modernity, clarity
- **Balanced Palette**: Muted tones prevent visual fatigue, creating an appetizing, inviting atmosphere

### UX Principles

1. **Simplicity First**
   - Clean, uncluttered interface
   - Clear visual hierarchy
   - Intuitive navigation

2. **Mobile-First Design**
   - Responsive across all devices
   - Touch-friendly interactions
   - Fast loading times

3. **Accessibility**
   - WCAG 2.1 AA compliant
   - Keyboard navigation support
   - Screen reader friendly
   - High contrast mode support
   - Reduced motion options

4. **Progressive Disclosure**
   - Show essential information first
   - Details available on demand
   - Modal system for deep dives

5. **Consistent Patterns**
   - Predictable interactions
   - Familiar UI components
   - Unified visual language

---

## 🚀 Features

### Core Features (Current Version)

#### 🏛️ Iconic Landmarks
- Marina Bay Sands
- Gardens by the Bay
- Merlion Park
- Sentosa Island

#### 🎭 Cultural Sites
- Chinatown
- Little India
- Kampong Glam
- Sri Mariamman Temple

#### 🏛️ Museums & Galleries
- National Museum of Singapore
- ArtScience Museum
- Asian Civilisations Museum
- Science Centre Singapore

#### 💎 Hidden Gems
- Haji Lane
- Pulau Ubin
- Tiong Bahru
- MacRitchie Reservoir

#### 📱 Essential Information
- Transport guidance (MRT, buses, SimplyGo)
- Affordable food options (hawker centers, food courts)
- Local tips and tricks
- Useful mobile apps

### JavaScript Features (Interactivity)

1. **Smooth Scrolling Navigation**
   - Seamless section transitions
   - Active state indicators
   - Mobile hamburger menu

2. **Interactive Modal System**
   - Detailed attraction information
   - Practical details (hours, admission, transport)
   - Tips and recommendations

3. **Intersection Observer API**
   - Performance-optimized scrolling
   - Lazy content loading
   - Automatic section detection

4. **Responsive Mobile Menu**
   - Touch-friendly interactions
   - Animated hamburger icon
   - Smooth open/close transitions

5. **State Management**
   - Centralized app state
   - Efficient DOM caching
   - Performance monitoring

6. **Performance Optimizations**
   - Throttled scroll events
   - Debounced input handling
   - Minimal reflows/repaints

### Future Enhancements

- **AI Chatbot Integration**: Natural language queries
- **Trip Planner**: Custom itinerary builder
- **Weather Integration**: Activity suggestions based on forecast
- **Favorites System**: Save and organize attractions
- **Offline Support**: PWA capabilities
- **Multi-language Support**: Chinese, Malay, Tamil
- **Budget Tracker**: Expense monitoring
- **Social Features**: Share itineraries with friends

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **Vanilla JavaScript**: No dependencies, optimal performance

### Development Tools
- **Git**: Version control
- **VS Code**: Development environment
- **Live Server**: Local development server

### Future Stack
- **Frontend Framework**: React/Vue.js for complex interactions
- **Backend**: Node.js + Express for API
- **Database**: MongoDB for user preferences
- **AI/ML**: OpenAI API or custom model for recommendations
- **Hosting**: Vercel/Netlify for frontend, AWS/Azure for backend

---

## 📂 Project Structure

```
FA/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles with CSS variables
├── js/
│   └── app.js              # Interactive features and logic
├── .vscode/
│   └── settings.json       # Live Server configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (recommended) with Live Server extension
- Git (for version control)

### Installation

1. **Clone/Open the project**
   ```bash
   cd "c:\C240 (Tue afternoon)\FA"
   ```

2. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Install by Ritwick Dey

3. **Launch the website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Browser opens at `http://localhost:5500`

### Alternative: Direct File Opening
Simply open `index.html` in any browser (some features may require a server).

---

## 🎨 Design Guidelines

### Color Usage

```css
--primary-red: #8B4444      /* Headings, CTAs, emphasis */
--primary-green: #5B7854    /* Subheadings, icons, accents */
--accent-red: #A85858       /* Hover states, gradients */
--accent-green: #6F9467     /* Secondary accents */
--white: #FFFFFF            /* Background, text on dark */
--off-white: #F8F7F5        /* Alternate backgrounds */
```

### Typography
- **Primary Font**: Segoe UI (system font for performance)
- **Headings**: 700 weight, reduced line-height
- **Body**: 400 weight, 1.6 line-height for readability

### Spacing
- Consistent 8px grid system
- Generous whitespace for breathing room
- Responsive padding/margins

---

## 🔧 Configuration

### Live Server Settings
Located in `.vscode/settings.json`:
- **Port**: 5500
- **Browser**: Chrome (configurable)
- **Auto-reload**: Enabled
- **Ignore**: .vscode, .scss, .sass, .ts files

### Git Configuration
- Ignores: node_modules, .DS_Store, IDE files, logs
- Initial commit created
- Ready for remote repository

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Reduced motion support
- Screen reader friendly

---

## 📊 Performance

### Optimizations Implemented
- CSS variables for consistent theming
- Throttled scroll events
- Debounced input handlers
- Intersection Observer for lazy loading
- Minimal JavaScript dependencies
- DOM element caching
- CSS animations over JavaScript

### Metrics Target
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Lighthouse Score: 90+

---

## 🤝 Contributing

Future contributions welcome for:
- Additional attraction data
- Multi-language support
- AI integration
- Backend API development
- Mobile app version

---

## 📄 License

This project is created for educational purposes at Republic Polytechnic.

---

## 👨‍💻 Development Team

Created as part of the Foundational Abilities curriculum at Republic Polytechnic, Singapore.

**Project Focus**: Solving real-world problems for international exchange students through technology and AI.

---

## 📞 Support

For issues or questions:
- 📧 Email: hello@travelmate.sg
- 📍 Location: Republic Polytechnic, Singapore

---

## 🌟 Acknowledgments

- Republic Polytechnic for the project opportunity
- Singapore Tourism Board for attraction information
- Exchange student community for insights and feedback

---

**Built with ❤️ for exchange students exploring Singapore**
=======
# FA-ALL-
Consolidate all websites
>>>>>>> 2dab64799003d0f0052f2026f64c45d9e1dfe6f0
