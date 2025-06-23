// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    renderPublications();
    renderTimeline();
    initScrollAnimations();
    initSmoothScrolling();
});

// Navigation Functions
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Highlight active navigation link based on scroll position
    window.addEventListener('scroll', highlightActiveNavLink);
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Publications Rendering
function renderPublications() {
    const publicationsGrid = document.getElementById('publicationsGrid');
    
    if (!publicationsGrid) return;

    publicationsGrid.innerHTML = '';

    publications.forEach((pub, index) => {
        const pubCard = createPublicationCard(pub, index);
        publicationsGrid.appendChild(pubCard);
    });
}

function createPublicationCard(publication, index) {
    const card = document.createElement('div');
    card.className = 'publication-card scroll-reveal';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <img src="${publication.image}" alt="${publication.title}" 
             class="publication-image" 
             onerror="this.style.display='none';">
        <div class="publication-content">
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-authors">${publication.authors}</p>
            <p class="publication-venue">${publication.venue} (${publication.year})</p>
            ${publication.description ? `<p class="publication-description">${publication.description}</p>` : ''}
        </div>
    `;

    // Add click event for future functionality (modal, external link, etc.)
    card.addEventListener('click', function() {
        // Future: Open modal with more details or navigate to paper
        console.log('Publication clicked:', publication.title);
    });

    return card;
}

// Timeline/Vitae Rendering
function renderTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    vitaeData.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

function createTimelineItem(item, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item scroll-reveal';
    timelineItem.style.animationDelay = `${index * 0.2}s`;

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <div class="timeline-date">${item.period}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <h4 class="timeline-subtitle">${item.subtitle}</h4>
            <p class="timeline-description">${item.description}</p>
        </div>
        <div class="timeline-icon">
            <img src="${item.image}" alt="${item.title}" 
                 onerror="this.innerHTML='<i class=\\"fas fa-${getTimelineIcon(item.type)}\\"></i>';">
        </div>
    `;

    return timelineItem;
}

function getTimelineIcon(type) {
    switch(type) {
        case 'work': return 'briefcase';
        case 'education': return 'graduation-cap';
        case 'military': return 'shield-alt';
        default: return 'circle';
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navbar Background on Scroll
window.addEventListener('scroll', debounce(function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10));

// Handle dark mode based on system preference
function handleDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

// Listen for changes in color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleDarkMode);

// Initialize dark mode
handleDarkMode();

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add fade-in animation to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('fade-in-up');
    }
});

// Error Handling for Images
function handleImageError(img) {
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder-error';
        placeholder.innerHTML = '<i class="fas fa-image"></i><p>Image not found</p>';
        parent.appendChild(placeholder);
    }
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
    });
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Contact Form Handling (if needed in the future)
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Contact form submitted');
        });
    }
}

// Analytics and Tracking (placeholder for future use)
function trackPageView() {
    // Placeholder for analytics tracking
    console.log('Page view tracked');
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initContactForm();
    trackPageView();
});

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderPublications,
        renderTimeline,
        initScrollAnimations,
        initNavigation
    };
} 