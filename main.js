/**
 * ==========================================================================
 * RUNTIME APPLICATION CONTROLLER ARCHITECTURE
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Application States
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';

    // Core Elements Tracking
    const themeToggleBtn = document.getElementById('theme-toggle');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const langBtns = document.querySelectorAll('.lang-btn');
    const sections = document.querySelectorAll('section');

    /* ==========================================================================
       1. TRANSLATION ENGINE MECHANICS
       ========================================================================== */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        // Scan DOM for i18n data-attributes and replace content seamlessly
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If element is a standard text input field placeholder, adjust property
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update active UI classes inside the selector framework
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Adjust HTML system attribute for accessibility standards
        document.documentElement.setAttribute('lang', lang);
    }

    // Assign Click Handlers to Translation Elements
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            setLanguage(targetLang);
        });
    });

    // Initialize Default Runtime Language
    setLanguage(currentLang);

    /* ==========================================================================
       2. LIGHT / DARK THEME TOGGLE CONTROLS
       ========================================================================== */
    function initializeTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        // Fallback checks to find system-level configurations if no manual cache exists
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.replace('dark-theme', 'light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });

    initializeTheme();

    /* ==========================================================================
       3. MOBILE RESPONSIVE INTERFACE (HAMBURGER ACTION)
       ========================================================================== */
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    /* ==========================================================================
       4. HIGH PERFORMANCE INTERSECTION OBSERVATION (SCROLL ANIMATIONS)
       ========================================================================== */
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // Stop observing once element is visible to save engine cycles
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        animationObserver.observe(element);
    });

    /* ==========================================================================
       5. ACTIVE NAVIGATION STYLES HIGH-LIGHTER ON SCROLL
       ========================================================================== */
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    } else {
                        link.classList.remove('active-link');
                    }
                });
            }
        });
    }, {
        threshold: 0.5, // Highlight when section takes up 50% of visual viewport
        rootMargin: "-20% 0px -40% 0px"
    });

    sections.forEach(section => scrollObserver.observe(section));
});
