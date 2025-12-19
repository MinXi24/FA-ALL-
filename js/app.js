/**
 * TravelMate - Interactive JavaScript Application
 * Features: Smooth scrolling, mobile navigation, modal system, lazy loading, and performance optimizations
 */

// ============================================
// Global State Management
// ============================================

const AppState = {
    currentSection: 'home',
    modalOpen: false,
    navbarScrolled: false,
    attractions: {}
};

// ============================================
// DOM Elements Cache (Performance Optimization)
// ============================================

const DOM = {
    navbar: null,
    navMenu: null,
    navToggle: null,
    navLinks: null,
    modal: null,
    modalBody: null,
    modalClose: null,
    learnMoreButtons: null,
    ctaButtons: null
};

// ============================================
// Attraction Data (Simulating API Response)
// ============================================

const attractionData = {
    'marina-bay-sands': {
        title: 'Marina Bay Sands',
        description: 'An architectural marvel and Singapore\'s most iconic landmark, Marina Bay Sands features three 57-story towers connected by a massive sky terrace.',
        highlights: [
            'SkyPark Observation Deck with 360° views',
            'Infinity Pool (hotel guests only)',
            'ArtScience Museum',
            'The Shoppes at Marina Bay Sands',
            'Spectra Light and Water Show (free, nightly)'
        ],
        practical: {
            hours: 'Daily 10:00 AM - 10:00 PM',
            admission: 'SkyPark: S$26 adults, S$20 students',
            transport: 'Bayfront MRT (CE1/DT16)',
            tips: 'Visit at sunset for best photo opportunities'
        }
    },
    'gardens-by-the-bay': {
        title: 'Gardens by the Bay',
        description: 'A futuristic nature park spanning 101 hectares, featuring iconic Supertrees and climate-controlled conservatories.',
        highlights: [
            'Supertree Grove with free Garden Rhapsody light shows',
            'Cloud Forest with world\'s tallest indoor waterfall',
            'Flower Dome with exotic plants',
            'OCBC Skyway walkway between Supertrees',
            'Free outdoor gardens'
        ],
        practical: {
            hours: 'Outdoor gardens: 5:00 AM - 2:00 AM, Conservatories: 9:00 AM - 9:00 PM',
            admission: 'Outdoor: Free, Conservatories: S$28 (online discount available)',
            transport: 'Bayfront MRT (CE1/DT16) - 10 min walk',
            tips: 'Garden Rhapsody shows at 7:45 PM & 8:45 PM daily'
        }
    },
    'merlion': {
        title: 'Merlion Park',
        description: 'Home to Singapore\'s iconic 8.6-meter tall Merlion statue, symbolizing the city\'s origins as a fishing village.',
        highlights: [
            'Iconic photo opportunity',
            'Marina Bay waterfront views',
            'Esplanade bridge nearby',
            'Free admission',
            'Beautiful day and night views'
        ],
        practical: {
            hours: 'Open 24/7',
            admission: 'Free',
            transport: 'Raffles Place MRT (NS26/EW14) - 10 min walk',
            tips: 'Best visited during sunrise, sunset, or evening for Marina Bay Sands light show'
        }
    },
    'sentosa': {
        title: 'Sentosa Island',
        description: 'Singapore\'s premier leisure destination offering beaches, attractions, hotels, and entertainment.',
        highlights: [
            'Universal Studios Singapore',
            'S.E.A. Aquarium',
            'Beaches: Siloso, Palawan, Tanjong',
            'Skyline Luge & Skyride',
            'iFly Singapore (indoor skydiving)'
        ],
        practical: {
            hours: 'Island accessible 24/7, attractions vary',
            admission: 'Island entry: Free, attractions separately priced',
            transport: 'Sentosa Express from HarbourFront (CC29/NE1), Cable Car, or walk via Sentosa Boardwalk',
            tips: 'Buy attraction combo tickets online for savings. Beach access is free!'
        }
    },
    'chinatown': {
        title: 'Chinatown',
        description: 'A vibrant cultural district preserving Singapore\'s Chinese heritage through architecture, temples, and cuisine.',
        highlights: [
            'Buddha Tooth Relic Temple',
            'Chinatown Heritage Centre',
            'Smith Street food street',
            'Traditional shophouses',
            'Chinatown Complex hawker centre'
        ],
        practical: {
            hours: 'Most shops: 10:00 AM - 8:00 PM, Temples: 7:00 AM - 7:00 PM',
            admission: 'Walking around: Free, Museum: S$15',
            transport: 'Chinatown MRT (NE4/DT19)',
            tips: 'Visit Buddha Tooth Relic Temple early morning to see monks chanting'
        }
    },
    'little-india': {
        title: 'Little India',
        description: 'A colorful ethnic enclave showcasing Indian culture, temples, shops, and authentic cuisine.',
        highlights: [
            'Sri Veeramakaliamman Temple',
            'Tekka Centre (food & shopping)',
            'Mustafa Centre (24-hour shopping)',
            'Colorful street art',
            'Indian spice shops'
        ],
        practical: {
            hours: 'Shops: 9:00 AM - 9:00 PM, Temples: 6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM',
            admission: 'Free to explore, respectful temple entry',
            transport: 'Little India MRT (NE7/DT12)',
            tips: 'Very crowded on Sundays. Try authentic biryani at Tekka Centre!'
        }
    },
    'kampong-glam': {
        title: 'Kampong Glam',
        description: 'Singapore\'s historic Malay-Muslim quarter featuring Sultan Mosque, hipster cafes, and boutique shops.',
        highlights: [
            'Sultan Mosque (Masjid Sultan)',
            'Haji Lane shopping & cafes',
            'Malay Heritage Centre',
            'Arab Street shopping',
            'Middle Eastern restaurants'
        ],
        practical: {
            hours: 'Shops: 11:00 AM - 8:00 PM, Mosque: 10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM (non-prayer times)',
            admission: 'Free to explore, Malay Heritage Centre: S$8',
            transport: 'Bugis MRT (EW12/DT14) - 5 min walk',
            tips: 'Dress modestly when visiting Sultan Mosque. Halal food options abundant!'
        }
    },
    'sri-mariamman': {
        title: 'Sri Mariamman Temple',
        description: 'Singapore\'s oldest Hindu temple, established in 1827, known for its stunning Dravidian architecture.',
        highlights: [
            'Ornate gopuram (entrance tower)',
            'Colorful deity sculptures',
            'Active place of worship',
            'Located in Chinatown',
            'Annual Thimithi fire-walking festival'
        ],
        practical: {
            hours: 'Daily 7:00 AM - 12:00 PM, 6:00 PM - 9:00 PM',
            admission: 'Free (photography fee: S$3)',
            transport: 'Chinatown MRT (NE4/DT19) - 3 min walk',
            tips: 'Remove shoes before entering. Dress modestly (shoulders and knees covered).'
        }
    },
    'national-museum': {
        title: 'National Museum of Singapore',
        description: 'Singapore\'s oldest museum (1887) showcasing the nation\'s history through immersive storytelling.',
        highlights: [
            'Singapore History Gallery',
            'Living Galleries (Fashion, Food, Film)',
            'Interactive multimedia exhibits',
            'Colonial architecture',
            'Regular special exhibitions'
        ],
        practical: {
            hours: 'Daily 10:00 AM - 7:00 PM',
            admission: 'S$15 adults, S$10 students (with valid ID)',
            transport: 'Bras Basah MRT (CC2) - 5 min walk, Dhoby Ghaut MRT (NS24/NE6/CC1)',
            tips: 'Free admission 6:00 PM - 7:00 PM daily. Audio guides available.'
        }
    },
    'artscience': {
        title: 'ArtScience Museum',
        description: 'Iconic lotus-shaped museum exploring creative convergence of art, science, technology, and culture.',
        highlights: [
            'FUTURE WORLD digital art installations',
            'Rotating international exhibitions',
            'Unique architecture by Moshe Safdie',
            'Interactive, immersive experiences',
            'Connected to Marina Bay Sands'
        ],
        practical: {
            hours: 'Daily 10:00 AM - 7:00 PM (last entry 6:00 PM)',
            admission: 'Varies by exhibition, typically S$19-24',
            transport: 'Bayfront MRT (CE1/DT16)',
            tips: 'Book online for discounts. FUTURE WORLD is perfect for Instagram!'
        }
    },
    'asian-civilisations': {
        title: 'Asian Civilisations Museum',
        description: 'Premier museum showcasing pan-Asian cultures and civilizations through 11 galleries.',
        highlights: [
            'Tang Shipwreck collection',
            'Southeast Asian galleries',
            'Chinese, Islamic, South Asian artifacts',
            'Riverside location',
            'Educational programs'
        ],
        practical: {
            hours: 'Mon-Thu, Sat-Sun: 10:00 AM - 7:00 PM, Fri: 10:00 AM - 9:00 PM',
            admission: 'S$12 adults, S$6 students',
            transport: 'Raffles Place MRT (NS26/EW14) - 8 min walk',
            tips: 'Free admission Fridays 7:00 PM - 9:00 PM'
        }
    },
    'science-centre': {
        title: 'Science Centre Singapore',
        description: 'Interactive science museum with over 1,000 exhibits promoting STEM learning through hands-on experiences.',
        highlights: [
            'Interactive science exhibits',
            'Omni-Theatre (IMAX dome)',
            'Snow City (indoor snow playground)',
            'KidsSTOP (for children)',
            'Regular science shows'
        ],
        practical: {
            hours: 'Tue-Sun: 10:00 AM - 6:00 PM (closed Mondays)',
            admission: 'S$12 adults, S$8 students, combo tickets available',
            transport: 'Jurong East MRT (NS1/EW24) - Bus 335 (3 stops)',
            tips: 'Check Omni-Theatre showtimes in advance. Allow 3-4 hours for visit.'
        }
    },
    'haji-lane': {
        title: 'Haji Lane',
        description: 'Singapore\'s hippest street featuring vibrant street art, indie boutiques, and Instagram-worthy cafes.',
        highlights: [
            'Colorful street murals',
            'Independent boutiques',
            'Trendy cafes and bars',
            'Unique photo opportunities',
            'Local designer shops'
        ],
        practical: {
            hours: 'Shops: 11:00 AM - 8:00 PM, Cafes: 10:00 AM - 11:00 PM',
            admission: 'Free to explore',
            transport: 'Bugis MRT (EW12/DT14) - 7 min walk',
            tips: 'Best visited late morning or afternoon for photos. Weekend evenings get very crowded.'
        }
    },
    'pulau-ubin': {
        title: 'Pulau Ubin',
        description: 'Rustic offshore island preserving Singapore\'s kampong (village) heritage with natural landscapes.',
        highlights: [
            'Cycling trails through jungle',
            'Chek Jawa wetlands',
            'Traditional kampong houses',
            'Wildlife spotting (monkeys, wild boars)',
            'Peaceful escape from city'
        ],
        practical: {
            hours: 'Bumboats: 6:00 AM - 7:00 PM (depending on demand)',
            admission: 'Bumboat: S$4 one-way, Island: Free',
            transport: 'Tanah Merah MRT (EW4), then Bus 2 to Changi Point Ferry Terminal',
            tips: 'Rent bikes (S$10-20/day). Bring water and sunscreen. No ATMs on island!'
        }
    },
    'tiong-bahru': {
        title: 'Tiong Bahru',
        description: 'Singapore\'s oldest public housing estate transformed into a hip neighborhood with heritage charm.',
        highlights: [
            'Art Deco architecture',
            'BooksActually independent bookstore',
            'Tiong Bahru Market (hawker food)',
            'Specialty coffee shops',
            'Quiet residential streets'
        ],
        practical: {
            hours: 'Shops: 9:00 AM - 6:00 PM, Cafes: 8:00 AM - 6:00 PM, Market: 6:00 AM - 3:00 PM',
            admission: 'Free to explore',
            transport: 'Tiong Bahru MRT (EW17)',
            tips: 'Visit market early for breakfast. Weekends are busier but more lively.'
        }
    },
    'macritchie': {
        title: 'MacRitchie Reservoir',
        description: 'Singapore\'s oldest reservoir surrounded by lush rainforest, offering nature trails and TreeTop Walk.',
        highlights: [
            'TreeTop Walk (suspension bridge)',
            'Multiple hiking trails (2-10 km)',
            'Kayaking on reservoir',
            'Wildlife spotting (monkeys, monitor lizards)',
            'Peaceful nature escape'
        ],
        practical: {
            hours: 'Daily 7:00 AM - 7:00 PM',
            admission: 'Free',
            transport: 'Caldecott MRT (CC17/TE9), then Bus 132 or 167. Or Marymount MRT (CC16) - 15 min walk',
            tips: 'Wear proper hiking shoes. Bring insect repellent and water. TreeTop Walk closes at 5PM.'
        }
    }
};

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Cache DOM elements
    cacheDOM();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize features
    initSmoothScrolling();
    initIntersectionObserver();
    initNavbarScroll();
    
    console.log('TravelMate initialized successfully! 🚀');
}

function cacheDOM() {
    DOM.navbar = document.getElementById('navbar');
    DOM.navMenu = document.getElementById('navMenu');
    DOM.navToggle = document.getElementById('navToggle');
    DOM.navLinks = document.querySelectorAll('.nav-link');
    DOM.modal = document.getElementById('attractionModal');
    DOM.modalBody = document.getElementById('modalBody');
    DOM.modalClose = document.getElementById('modalClose');
    DOM.learnMoreButtons = document.querySelectorAll('.learn-more');
    DOM.ctaButtons = document.querySelectorAll('.cta-button, .cta-button-secondary');
}

// ============================================
// Navigation Features
// ============================================

function setupEventListeners() {
    // Mobile navigation toggle
    if (DOM.navToggle) {
        DOM.navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Navigation links
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Learn More buttons
    DOM.learnMoreButtons.forEach(button => {
        button.addEventListener('click', handleLearnMore);
    });
    
    // CTA buttons
    DOM.ctaButtons.forEach(button => {
        button.addEventListener('click', handleCTAClick);
    });
    
    // Modal close
    if (DOM.modalClose) {
        DOM.modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal on background click
    if (DOM.modal) {
        DOM.modal.addEventListener('click', (e) => {
            if (e.target === DOM.modal) {
                closeModal();
            }
        });
    }
    
    // Keyboard accessibility for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && AppState.modalOpen) {
            closeModal();
        }
    });
}

function toggleMobileNav() {
    DOM.navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = DOM.navToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (index === 0) span.style.transform = DOM.navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        if (index === 1) span.style.opacity = DOM.navMenu.classList.contains('active') ? '0' : '1';
        if (index === 2) span.style.transform = DOM.navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
    });
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Update active state
        DOM.navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile menu if open
        if (DOM.navMenu.classList.contains('active')) {
            toggleMobileNav();
        }
        
        // Update app state
        AppState.currentSection = targetId;
    }
}

// ============================================
// Navbar Scroll Effect
// ============================================

function initNavbarScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100 && !AppState.navbarScrolled) {
            DOM.navbar.classList.add('scrolled');
            AppState.navbarScrolled = true;
        } else if (currentScrollY <= 100 && AppState.navbarScrolled) {
            DOM.navbar.classList.remove('scrolled');
            AppState.navbarScrolled = false;
        }
        
        lastScrollY = currentScrollY;
    }, 100));
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScrolling() {
    // Already handled by CSS scroll-behavior: smooth
    // This function is a placeholder for additional smooth scroll logic if needed
    console.log('Smooth scrolling enabled via CSS');
}

// ============================================
// Intersection Observer (Performance)
// ============================================

function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Update active navigation
                const sectionId = entry.target.id;
                if (sectionId) {
                    updateActiveNav(sectionId);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    // Observe attraction cards for staggered animation
    const cards = document.querySelectorAll('.attraction-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

function updateActiveNav(sectionId) {
    DOM.navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// Modal System
// ============================================

function handleLearnMore(e) {
    const attractionId = this.getAttribute('data-attraction');
    const data = attractionData[attractionId];
    
    if (data) {
        openModal(data);
    } else {
        console.warn(`No data found for attraction: ${attractionId}`);
    }
}

function openModal(data) {
    // Build modal content
    const modalContent = `
        <h2 style="color: var(--primary-red); margin-bottom: 1rem;">${data.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${data.description}</p>
        
        <h3 style="color: var(--primary-green); margin-top: 1.5rem; margin-bottom: 0.8rem;">✨ Highlights</h3>
        <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            ${data.highlights.map(item => `<li style="margin-bottom: 0.5rem; color: var(--text-secondary);">${item}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--primary-green); margin-top: 1.5rem; margin-bottom: 0.8rem;">📋 Practical Information</h3>
        <div style="background: var(--off-white); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="margin-bottom: 0.8rem;"><strong style="color: var(--primary-red);">Hours:</strong> ${data.practical.hours}</p>
            <p style="margin-bottom: 0.8rem;"><strong style="color: var(--primary-red);">Admission:</strong> ${data.practical.admission}</p>
            <p style="margin-bottom: 0.8rem;"><strong style="color: var(--primary-red);">Transport:</strong> ${data.practical.transport}</p>
            <p style="margin-bottom: 0;"><strong style="color: var(--primary-red);">Tips:</strong> ${data.practical.tips}</p>
        </div>
    `;
    
    DOM.modalBody.innerHTML = modalContent;
    DOM.modal.classList.add('active');
    AppState.modalOpen = true;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    DOM.modal.classList.remove('active');
    AppState.modalOpen = false;
    document.body.style.overflow = '';
}

// ============================================
// CTA Handlers
// ============================================

function handleCTAClick(e) {
    const buttonId = this.id;
    
    if (buttonId === 'getStarted') {
        // Scroll to landmarks section
        document.getElementById('landmarks').scrollIntoView({ behavior: 'smooth' });
    } else if (buttonId === 'planTrip') {
        // Show interactive trip planner (future feature)
        showTripPlanner();
    }
}

function showTripPlanner() {
    const plannerContent = `
        <h2 style="color: var(--primary-red); margin-bottom: 1rem;">🗺️ Plan Your Trip</h2>
        <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">This interactive trip planner is coming soon! Meanwhile, explore our attractions and save your favorites.</p>
        
        <div style="background: var(--off-white); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
            <h4 style="color: var(--primary-green); margin-bottom: 1rem;">Suggested 3-Day Itinerary:</h4>
            
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary-red);">Day 1: City Highlights</strong>
                <p style="margin: 0.5rem 0;">Marina Bay Sands → Gardens by the Bay → Merlion Park → Clarke Quay</p>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary-red);">Day 2: Cultural Heritage</strong>
                <p style="margin: 0.5rem 0;">Chinatown → Little India → Kampong Glam → National Museum</p>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary-red);">Day 3: Nature & Adventure</strong>
                <p style="margin: 0.5rem 0;">Sentosa Island → MacRitchie TreeTop Walk → Tiong Bahru</p>
            </div>
        </div>
        
        <p style="font-size: 0.9rem; color: var(--text-secondary); text-align: center;">💡 Tip: Download the MyTransport app for real-time MRT and bus information!</p>
    `;
    
    DOM.modalBody.innerHTML = plannerContent;
    DOM.modal.classList.add('active');
    AppState.modalOpen = true;
    document.body.style.overflow = 'hidden';
}

// ============================================
// Performance Utilities
// ============================================

/**
 * Throttle function to limit execution rate
 * Improves performance for scroll and resize events
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        }
    };
}

/**
 * Debounce function to delay execution until after wait period
 * Useful for input events and window resize
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ============================================
// Lazy Loading Images (Future Enhancement)
// ============================================

function initLazyLoading() {
    // Placeholder for future image lazy loading implementation
    // Would use IntersectionObserver to load images as they enter viewport
    console.log('Lazy loading ready for image implementation');
}

// ============================================
// Local Storage (Save Favorites - Future Feature)
// ============================================

function saveFavorite(attractionId) {
    const favorites = JSON.parse(localStorage.getItem('travelmate-favorites') || '[]');
    if (!favorites.includes(attractionId)) {
        favorites.push(attractionId);
        localStorage.setItem('travelmate-favorites', JSON.stringify(favorites));
        console.log(`Saved ${attractionId} to favorites`);
    }
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('travelmate-favorites') || '[]');
}

// ============================================
// Weather Integration (Future Enhancement)
// ============================================

async function getWeatherRecommendations() {
    // Placeholder for weather API integration
    // Would fetch Singapore weather and suggest indoor/outdoor activities
    console.log('Weather integration ready for API implementation');
}

// ============================================
// Analytics (Future Enhancement)
// ============================================

function trackUserInteraction(action, data) {
    // Placeholder for analytics tracking
    // Could integrate with Google Analytics, Mixpanel, etc.
    console.log(`Track: ${action}`, data);
}

// ============================================
// Service Worker Registration (PWA Support)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here for PWA support
        console.log('Service Worker support detected - ready for PWA implementation');
    });
}

// ============================================
// Export for Testing (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppState,
        attractionData,
        throttle,
        debounce
    };
}
