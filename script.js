// Wrap everything in a DOMContentLoaded listener to ensure HTML is ready
document.addEventListener('DOMContentLoaded', () => {

    // --- Cache DOM Elements ---
    const header = document.querySelector('header'); // For scroll effects
    const navbar = document.querySelector('.navbar'); // For height calculations
    const hamburger = document.querySelector('.hamburger'); // Mobile menu toggle
    const navLinksContainer = document.querySelector('.nav-links'); // Mobile menu container
    const navLinks = document.querySelectorAll('.nav-links a'); // Individual nav links
    const sections = document.querySelectorAll('main .section'); // All main content sections
    const footerYear = document.getElementById('year'); // Span for dynamic year

    // --- Navbar & Mobile Menu Logic ---
    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinksContainer.classList.toggle('active');
            // Toggle ARIA attribute for accessibility
            hamburger.setAttribute('aria-expanded', isActive);
            // Prevent body scrolling when mobile menu is open (optional)
            // document.body.style.overflow = isActive ? 'hidden' : '';
        });
    }

    // Close mobile menu if user clicks outside of it
    document.addEventListener('click', (event) => {
        if (navLinksContainer && navLinksContainer.classList.contains('active') &&
            !navLinksContainer.contains(event.target) && !hamburger.contains(event.target)) {
                navLinksContainer.classList.remove('active');
                if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
                // document.body.style.overflow = ''; // Re-enable body scroll
        }
    });


    // --- Navbar Style Change on Scroll ---
    const scrollThreshold = 50; // Pixels scrolled before adding class
    if (header) {
        // Function to add/remove 'scrolled' class
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        // Initial check in case the page loads already scrolled
        handleScroll();
        // Add listener
        window.addEventListener('scroll', handleScroll);
        console.log("Navbar scroll effect initialized.");
    }

    // --- Smooth Scrolling for Nav Links & Mobile Menu Close ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Check if it's an internal anchor link
            if (href && href.startsWith('#')) {
                e.preventDefault(); // Prevent default jump
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navBarHeight = navbar ? navbar.offsetHeight : 70; // Use actual height or fallback
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navBarHeight - 10; // Add 10px buffer

                    // Perform smooth scroll
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu after clicking a link, if open
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
                        // document.body.style.overflow = ''; // Re-enable body scroll
                    }
                }
            }
            // If it's not an anchor link (e.g., external), default behavior applies
        });
    });

    // --- Active Nav Link Highlighting on Scroll ---
    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null,
            // Activate slightly before the section hits the top, deactivate when center passed bottom
            rootMargin: `-${navbar ? navbar.offsetHeight : 70}px 0px -40% 0px`,
            threshold: 0 // Trigger as soon as boundary is crossed
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const correspondingLink = navLinksContainer.querySelector(`a[href="#${id}"]`);

                if (entry.isIntersecting) {
                     // When a section becomes intersecting, remove active class from all...
                     navLinks.forEach(link => link.classList.remove('active-link'));
                     // ...then add it to the corresponding link for the current section
                     if (correspondingLink) {
                         correspondingLink.classList.add('active-link');
                         // console.log(`Activating link for: ${id}`);
                     }
                 } else {
                    // Optional: Only remove if specifically NOT intersecting
                     // This reduces flickering if multiple entries fire quickly
                     if (correspondingLink) {
                         correspondingLink.classList.remove('active-link');
                     }
                 }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));
        console.log("Intersection Observer for nav links initialized.");
    } else {
         console.warn("Sections or Nav Links missing for Intersection Observer setup.");
    }


    // --- Projects Carousel Logic ---
    const carouselContainer = document.querySelector('.carousel-container');
    const track = document.querySelector('.carousel-track');
    const nextButton = carouselContainer ? carouselContainer.querySelector('.carousel-btn.next') : null;
    const prevButton = carouselContainer ? carouselContainer.querySelector('.carousel-btn.prev') : null;
    let cards = track ? Array.from(track.children) : [];
    let cardWidth = 0;
    let visibleCards = 1;
    let currentIndex = 0;
    let isCarouselInitialized = false;

    function calculateCarouselMetrics() {
        if (!track || cards.length === 0 || !carouselContainer) return;

        const cardStyle = window.getComputedStyle(cards[0]);
        const cardMarginRight = parseFloat(cardStyle.marginRight) || 0;
        // Use offsetWidth for reliable width including padding/border
        cardWidth = cards[0].offsetWidth + cardMarginRight;

        const containerWidth = carouselContainer.offsetWidth;
        visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
    }

    function updateCarouselUI() {
        if (!track || cards.length === 0 || !prevButton || !nextButton) return;

        const maxIndex = Math.max(0, cards.length - visibleCards);
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex)); // Clamp index

        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;

        // Add visual styles for disabled buttons if desired in CSS (e.g., opacity)
        prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
        nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
    }

    function initializeCarousel() {
        if (isCarouselInitialized || !track || cards.length === 0 || !nextButton || !prevButton) {
             if (!isCarouselInitialized) console.warn("Carousel elements missing or empty, initialization skipped.");
             return;
         }

        console.log("Initializing Projects carousel...");

        nextButton.addEventListener('click', () => {
             const maxIndex = Math.max(0, cards.length - visibleCards);
             if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarouselUI();
             }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarouselUI();
            }
        });

        // Recalculate on resize using debounce
         let resizeTimeout;
        window.addEventListener('resize', () => {
             clearTimeout(resizeTimeout);
             resizeTimeout = setTimeout(() => {
                calculateCarouselMetrics();
                updateCarouselUI();
            }, 250); // Adjust delay as needed
        });

        // Initial Setup
        calculateCarouselMetrics();
        updateCarouselUI();
        isCarouselInitialized = true; // Mark as initialized
         console.log("Projects carousel initialized successfully.");
    }

    initializeCarousel(); // Try to initialize on load

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true; // Assume valid initially

            // --- Clear previous errors ---
            [nameInput, emailInput, messageInput].forEach(input => {
                if (input) input.classList.remove('input-error');
                // Also clear any previous inline error messages if added
                const errorSpan = input?.parentNode.querySelector('.error-message');
                if(errorSpan) errorSpan.textContent = '';
            });

            // --- Validate ---
            if (!nameInput || nameInput.value.trim() === '') {
                 alert('Please enter your name.'); // Alert is fallback, prefer inline errors
                 nameInput?.classList.add('input-error');
                 isValid = false;
            }
            if (!emailInput || emailInput.value.trim() === '') {
                 alert('Please enter your email address.');
                 emailInput?.classList.add('input-error');
                 isValid = false;
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())) {
                alert('Please enter a valid email address.');
                 emailInput?.classList.add('input-error');
                 isValid = false;
            }
             if (!messageInput || messageInput.value.trim() === '') {
                alert('Please enter a message.');
                messageInput?.classList.add('input-error');
                isValid = false;
            }

            // --- Submit ---
            if (isValid) {
                console.log('Form data (Simulation):', {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim()
                });
                alert(`Thank you, ${nameInput.value.trim()}! Your message has been submitted (placeholder response).`);
                contactForm.reset(); // Clear the form
            }
        });
        console.log("Contact form validation script enhanced.");
    } else {
         console.warn("Contact form not found.");
    }


    // --- Dynamic Footer Year ---
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // --- Final Log ---
    console.log("Main script execution complete.");

}); // End DOMContentLoaded
