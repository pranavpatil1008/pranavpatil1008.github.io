document.addEventListener('DOMContentLoaded', () => {

    // --- Cache DOM Elements ---
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main .section'); // Target sections within main
    const footerYear = document.getElementById('year');

    // --- Navbar & Mobile Menu ---
    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            // Toggle ARIA attribute for accessibility
            const isExpanded = navLinksContainer.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu if user clicks outside of it (optional but good UX)
    document.addEventListener('click', (event) => {
        if (navLinksContainer && navLinksContainer.classList.contains('active') &&
            !navLinksContainer.contains(event.target) && !hamburger.contains(event.target)) {
                navLinksContainer.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
        }
    });


    // --- Navbar Style Change on Scroll ---
    const scrollThreshold = 50; // Pixels to scroll before changing style
    if (header) { // Use header if it exists, otherwise navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Smooth Scrolling for Nav Links ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navBarHeight = navbar ? navbar.offsetHeight : 70; // Get actual height or fallback
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    // Calculate precise scroll position, accounting for current scroll and navbar height
                    const offsetPosition = elementPosition + window.pageYOffset - navBarHeight - 10; // Add 10px buffer

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu after clicking
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
                    }
                }
            }
            // Non-hash links will proceed normally
        });
    });

    // --- Active Nav Link Highlighting on Scroll ---
    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null, // Relative to viewport
            rootMargin: '-100px 0px -50% 0px', // Adjust margin: activates when section is in upper part of viewport
            threshold: 0 // Trigger as soon as 1 pixel is visible within rootMargin
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    // Remove active class from all links first
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    // Add active class to the intersecting link
                    if (correspondingLink) {
                        correspondingLink.classList.add('active-link');
                    }
                } else {
                     // Optional: Remove active class when leaving the intersection zone
                     // if (correspondingLink) {
                     //     correspondingLink.classList.remove('active-link');
                     // }
                     // Note: Removing here might cause brief moments with no active link.
                     // Keeping active until the next one activates often feels smoother.
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));
        console.log("Intersection Observer for nav links initialized.");
    } else {
         console.log("Sections or Nav Links not found for Intersection Observer.");
    }


    // --- Projects Carousel (Ensure robustness) ---
    const track = document.querySelector('.carousel-track');
    const cards = track ? Array.from(track.children) : [];
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let cardWidth = 0;
    let visibleCards = 1;
    let currentIndex = 0;
    let carouselContainer = document.querySelector('.carousel-container'); // Added

    function calculateCarousel() {
        if (cards.length > 0 && track && carouselContainer) {
            const cardStyle = window.getComputedStyle(cards[0]);
            const cardMarginRight = parseFloat(cardStyle.marginRight) || 0; // Handle potential NaN
            cardWidth = cards[0].offsetWidth + cardMarginRight;

             const containerWidth = carouselContainer.offsetWidth; // Use container for calculation
             // Adjust calculation slightly to better handle partial cards if desired,
             // or keep floor for whole cards only.
            visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
            // Ensure current index is valid after resize
            const maxIndex = Math.max(0, cards.length - visibleCards);
            currentIndex = Math.min(currentIndex, maxIndex);

            console.log(`Recalculated: cardWidth=${cardWidth}, visible=${visibleCards}, maxIndex=${maxIndex}, currentIndex=${currentIndex}`);

        }
    }

    function updateCarouselUI() {
        if (track && cards.length > 0) {
            const maxIndex = Math.max(0, cards.length - visibleCards);
             // Adjust index before transform
             currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

            if (prevButton) prevButton.disabled = currentIndex === 0;
            if (nextButton) nextButton.disabled = currentIndex >= maxIndex;
             console.log(`UI Updated: Translating to -${currentIndex * cardWidth}px, prevDisabled=${prevButton?.disabled}, nextDisabled=${nextButton?.disabled}`);
        }
    }

    if (track && cards.length > 0 && nextButton && prevButton && carouselContainer) {
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

        // Recalculate on resize (with debounce/throttle if performance is an issue later)
         let resizeTimeout;
        window.addEventListener('resize', () => {
             clearTimeout(resizeTimeout);
             resizeTimeout = setTimeout(() => {
                 console.log("Resizing carousel...");
                calculateCarousel();
                updateCarouselUI();
            }, 250); // Wait 250ms after last resize event
        });


        // Initial calculation & update
        calculateCarousel(); // Calculate initial state
        updateCarouselUI(); // Update UI based on calculation

        console.log("Projects carousel initialized with resize handling.");

    } else {
         console.log("Carousel elements missing or empty, initialization skipped.");
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            let isValid = true;

            // Reset previous errors if any visually indicated
            // (Example: remove error classes if added)
            nameInput?.classList.remove('input-error');
            emailInput?.classList.remove('input-error');
            messageInput?.classList.remove('input-error');

            if (name === '') {
                 alert('Please enter your name.');
                 nameInput?.classList.add('input-error'); // Optional visual cue
                 isValid = false;
            }
             if (email === '') {
                 alert('Please enter your email address.');
                 emailInput?.classList.add('input-error');
                 isValid = false;
             } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Please enter a valid email address.');
                 emailInput?.classList.add('input-error');
                 isValid = false;
             }
             if (message === '') {
                alert('Please enter a message.');
                messageInput?.classList.add('input-error');
                isValid = false;
            }


            if (isValid) {
                // Placeholder for actual submission
                console.log('Form data ready for submission:', { name, email, message });
                alert(`Thank you, ${name}! Your message has been submitted (placeholder response).`);
                contactForm.reset();
            }
        });
        console.log("Contact form enhanced validation script loaded.");
    }


    // --- Dynamic Footer Year ---
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // --- Final Log ---
    console.log("Main script loaded and initialized.");

}); // End DOMContentLoaded
