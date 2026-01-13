// TravelMate - Interactive Features

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation items on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Mobile menu toggle (if needed in future)
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.15)';
        } else if (currentScroll > lastScroll) {
            // Scrolling down - could hide navbar if desired
            navbar.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.15)';
        } else {
            // Scrolling up
            navbar.style.boxShadow = '0 8px 24px rgba(255, 107, 107, 0.2)';
        }
        
        lastScroll = currentScroll;
    });

    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add click tracking for analytics (placeholder)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent;
            console.log(`Button clicked: ${buttonText}`);
            // Here you could add analytics tracking
        });
    });

    // Easter egg: console message for curious students
    console.log('%c Welcome to TravelMate! 🌏', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
    console.log('%c Your guide to exploring Singapore as an RP exchange student', 'color: #4ECDC4; font-size: 14px;');
    console.log('%c Made with ❤️ for international students', 'color: #FFE66D; font-size: 12px;');
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Performance: Lazy loading for images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    // If images are added later, they can use data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add print-friendly functionality
function preparePrint() {
    window.print();
}

// Expose useful functions globally
window.TravelMate = {
    print: preparePrint,
    version: '1.0.0'
};
