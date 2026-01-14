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
    'gardens-by-the-bay': {
        title: 'Gardens by the Bay',
        category: 'Iconic',
        rating: 4.8,
        status: 'Paid/Free',
        price: '$0',
        hours: '5:00 AM - 2:00 AM',
        timeSpent: '3 - 4 Hours',
        mustGo: true,
        image: 'images/gardens-by-the-bay.jpg',
        location: { lat: 1.2816, lng: 103.8636 },
        description: 'A futuristic nature park spanning 101 hectares, featuring iconic Supertrees and climate-controlled conservatories.',
        highlights: [
            'Supertree Grove with free Garden Rhapsody light shows',
            'Cloud Forest with world\'s tallest indoor waterfall',
            'Flower Dome with exotic plants',
            'OCBC Skyway walkway between Supertrees',
            'Free outdoor gardens'
        ],
        researchNote: 'Includes Supertree Grove & Light Show.',
        tips: 'Garden Rhapsody shows at 7:45 PM & 8:45 PM daily',
        website: 'https://www.gardensbythebay.com.sg/'
    },
    'jewel-changi': {
        title: 'Jewel Changi (Rain Vortex)',
        category: 'Iconic',
        rating: 4.9,
        status: 'Free',
        price: '~$46 - $58',
        hours: '24 Hours (Light show: 8 PM)',
        timeSpent: '1.5 - 2 Hours',
        mustGo: false,
        image: 'images/jewel-changi.jpg',
        location: { lat: 1.3644, lng: 103.9915 },
        description: 'A stunning architectural marvel featuring the world\'s tallest indoor waterfall and lush indoor gardens.',
        highlights: [
            'Rain Vortex - world\'s tallest indoor waterfall',
            'Canopy Park attractions',
            'Shiseido Forest Valley',
            'Shopping and dining',
            'Light and sound show'
        ],
        researchNote: '"Jurassic World" immersive theme in Cloud Forest.',
        tips: 'Best viewed during light show at 8 PM',
        website: 'https://www.jewelchangiairport.com/'
    },
    'marina-bay-sands': {
        title: 'Marina Bay Sands SkyPark',
        category: 'Iconic',
        rating: 4.6,
        status: 'Paid',
        price: '~$35 - $39',
        hours: '11:00 AM - 9:00 PM',
        timeSpent: '1 Hour',
        mustGo: false,
        image: 'images/marina-bay-sands.jpg',
        location: { lat: 1.2834, lng: 103.8607 },
        description: 'An architectural marvel and Singapore\'s most iconic landmark, Marina Bay Sands features three 57-story towers connected by a massive sky terrace.',
        highlights: [
            'SkyPark Observation Deck with 360° views',
            'Infinity Pool (hotel guests only)',
            'ArtScience Museum',
            'The Shoppes at Marina Bay Sands',
            'Spectra Light and Water Show (free, nightly)'
        ],
        researchNote: 'Peak hours (after 5pm) are more expensive.',
        tips: 'Visit at sunset for best photo opportunities',
        website: 'https://www.marinabaysands.com/sands-skypark.html'
    },
    'merlion': {
        title: 'Merlion Park',
        category: 'Iconic',
        rating: 4.5,
        status: 'Free',
        price: '$0',
        hours: '24 Hours',
        timeSpent: '30 - 45 Mins',
        mustGo: false,
        image: 'images/merlion.jpg',
        location: { lat: 1.2868, lng: 103.8545 },
        description: 'Home to Singapore\'s iconic 8.6-meter tall Merlion statue, symbolizing the city\'s origins as a fishing village.',
        highlights: [
            'Iconic photo opportunity',
            'Marina Bay waterfront views',
            'Esplanade bridge nearby',
            'Free admission',
            'Beautiful day and night views'
        ],
        researchNote: 'Free viewing from levels 1-5.',
        tips: 'Best visited during sunrise, sunset, or evening for Marina Bay Sands light show',
        website: 'https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/'
    },
    'buddha-tooth': {
        title: 'Buddha Tooth Relic Temple',
        category: 'Culture',
        rating: 4.7,
        status: 'Free',
        price: '~$8 - $14',
        hours: '7:00 AM - 5:00 PM',
        timeSpent: '1 Hour',
        mustGo: false,
        image: 'images/buddha-tooth.jpg',
        location: { lat: 1.2814, lng: 103.8441 },
        description: 'A magnificent Buddhist temple housing sacred relics and showcasing Tang dynasty architecture.',
        highlights: [
            'Sacred Buddha Tooth Relic',
            'Hundred Dragons Hall',
            'Buddhist art museum',
            'Rooftop garden',
            'Free admission'
        ],
        researchNote: 'Required for the walking nets/glass bridge.',
        tips: 'Dress code: Shoulders/knees must be covered.',
        website: 'http://www.btrts.org.sg/'
    },
    'kampong-glam': {
        title: 'Kampong Glam (Haji Lane)',
        category: 'Culture',
        rating: 4.6,
        status: 'Free',
        price: '$0',
        hours: '11:00 AM - 9:00 PM (Shops)',
        timeSpent: '2 Hours',
        mustGo: false,
        image: 'images/kampong-glam.jpg',
        location: { lat: 1.3024, lng: 103.8589 },
        description: 'Singapore\'s historic Malay-Muslim quarter featuring Sultan Mosque, hipster cafes, and boutique shops.',
        highlights: [
            'Sultan Mosque (Masjid Sultan)',
            'Haji Lane shopping & cafes',
            'Malay Heritage Centre',
            'Arab Street shopping',
            'Colorful street art'
        ],
        researchNote: 'Dress code: Shoulders/knees must be covered.',
        tips: 'Visit in the late afternoon for best lighting',
        website: 'https://www.visitsingapore.com/see-do-singapore/places-to-see/kampong-gelam/'
    },
    'chinatown': {
        title: 'Chinatown',
        category: 'Culture',
        rating: 4.5,
        status: 'Free',
        price: '$0',
        hours: '24 Hours (Shops: 10:00 AM - 10:00 PM)',
        timeSpent: '2 - 3 Hours',
        mustGo: false,
        image: 'images/chinatown.jpg',
        location: { lat: 1.2830, lng: 103.8443 },
        description: 'Vibrant neighborhood with traditional shophouses, Buddha Tooth Relic Temple, hawker centers, and Chinese heritage.',
        highlights: [
            'Buddha Tooth Relic Temple',
            'Traditional shophouses',
            'Chinatown Food Street',
            'Chinese heritage shops',
            'Night market shopping'
        ],
        researchNote: 'Heart of Chinese culture with vibrant street markets.',
        tips: 'Visit in the evening for the bustling night market atmosphere'
    },
    'peranakan-museum': {
        title: 'Peranakan Museum',
        category: 'Museums',
        rating: 4.4,
        status: 'Paid',
        price: '$0',
        hours: '10:00 AM - 7:00 PM',
        timeSpent: '1.5 Hours',
        mustGo: false,
        image: 'images/peranakan-museum.jpg',
        location: { lat: 1.2943, lng: 103.8493 },
        description: 'Dedicated to Peranakan culture, showcasing the unique heritage of Straits Chinese communities.',
        highlights: [
            'Peranakan artifacts and clothing',
            'Traditional wedding exhibits',
            'Interactive displays',
            'Beautiful ceramics collection',
            'Cultural workshops'
        ],
        researchNote: 'Heritage area with free street art tours.',
        tips: 'Check for special exhibitions and cultural events'
    },
    'artscience-museum': {
        title: 'ArtScience Museum',
        category: 'Museums',
        rating: 4.7,
        status: 'Paid',
        price: '$0',
        hours: '10:00 AM - 7:00 PM',
        timeSpent: '2 - 3 Hours',
        mustGo: false,
        image: 'images/artscience-museum.jpg',
        location: { lat: 1.2862, lng: 103.8591 },
        description: 'Iconic lotus-shaped museum exploring the intersection of art, science, and technology.',
        highlights: [
            'Future World digital art installation',
            'Rotating exhibitions',
            'Immersive experiences',
            'Interactive displays',
            'Unique architecture'
        ],
        researchNote: 'Little India\'s oldest Hindu temple.',
        tips: 'Book tickets online for discounts'
    },
    'national-museum': {
        title: 'National Museum of Singapore',
        category: 'Museums',
        rating: 4.5,
        status: 'Paid',
        price: '~$10',
        hours: '10:00 AM - 7:00 PM',
        timeSpent: '2 Hours',
        mustGo: false,
        image: 'images/national-museum.jpg',
        location: { lat: 1.2966, lng: 103.8486 },
        description: 'Singapore\'s oldest museum showcasing the nation\'s history and cultural heritage.',
        highlights: [
            'Singapore History Gallery',
            'Living Galleries',
            'Glass Rotunda',
            'Multimedia presentations',
            'Colonial architecture'
        ],
        researchNote: 'Heritage house; Strictly by booking only.',
        tips: 'Free admission for Singaporeans and PRs'
    },
    'national-gallery': {
        title: 'National Gallery',
        category: 'Museums',
        rating: 4.7,
        status: 'Paid',
        price: '~$15 - $36',
        hours: '10:00 AM - 7:00 PM',
        timeSpent: '2 - 3 Hours',
        mustGo: false,
        image: 'images/national-gallery.jpg',
        location: { lat: 1.2903, lng: 103.8516 },
        description: 'World\'s largest public collection of Southeast Asian art housed in two historic buildings.',
        highlights: [
            'Southeast Asian art collection',
            'Modern and contemporary exhibitions',
            'Historic Supreme Court & City Hall buildings',
            'Rooftop gardens',
            'Art workshops and tours'
        ],
        researchNote: 'Permanent galleries vs. All-Access (inc. Odyssea).',
        tips: 'Free for locals; high-value art collection.'
    },
    'sea-aquarium': {
        title: 'S.E.A. Aquarium',
        category: 'Wildlife',
        rating: 4.6,
        status: 'Paid',
        price: '~$45+',
        hours: 'Monday to Friday: 10:00 AM - 7:00 PM',
        timeSpent: '2 - 4 Hours',
        mustGo: false,
        image: 'images/sea-aquarium.jpg',
        location: { lat: 1.2585, lng: 103.8200 },
        description: 'One of the world\'s largest aquariums featuring over 100,000 marine animals.',
        highlights: [
            'Open Ocean Habitat viewing panel',
            'Over 1,000 species of marine life',
            'Shark Seas habitat',
            'Touch pools',
            'Educational programs'
        ],
        researchNote: 'Now rebranding/expanding as Singapore Oceanarium.',
        tips: 'Visit during feeding times for the best experience'
    },
    'night-safari': {
        title: 'Night Safari',
        category: 'Wildlife',
        rating: 4.2,
        status: 'Paid',
        price: '~$20',
        hours: '7:15 PM - 12:00 AM',
        timeSpent: '3 Hours',
        mustGo: false,
        image: 'images/night-safari.jpg',
        location: { lat: 1.4043, lng: 103.7898 },
        description: 'World\'s first nocturnal wildlife park featuring over 2,500 animals.',
        highlights: [
            'Seven themed zones',
            'Tram ride through habitats',
            'Walking trails',
            'Animal shows',
            'Night feeding sessions'
        ],
        researchNote: 'Free for locals; high-value art collection.',
        tips: 'Arrive early to avoid queues; book online for discounts'
    },
    'singapore-zoo': {
        title: 'Singapore Zoo',
        category: 'Wildlife',
        rating: 4.8,
        status: 'Paid',
        price: '$0',
        hours: '8:30 AM - 6:00 PM',
        timeSpent: '4+ Hours',
        mustGo: false,
        image: 'images/singapore-zoo.jpg',
        location: { lat: 1.4043, lng: 103.7903 },
        description: 'Award-winning zoo featuring over 2,800 animals in naturalistic habitats.',
        highlights: [
            'Open-concept enclosures',
            'Animal shows and feeding sessions',
            'Rainforest Kidzworld',
            'Fragile Forest biodome',
            'Breakfast with orangutans'
        ],
        researchNote: 'UNESCO Site; 95% of the park is free.',
        tips: 'Arrive early to see animals at their most active'
    },
    'haw-par-villa': {
        title: 'Haw Par Villa',
        category: 'Hidden',
        rating: 4.0,
        status: 'Free',
        price: '~$5',
        hours: '9:00 AM - 8:00 PM',
        timeSpent: '1.5 Hours',
        mustGo: false,
        image: 'images/haw-par-villa.jpg',
        location: { lat: 1.2826, lng: 103.7820 },
        description: 'A quirky cultural park featuring over 1,000 statues depicting Chinese mythology and folklore.',
        highlights: [
            'Ten Courts of Hell diorama',
            'Chinese mythology statues',
            'Free admission',
            'Unique photo opportunities',
            'Cultural storytelling'
        ],
        researchNote: 'Located inside the Botanic Gardens.',
        tips: 'Not suitable for young children due to graphic content'
    },
    'haji-lane': {
        title: 'Haji Lane',
        category: 'Hidden',
        rating: 4.0,
        status: 'Free',
        price: '$0',
        hours: '11:00 AM - 9:00 PM',
        timeSpent: '1 - 2 Hours',
        mustGo: false,
        image: 'images/haji-lane.jpg',
        location: { lat: 1.3012, lng: 103.8591 },
        description: 'Narrow alleyway bursting with colorful street art, indie boutiques, quirky cafes, and Instagram-worthy corners.',
        highlights: [
            'Vibrant street art and murals',
            'Boutique shopping',
            'Trendy cafes and restaurants',
            'Photography opportunities',
            'Hipster atmosphere'
        ],
        researchNote: 'Part of Kampong Glam area with vibrant street culture.',
        tips: 'Best visited in the afternoon for photos and shopping'
    },
    'henderson-waves': {
        title: 'Henderson Waves',
        category: 'Hidden',
        rating: 4.5,
        status: 'Free',
        price: '$0',
        hours: '24 Hours (Best at 7 PM)',
        timeSpent: '1 Hour',
        mustGo: false,
        image: 'images/henderson-waves.jpg',
        location: { lat: 1.2756, lng: 103.8159 },
        description: 'Singapore\'s highest pedestrian bridge featuring a stunning wave-like structure.',
        highlights: [
            'Unique wave architecture',
            'Southern Ridges trail',
            'Night lighting (7 PM - 2 AM)',
            'Panoramic city views',
            'Photo opportunities'
        ],
        researchNote: 'Closed on Mondays for maintenance.',
        tips: 'Best visited during sunset or evening'
    },
    'pulau-ubin': {
        title: 'Pulau Ubin',
        category: 'Hidden',
        rating: 4.6,
        status: 'Free',
        price: '$0',
        hours: '6:00 AM - 7:00 PM (Bumboat)',
        timeSpent: '4 - 6 Hours',
        mustGo: false,
        image: 'images/pulau-ubin.jpg',
        location: { lat: 1.4044, lng: 103.9602 },
        description: 'A rustic island offering a glimpse of Singapore\'s kampong past with nature trails and wildlife.',
        highlights: [
            'Chek Jawa wetlands',
            'Mountain biking trails',
            'Kampong village experience',
            'Wildlife spotting',
            'Bumboat ride adventure'
        ],
        researchNote: 'Includes the scenic Henderson Waves bridge.',
        tips: 'Bring cash, water, and sunscreen; limited facilities'
    },
    'sentosa-beaches': {
        title: 'Sentosa Public Beaches',
        category: 'Sentosa',
        rating: 4.8,
        status: 'Free',
        price: '$0',
        hours: '24 hours',
        timeSpent: '2 - 4 Hours',
        mustGo: false,
        image: 'images/sentosa-beaches.jpg',
        location: { lat: 1.2494, lng: 103.8303 },
        description: 'Three pristine beaches offering water sports, dining, and relaxation.',
        highlights: [
            'Siloso Beach - sports & activities',
            'Palawan Beach - family-friendly',
            'Tanjong Beach - quiet & upscale',
            'Beach bars and restaurants',
            'Water sports rentals'
        ],
        researchNote: 'Siloso, Palawan, and Tanjong beaches.',
        tips: 'Free beach access; weekdays less crowded'
    },
    'universal-studios': {
        title: 'Universal Studios Singapore (USS)',
        category: 'Sentosa',
        rating: 4.9,
        status: 'Paid',
        price: '~$140+',
        hours: '10:00 AM to 8:00 PM',
        timeSpent: '6 - 8 Hours',
        mustGo: false,
        image: 'images/universal-studios.jpg',
        location: { lat: 1.2540, lng: 103.8238 },
        description: 'Southeast Asia\'s first and only Universal Studios theme park with themed zones and attractions.',
        highlights: [
            'Seven themed zones',
            'Thrilling rides and shows',
            'Character meet-and-greets',
            'Hollywood Boulevard',
            'Battlestar Galactica rollercoaster'
        ],
        researchNote: 'Prices vary by date; check for "Fast Pass" costs.',
        tips: 'Buy tickets online for discounts; arrive early'
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
    initializeFilterAndSort();
    initializeReviewForm();
    initBudgetCalculator();
    initializeFAQ();
    
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
    
    // Show on Map buttons on cards
    const showOnMapCardButtons = document.querySelectorAll('.show-on-map-card');
    showOnMapCardButtons.forEach(button => {
        button.addEventListener('click', handleShowOnMapFromCard);
    });
    
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
    // Get website URL if available
    const attractionKey = Object.keys(attractionData).find(key => attractionData[key].title === data.title);
    const websiteUrl = attractionKey && window.attractionWebsites ? window.attractionWebsites[attractionKey] : data.website;
    
    // Build modal content with full image and all details
    const modalContent = `
        <div style="position: relative; width: 100%; height: 550px; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem;">
            <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary-red), var(--primary-green)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                ${data.title}
            </div>
        </div>
        
        <h2 style="color: var(--primary-red); margin-bottom: 0.5rem;">${data.title}</h2>
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
            <span style="background: var(--accent-yellow); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">⭐ ${data.rating}</span>
            <span style="background: ${data.status === 'Free' ? 'var(--primary-green)' : 'var(--accent-red)'}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">${data.status}</span>
            ${data.mustGo ? '<span style="background: var(--primary-red); color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">✓ Must Go!</span>' : ''}
        </div>
        
        <p style="font-size: 1.05rem; margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.8;">${data.description}</p>
        
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            ${data.location ? `
            <button id="showOnMapBtn" data-lat="${data.location.lat}" data-lng="${data.location.lng}" data-title="${data.title}" style="background: linear-gradient(135deg, var(--primary-green), var(--accent-teal)); color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3); flex: 1; min-width: 200px;">
                📍 Show on Map
            </button>
            ` : ''}
            
            ${websiteUrl ? `
            <a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" style="background: linear-gradient(135deg, var(--primary-red), var(--accent-red)); color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3); text-decoration: none; display: inline-block; text-align: center; flex: 1; min-width: 200px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 107, 107, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(255, 107, 107, 0.3)'">
                🎫 Visit Official Website
            </a>
            ` : ''}
        </div>
        
        <div style="background: var(--off-white); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h3 style="color: var(--primary-green); margin-top: 0; margin-bottom: 1rem; font-size: 1.2rem;">📋 Essential Information</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div>
                    <p style="margin-bottom: 0.5rem;"><strong style="color: var(--primary-red);">💰 Price:</strong></p>
                    <p style="margin: 0; color: var(--text-secondary);">${data.price}</p>
                </div>
                <div>
                    <p style="margin-bottom: 0.5rem;"><strong style="color: var(--primary-red);">🕒 Hours:</strong></p>
                    <p style="margin: 0; color: var(--text-secondary);">${data.hours}</p>
                </div>
                <div>
                    <p style="margin-bottom: 0.5rem;"><strong style="color: var(--primary-red);">⏱️ Time Needed:</strong></p>
                    <p style="margin: 0; color: var(--text-secondary);">${data.timeSpent}</p>
                </div>
            </div>
        </div>
        
        <h3 style="color: var(--primary-green); margin-top: 1.5rem; margin-bottom: 0.8rem; font-size: 1.1rem;">✨ Highlights</h3>
        <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">
            ${data.highlights.map(item => `<li style="margin-bottom: 0.5rem; color: var(--text-secondary);">${item}</li>`).join('')}
        </ul>
        
        <div style="background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1)); padding: 1.2rem; border-radius: 12px; border-left: 4px solid var(--primary-red); margin-bottom: 1rem;">
            <p style="margin-bottom: 0.8rem;"><strong style="color: var(--primary-red);">📝 Research Note:</strong></p>
            <p style="margin: 0; color: var(--text-secondary); font-style: italic;">${data.researchNote}</p>
        </div>
        
        <div style="background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 230, 109, 0.1)); padding: 1.2rem; border-radius: 12px; border-left: 4px solid var(--primary-green);">
            <p style="margin-bottom: 0.8rem;"><strong style="color: var(--primary-green);">💡 Pro Tips:</strong></p>
            <p style="margin: 0; color: var(--text-secondary);">${data.tips}</p>
        </div>
    `;
    
    DOM.modalBody.innerHTML = modalContent;
    DOM.modal.classList.add('active');
    AppState.modalOpen = true;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add event listener to Show on Map button if it exists
    const showOnMapBtn = document.getElementById('showOnMapBtn');
    if (showOnMapBtn) {
        showOnMapBtn.addEventListener('click', handleShowOnMap);
        // Add hover effect
        showOnMapBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(78, 205, 196, 0.4)';
        });
        showOnMapBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.3)';
        });
    }
}

function closeModal() {
    DOM.modal.classList.remove('active');
    AppState.modalOpen = false;
    document.body.style.overflow = '';
}

// ============================================
// Map Navigation
// ============================================

function handleShowOnMapFromCard(e) {
    const button = e.currentTarget;
    const attractionId = button.getAttribute('data-attraction');
    const data = attractionData[attractionId];
    
    if (data && data.location) {
        // Scroll to the map section
        const mapSection = document.getElementById('travel-map');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Update the map iframe after scrolling
            setTimeout(() => {
                updateMapLocation(data.location.lat, data.location.lng, data.title);
            }, 800); // Wait for scroll to complete
        }
    } else {
        console.warn(`No location data found for attraction: ${attractionId}`);
    }
}

function handleShowOnMap(e) {
    const button = e.target;
    const lat = button.getAttribute('data-lat');
    const lng = button.getAttribute('data-lng');
    const title = button.getAttribute('data-title');
    
    // Close the modal
    closeModal();
    
    // Scroll to the map section
    const mapSection = document.getElementById('travel-map');
    if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Update the map iframe after scrolling
        setTimeout(() => {
            updateMapLocation(lat, lng, title);
        }, 800); // Wait for scroll to complete
    }
}

function updateMapLocation(lat, lng, title) {
    const mapIframe = document.getElementById('travel-map-iframe');
    if (mapIframe) {
        // Create a new embed URL with the specific location
        const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(title)},Singapore&zoom=15&center=${lat},${lng}`;
        
        // Alternative: Use standard embed format
        const standardEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTYnNTguOCJOIDEwM8KwNTEnNDguNiJF!5e0!3m2!1sen!2ssg!4v1673507856000!5m2!1sen!2ssg`;
        
        // Use query parameter method (works without API key)
        const queryEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
        
        // Update iframe src
        mapIframe.src = queryEmbedUrl;
        
        // Add a visual indicator that map is updating
        const mapContainer = mapIframe.parentElement;
        mapContainer.style.position = 'relative';
        
        // Show loading state briefly
        const originalBorder = mapContainer.style.border;
        mapContainer.style.border = '3px solid var(--primary-green)';
        mapContainer.style.transition = 'border 0.3s ease';
        
        setTimeout(() => {
            mapContainer.style.border = originalBorder;
        }, 2000);
    }
}

// ============================================
// CTA Handlers
// ============================================

function handleCTAClick(e) {
    const buttonId = this.id;
    
    if (buttonId === 'getStarted') {
        // Scroll to Iconic landmarks section
        document.getElementById('Iconic').scrollIntoView({ behavior: 'smooth' });
    } else if (buttonId === 'planTrip') {
        // Open AI chatbot directly
        if (typeof window.botpressWebChat !== 'undefined') {
            window.botpressWebChat.sendEvent({ type: 'show' });
        } else {
            console.warn('Botpress chatbot not loaded yet');
        }
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

// ============================================
// Botpress Chatbot Integration
// ============================================

// Function to open Botpress chat
function openChatbot() {
    if (typeof window.botpressWebChat !== 'undefined') {
        window.botpressWebChat.sendEvent({ type: 'show' });
    }
}

// Note: CTA buttons (getStarted, planTrip) are already handled in setupEventListeners() via handleCTAClick()

// Optional: Also connect the "Learn More" buttons on attraction cards
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', () => {
        const attraction = button.getAttribute('data-attraction');
        openChatbot();
        // This sends a hidden message to the bot so it starts talking about that specific place!
        window.botpressWebChat.sendPayload({
            type: 'text',
            text: `Tell me about ${attraction} lah`
        });
    });
});

// ============================================
// Auto-Scroll Magic: Bot mentions → Website scrolls!
// ============================================

// Mapping of keywords to section IDs
const sectionKeywords = {
    'landmarks': ['marina bay', 'merlion', 'sentosa', 'landmark', 'icon'],
    'cultural': ['chinatown', 'little india', 'temple', 'mosque', 'cultural', 'heritage'],
    'museums': ['museum', 'gallery', 'art', 'science', 'history'],
    'hidden-gems': ['hidden gem', 'secret', 'local spot', 'off the beaten'],
    'essentials': ['transport', 'mrt', 'food', 'hawker', 'essential', 'getting around']
};

// Listen to bot messages and auto-scroll to relevant sections
window.addEventListener('message', (event) => {
    // Check if message is from Botpress
    if (event.data && event.data.name === 'webchatMessage') {
        const message = event.data.data;
        
        // Only process bot messages (not user messages)
        if (message && message.direction === 'incoming' && message.payload && message.payload.text) {
            const botText = message.payload.text.toLowerCase();
            
            // Check which section the bot is talking about
            for (const [sectionId, keywords] of Object.entries(sectionKeywords)) {
                if (keywords.some(keyword => botText.includes(keyword))) {
                    // Found a match! Scroll to that section
                    const section = document.getElementById(sectionId);
                    if (section) {
                        setTimeout(() => {
                            section.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start' 
                            });
                        }, 500); // Small delay so user sees the bot response first
                    }
                    break; // Stop after first match
                }
            }
        }
    }
});

// 💡 Alternative for Tabs (if you later convert sections to tabs):
// function showSection(sectionId) {
//     // Hide all sections
//     document.querySelectorAll('.section-tab').forEach(tab => {
//         tab.style.display = 'none';
//     });
//     // Show the target section
//     const targetSection = document.getElementById(sectionId);
//     if (targetSection) {
//         targetSection.style.display = 'block';
//     }
// }

// ============================================
// Precise Scroll Control: Bot sends SCROLL commands
// ============================================

// Listen for specific scroll commands from the bot (e.g., 'SCROLL_Iconic', 'SCROLL_landmarks')
window.botpressWebChat.onEvent((event) => {
    // Check if this is a message event
    if (event.type === 'message' && event.value.payload && event.value.payload.text) {
        const messageText = event.value.payload.text;
        
        // Check if the message starts with 'SCROLL_'
        if (messageText.startsWith('SCROLL_')) {
            // Extract the section ID (e.g., 'SCROLL_Iconic' → 'Iconic')
            const sectionId = messageText.replace('SCROLL_', '');
            
            // Find the section by ID from your HTML
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log(`Scrolling to ${sectionId}!`);
            } else {
                console.warn(`Section with ID "${sectionId}" not found`);
            }
        }
    }
}, ['MESSAGE.RECEIVED']);

// 💡 Bot Setup Instructions:
// In your Botpress bot, send messages like:
// - "SCROLL_landmarks" → scrolls to landmarks section
// - "SCROLL_cultural" → scrolls to cultural section
// - "SCROLL_museums" → scrolls to museums section
// - "SCROLL_hidden-gems" → scrolls to hidden gems section
// - "SCROLL_essentials" → scrolls to essentials section

// ============================================
// Filter and Sort Functionality
// ============================================

function initializeFilterAndSort() {
    // Get all filter and sort controls
    const filterSelects = document.querySelectorAll('.filter-select');
    const sortSelects = document.querySelectorAll('.sort-select');
    
    // Add event listeners to all filter selects
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const section = this.dataset.section;
            applyFiltersAndSort(section);
        });
    });
    
    // Add event listeners to all sort selects
    sortSelects.forEach(select => {
        select.addEventListener('change', function() {
            const section = this.dataset.section;
            applyFiltersAndSort(section);
        });
    });
}

function applyFiltersAndSort(section) {
    // Get the section container
    const sectionElement = document.querySelector(`[data-category="${section}"]`)?.closest('.attractions-section');
    if (!sectionElement) return;
    
    // Get filter values
    const statusFilter = sectionElement.querySelector(`[data-section="${section}"][id*="filter-status"]`)?.value || 'all';
    const ratingFilter = sectionElement.querySelector(`[data-section="${section}"][id*="filter-rating"]`)?.value || 'all';
    const sortValue = sectionElement.querySelector(`[data-section="${section}"][id*="sort"]`)?.value || 'default';
    
    // Get all attraction cards in this section
    const grid = sectionElement.querySelector('.attractions-grid');
    const cards = Array.from(grid.querySelectorAll('.attraction-card'));
    
    // Filter cards
    let visibleCards = cards.filter(card => {
        const cardCategory = card.dataset.category;
        if (cardCategory !== section) return false;
        
        // Status filter
        if (statusFilter !== 'all') {
            const cardStatus = card.dataset.status;
            if (cardStatus !== statusFilter) return false;
        }
        
        // Rating filter
        if (ratingFilter !== 'all') {
            const cardRating = parseFloat(card.dataset.rating) || 0;
            const minRating = parseFloat(ratingFilter);
            if (cardRating < minRating) return false;
        }
        
        return true;
    });
    
    // Hide all cards first
    cards.forEach(card => {
        if (card.dataset.category === section) {
            card.classList.add('hidden');
        }
    });
    
    // Sort visible cards
    if (sortValue !== 'default') {
        visibleCards.sort((a, b) => {
            switch (sortValue) {
                case 'rating-high':
                    return (parseFloat(b.dataset.rating) || 0) - (parseFloat(a.dataset.rating) || 0);
                case 'rating-low':
                    return (parseFloat(a.dataset.rating) || 0) - (parseFloat(b.dataset.rating) || 0);
                case 'name-az':
                    return (a.dataset.name || '').localeCompare(b.dataset.name || '');
                case 'name-za':
                    return (b.dataset.name || '').localeCompare(a.dataset.name || '');
                default:
                    return 0;
            }
        });
    }
    
    // Check if there are any results
    let noResultsMsg = grid.querySelector('.no-results');
    
    if (visibleCards.length === 0) {
        // Show no results message
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results';
            noResultsMsg.innerHTML = `
                <h3>No attractions found</h3>
                <p>Try adjusting your filters to see more results.</p>
            `;
            grid.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else {
        // Hide no results message
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
        
        // Show and reorder visible cards
        visibleCards.forEach(card => {
            card.classList.remove('hidden');
            grid.appendChild(card); // This moves the card to the end, creating the sorted order
        });
    }
}

// ============================================
// Review Form Functionality
// ============================================

function initializeReviewForm() {
    // Toggle between anonymous and named review
    const reviewTypeRadios = document.querySelectorAll('input[name="reviewType"]');
    const namedFields = document.getElementById('namedFields');
    
    reviewTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'named') {
                namedFields.style.display = 'block';
            } else {
                namedFields.style.display = 'none';
            }
        });
    });
    
    // Star rating functionality
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            ratingValue.value = rating;
            
            // Update star display
            stars.forEach(s => {
                const starRating = parseInt(s.dataset.rating);
                if (starRating <= rating) {
                    s.textContent = '★';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.classList.remove('active');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = this.dataset.rating;
            stars.forEach(s => {
                const starRating = parseInt(s.dataset.rating);
                if (starRating <= rating) {
                    s.textContent = '★';
                } else {
                    s.textContent = '☆';
                }
            });
        });
    });
    
    // Reset stars on mouse leave
    const starRating = document.getElementById('starRating');
    starRating.addEventListener('mouseleave', function() {
        const currentRating = ratingValue.value;
        stars.forEach(s => {
            const starRating = parseInt(s.dataset.rating);
            if (starRating <= currentRating) {
                s.textContent = '★';
            } else {
                s.textContent = '☆';
            }
        });
    });
    
    // Character counter for review text
    const reviewText = document.getElementById('reviewText');
    const charCount = document.getElementById('charCount');
    
    if (reviewText && charCount) {
        reviewText.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count > 500) {
                this.value = this.value.substring(0, 500);
                charCount.textContent = 500;
            }
        });
    }
    
    // Form submission
    const reviewForm = document.getElementById('reviewForm');
    const reviewSuccess = document.getElementById('reviewSuccess');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const reviewType = document.querySelector('input[name="reviewType"]:checked').value;
            const rating = ratingValue.value;
            const reviewTextValue = reviewText.value.trim();
            
            // Validation
            if (rating === '0') {
                alert('Please select a rating!');
                return;
            }
            
            if (reviewTextValue === '') {
                alert('Please write your review!');
                return;
            }
            
            if (reviewType === 'named') {
                const name = document.getElementById('reviewerName').value.trim();
                const country = document.getElementById('reviewerCountry').value;
                
                if (name === '' || country === '') {
                    alert('Please fill in your name and country!');
                    return;
                }
            }
            
            // Simulate form submission
            console.log('Review submitted:', {
                type: reviewType,
                rating: rating,
                review: reviewTextValue
            });
            
            // Hide form and show success message
            reviewForm.style.display = 'none';
            reviewSuccess.style.display = 'block';
            
            // Scroll to success message
            reviewSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Optional: Reset form after 3 seconds and show it again
            setTimeout(() => {
                reviewForm.reset();
                ratingValue.value = '0';
                stars.forEach(s => {
                    s.textContent = '☆';
                    s.classList.remove('active');
                });
                charCount.textContent = '0';
                namedFields.style.display = 'none';
                
                // You could optionally hide success and show form again
                // reviewSuccess.style.display = 'none';
                // reviewForm.style.display = 'block';
            }, 3000);
        });
    }
}

// ============================================
// Budget Calculator Functionality
// ============================================

function initBudgetCalculator() {
    const budgetForm = document.getElementById('budgetForm');
    const budgetResults = document.getElementById('budgetResults');
    
    if (!budgetForm) return;
    
    // Attraction prices database (in SGD)
    const attractionPrices = {
        'gardens-by-the-bay': 28,
        'jewel-changi': 0,
        'marina-bay-sands': 35,
        'merlion': 0,
        'kampong-glam': 0,
        'peranakan-museum': 10,
        'buddha-tooth': 0,
        'national-museum': 15,
        'artscience-museum': 19,
        'national-gallery': 20,
        'henderson-waves': 0,
        'haw-par-villa': 0,
        'pulau-ubin': 3,
        'night-safari': 49,
        'singapore-zoo': 39,
        'universal-studios': 81,
        'sentosa-beaches': 0,
        'sea-aquarium': 41
    };
    
    // Attraction website URLs
    const attractionWebsites = {
        'gardens-by-the-bay': 'https://www.gardensbythebay.com.sg/',
        'jewel-changi': 'https://www.jewelchangiairport.com/',
        'marina-bay-sands': 'https://www.marinabaysands.com/sands-skypark.html',
        'merlion': 'https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/',
        'kampong-glam': 'https://www.visitsingapore.com/see-do-singapore/places-to-see/kampong-gelam/',
        'peranakan-museum': 'https://www.peranakanmuseum.org.sg/',
        'buddha-tooth': 'http://www.btrts.org.sg/',
        'national-museum': 'https://www.nationalmuseum.sg/',
        'artscience-museum': 'https://www.marinabaysands.com/museum.html',
        'national-gallery': 'https://www.nationalgallery.sg/',
        'henderson-waves': 'https://www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/southern-ridges',
        'haw-par-villa': 'https://www.hawparvilla.sg/',
        'pulau-ubin': 'https://www.nparks.gov.sg/gardens-parks-and-nature/parks-and-nature-reserves/pulau-ubin',
        'night-safari': 'https://www.mandai.com/en/singapore-night-safari.html',
        'singapore-zoo': 'https://www.mandai.com/en/singapore-zoo.html',
        'universal-studios': 'https://www.rwsentosa.com/en/attractions/universal-studios-singapore',
        'sentosa-beaches': 'https://www.sentosa.com.sg/en/things-to-do/beaches/',
        'sea-aquarium': 'https://www.rwsentosa.com/en/attractions/sea-aquarium'
    };
    
    // Make websites globally accessible
    window.attractionWebsites = attractionWebsites;
    
    budgetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const totalBudget = parseFloat(document.getElementById('totalBudget').value);
        const tripDays = parseInt(document.getElementById('tripDays').value);
        
        if (!totalBudget || !tripDays || totalBudget <= 0 || tripDays <= 0) {
            alert('Please enter valid budget and trip duration!');
            return;
        }
        
        // Calculate budget breakdown
        // Food: 30%, Transport: 15%, Accommodation: 35%, Attractions: 20%
        const foodBudget = totalBudget * 0.30;
        const transportBudget = totalBudget * 0.15;
        const accommodationBudget = totalBudget * 0.35;
        const attractionsBudget = totalBudget * 0.20;
        
        // Update UI with budget breakdown
        document.getElementById('foodBudget').textContent = `$${foodBudget.toFixed(0)}`;
        document.getElementById('transportBudget').textContent = `$${transportBudget.toFixed(0)}`;
        document.getElementById('accommodationBudget').textContent = `$${accommodationBudget.toFixed(0)}`;
        document.getElementById('attractionsBudget').textContent = `$${attractionsBudget.toFixed(0)}`;
        
        // Calculate affordable attractions
        const affordableAttractions = [];
        const freeAttractions = [];
        const paidAttractions = [];
        
        let remainingBudget = attractionsBudget;
        
        // Separate free and paid attractions
        for (const [key, price] of Object.entries(attractionPrices)) {
            if (price === 0) {
                freeAttractions.push({ name: key, price: price });
            } else if (price <= attractionsBudget) {
                paidAttractions.push({ name: key, price: price });
            }
        }
        
        // Sort paid attractions by price (ascending)
        paidAttractions.sort((a, b) => a.price - b.price);
        
        // Add free attractions first
        affordableAttractions.push(...freeAttractions);
        
        // Add paid attractions that fit the budget
        for (const attraction of paidAttractions) {
            if (remainingBudget >= attraction.price) {
                affordableAttractions.push(attraction);
                remainingBudget -= attraction.price;
            }
        }
        
        // Update statistics
        document.getElementById('affordableCount').textContent = affordableAttractions.length;
        document.getElementById('freeCount').textContent = freeAttractions.length;
        document.getElementById('paidCount').textContent = affordableAttractions.length - freeAttractions.length;
        
        // Generate budget tips
        const budgetTips = generateBudgetTips(attractionsBudget, tripDays, affordableAttractions.length, freeAttractions.length);
        const budgetTipsContainer = document.getElementById('budgetTips');
        budgetTipsContainer.innerHTML = '';
        budgetTips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            budgetTipsContainer.appendChild(li);
        });
        
        // Store affordable attractions in a global variable for access by click handlers
        window.currentAffordableAttractions = affordableAttractions;
        
        // Add click handlers to summary stats to show detailed list
        setupAttractionListDisplay(affordableAttractions, freeAttractions, attractionPrices);
        
        // Show results
        budgetResults.style.display = 'block';
        
        // Scroll to results
        budgetResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function setupAttractionListDisplay(affordableAttractions, freeAttractions, attractionPrices) {
    // Store the attraction lists for filtering
    const paidAttractions = affordableAttractions.filter(attr => attr.price > 0);
    
    // Check if list container already exists, if not create it
    let attractionListContainer = document.getElementById('affordableAttractionsList');
    if (!attractionListContainer) {
        attractionListContainer = document.createElement('div');
        attractionListContainer.id = 'affordableAttractionsList';
        attractionListContainer.className = 'affordable-attractions-list';
        attractionListContainer.style.display = 'none';
        
        // Insert after the summary
        const summarySection = document.querySelector('.recommendation-summary');
        summarySection.parentNode.insertBefore(attractionListContainer, summarySection.nextSibling);
    }
    
    // Function to display attractions based on filter
    function displayAttractions(attractionsList, filterType = 'all') {
        let listHTML = '<h5>';
        if (filterType === 'free') {
            listHTML += '🆓 Free Attractions for Your Budget';
        } else if (filterType === 'paid') {
            listHTML += '💰 Paid Attractions You Can Afford';
        } else {
            listHTML += '📍 All Recommended Attractions for Your Budget';
        }
        listHTML += '</h5><div class="attraction-list-grid">';
        
        attractionsList.forEach(attr => {
            const attrData = attractionData[attr.name];
            const displayName = attrData ? attrData.title : formatAttractionName(attr.name);
            const priceText = attr.price === 0 ? 'FREE' : `$${attr.price}`;
            const category = attrData ? attrData.category : 'Attraction';
            const rating = attrData ? attrData.rating : 'N/A';
            
            listHTML += `
                <div class="budget-attraction-card" data-attraction="${attr.name}">
                    <div class="budget-card-header">
                        <h6>${displayName}</h6>
                        <span class="budget-price ${attr.price === 0 ? 'free' : ''}">${priceText}</span>
                    </div>
                    <div class="budget-card-meta">
                        <span class="category-badge">${category}</span>
                        <span class="rating-badge">⭐ ${rating}</span>
                    </div>
                    <button class="budget-learn-more" data-attraction="${attr.name}">View Details</button>
                </div>
            `;
        });
        
        listHTML += '</div>';
        attractionListContainer.innerHTML = listHTML;
        
        // Add click handlers to the "View Details" buttons
        setTimeout(() => {
            document.querySelectorAll('.budget-learn-more').forEach(btn => {
                btn.addEventListener('click', function() {
                    const attractionKey = this.getAttribute('data-attraction');
                    const data = attractionData[attractionKey];
                    if (data) {
                        openModal(data);
                    } else {
                        console.warn(`No data found for attraction: ${attractionKey}`);
                    }
                });
            });
        }, 100);
    }
    
    // Add click handlers to summary stats
    const affordableCountStat = document.querySelector('.summary-stat:nth-child(1)');
    const freeCountStat = document.querySelector('.summary-stat:nth-child(2)');
    const paidCountStat = document.querySelector('.summary-stat:nth-child(3)');
    
    // All attractions (click on total count)
    if (affordableCountStat) {
        affordableCountStat.style.cursor = 'pointer';
        affordableCountStat.onclick = function() {
            if (attractionListContainer.style.display === 'none' || attractionListContainer.dataset.currentFilter !== 'all') {
                displayAttractions(affordableAttractions, 'all');
                attractionListContainer.style.display = 'block';
                attractionListContainer.dataset.currentFilter = 'all';
                attractionListContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                attractionListContainer.style.display = 'none';
                attractionListContainer.dataset.currentFilter = '';
            }
        };
    }
    
    // Free attractions only (click on free count)
    if (freeCountStat) {
        freeCountStat.style.cursor = 'pointer';
        freeCountStat.onclick = function() {
            if (attractionListContainer.style.display === 'none' || attractionListContainer.dataset.currentFilter !== 'free') {
                displayAttractions(freeAttractions, 'free');
                attractionListContainer.style.display = 'block';
                attractionListContainer.dataset.currentFilter = 'free';
                attractionListContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                attractionListContainer.style.display = 'none';
                attractionListContainer.dataset.currentFilter = '';
            }
        };
    }
    
    // Paid attractions only (click on paid count)
    if (paidCountStat) {
        paidCountStat.style.cursor = 'pointer';
        paidCountStat.onclick = function() {
            if (attractionListContainer.style.display === 'none' || attractionListContainer.dataset.currentFilter !== 'paid') {
                displayAttractions(paidAttractions, 'paid');
                attractionListContainer.style.display = 'block';
                attractionListContainer.dataset.currentFilter = 'paid';
                attractionListContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                attractionListContainer.style.display = 'none';
                attractionListContainer.dataset.currentFilter = '';
            }
        };
    }
}

function formatAttractionName(key) {
    return key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function generateBudgetTips(attractionsBudget, tripDays, totalAttractions, freeAttractions) {
    const tips = [];
    
    // Daily budget tip
    const dailyAttractionBudget = attractionsBudget / tripDays;
    tips.push(`You can spend about $${dailyAttractionBudget.toFixed(0)} per day on attractions.`);
    
    // Free attractions tip
    if (freeAttractions > 0) {
        tips.push(`Visit ${freeAttractions} free attractions to maximize your budget.`);
    }
    
    // Budget level tips
    if (attractionsBudget < 100) {
        tips.push('Focus on free attractions and gardens. Many of Singapore\'s best sites are free!');
        tips.push('Visit during off-peak hours for better photos and fewer crowds.');
    } else if (attractionsBudget < 200) {
        tips.push('You can visit 2-3 major paid attractions plus several free ones.');
        tips.push('Consider buying combo tickets at theme parks for savings.');
    } else if (attractionsBudget < 300) {
        tips.push('Great budget! You can explore most major attractions comfortably.');
        tips.push('Book Universal Studios and zoo tickets online in advance for discounts.');
    } else {
        tips.push('Excellent budget! You can visit all major attractions with room to spare.');
        tips.push('Consider VIP experiences or premium tours at select attractions.');
    }
    
    // Student discount tip
    tips.push('Always bring your student ID - many attractions offer student discounts!');
    
    // Food tip related to budget
    if (attractionsBudget > 150) {
        tips.push('Save on food by eating at hawker centers ($3-$5 per meal) instead of restaurants.');
    }
    
    return tips;
}

// ============================================// FAQ Accordion Functionality
// ============================================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if this item is currently active
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================