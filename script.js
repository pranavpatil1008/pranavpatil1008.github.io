// Wrap everything in a DOMContentLoaded listener to ensure HTML is ready
document.addEventListener('DOMContentLoaded', () => {

    // --- Cache DOM Elements ---
    // Select elements from the DOM once and store them in variables for efficiency.
    const header = document.querySelector('header'); // For scroll effects
    const navbar = document.querySelector('.navbar'); // For height calculations (e.g., scroll offset)
    const hamburger = document.getElementById('hamburger-btn'); // Mobile menu toggle button (using ID for specificity)
    const navLinksContainer = document.getElementById('nav-links'); // Mobile menu container (using ID)
    const navLinks = document.querySelectorAll('#nav-links a'); // Individual nav links within the container
    const sections = document.querySelectorAll('main .section'); // All main content sections for scroll spying
    const footerYear = document.getElementById('year'); // Span in the footer for the dynamic year

    // --- Navbar & Mobile Menu Logic ---
    // Check if both the hamburger button and the nav links container exist
    if (hamburger && navLinksContainer) {
        // Add a click event listener to the hamburger button
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation links container to show/hide it
            const isActive = navLinksContainer.classList.toggle('active');
            // Toggle the ARIA 'aria-expanded' attribute for accessibility, indicating menu state
            hamburger.setAttribute('aria-expanded', isActive);
            // Optional: Prevent body scrolling when the mobile menu is open
            // document.body.style.overflow = isActive ? 'hidden' : '';
            console.log(`Mobile menu toggled. Active: ${isActive}`);
        });
    } else {
        console.warn("Hamburger button or nav links container not found.");
    }

    // Close mobile menu if user clicks outside of it
    document.addEventListener('click', (event) => {
        // Check if the nav links container exists, is active, and the click was outside both the container and the hamburger
        if (navLinksContainer && navLinksContainer.classList.contains('active') &&
            !navLinksContainer.contains(event.target) && !hamburger.contains(event.target)) {
            // Remove the 'active' class to hide the menu
            navLinksContainer.classList.remove('active');
            // Update the ARIA attribute on the hamburger button
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
            // Optional: Re-enable body scrolling if it was disabled
            // document.body.style.overflow = '';
            console.log("Closed mobile menu due to outside click.");
        }
    });


    // --- Navbar Style Change on Scroll ---
    const scrollThreshold = 50; // Number of pixels scrolled down before applying the 'scrolled' class
    if (header) {
        // Function to handle adding/removing the 'scrolled' class based on scroll position
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled'); // Add class if scrolled past threshold
            } else {
                header.classList.remove('scrolled'); // Remove class if near the top
            }
        };
        // Run the function once on load in case the page is loaded already scrolled down
        handleScroll();
        // Add the scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
        console.log("Navbar scroll effect initialized.");
    } else {
        console.warn("Header element not found for scroll effect.");
    }

    // --- Smooth Scrolling for Nav Links & Mobile Menu Close ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Check if the link's href starts with '#' (indicating an internal anchor link)
            if (href && href.startsWith('#')) {
                e.preventDefault(); // Prevent the default browser jump behavior
                const targetId = href.substring(1); // Get the ID of the target section (remove '#')
                const targetElement = document.getElementById(targetId); // Find the target element

                if (targetElement) {
                    // Calculate the height of the navbar (or use a fallback value) to offset the scroll position
                    const navBarHeight = navbar ? navbar.offsetHeight : 70;
                    // Get the position of the target element relative to the viewport
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    // Calculate the final scroll position, adjusting for the navbar height and adding a small buffer
                    const offsetPosition = elementPosition + window.pageYOffset - navBarHeight - 10;

                    // Perform the smooth scroll animation
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    console.log(`Smooth scrolling to: ${targetId}`);

                    // Close the mobile menu if it's open after clicking a link
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
                        // Optional: Re-enable body scrolling
                        // document.body.style.overflow = '';
                        console.log("Closed mobile menu after nav link click.");
                    }
                } else {
                    console.warn(`Target element for smooth scroll not found: #${targetId}`);
                }
            }
            // If it's not an anchor link (e.g., external), the default browser behavior applies
        });
    });

    // --- Active Nav Link Highlighting on Scroll (Scroll Spying) ---
    // Check if sections and nav links exist for the observer
    if (sections.length > 0 && navLinks.length > 0 && navLinksContainer) {
        // Intersection Observer options
        const observerOptions = {
            root: null, // Observe intersections relative to the viewport
            // Adjust rootMargin: top margin is negative navbar height to trigger when section top reaches below navbar.
            // Bottom margin is negative percentage of viewport height to deactivate when the section center scrolls past the bottom part of the screen.
            rootMargin: `-${navbar ? navbar.offsetHeight + 10 : 80}px 0px -40% 0px`, // Added 10px buffer to top margin
            threshold: 0 // Trigger callback as soon as even 1 pixel is visible/hidden based on rootMargin
        };

        // Callback function for the Intersection Observer
        const observerCallback = (entries) => {
            let latestIntersectingEntry = null;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Keep track of the latest section that started intersecting
                    latestIntersectingEntry = entry;
                }
            });

            // If there was an intersecting entry in this batch of observations
            if (latestIntersectingEntry) {
                 const id = latestIntersectingEntry.target.getAttribute('id');
                 const correspondingLink = navLinksContainer.querySelector(`a[href="#${id}"]`);

                // Remove 'active-link' from all links first
                navLinks.forEach(link => link.classList.remove('active-link'));

                // Add 'active-link' to the corresponding link
                if (correspondingLink) {
                    correspondingLink.classList.add('active-link');
                    // console.log(`Activating link for: ${id}`);
                }
            } else {
                // Optional: If no sections are actively intersecting based on the margins (e.g., scrolled past all sections),
                // you might want to remove all active classes. However, the current logic ensures the *last* activated one stays active until a new one intersects.
                // If you want to clear all when *nothing* is intersecting according to the margins:
                 // navLinks.forEach(link => link.classList.remove('active-link'));
            }
        };


        // Create and start the observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section)); // Observe each section
        console.log("Intersection Observer for nav links initialized.");
    } else {
        console.warn("Sections, Nav Links Container, or Nav Links missing for Intersection Observer setup.");
    }


    // --- Projects Carousel Logic ---
    const carouselContainer = document.querySelector('.carousel-container');
    const track = document.getElementById('project-carousel-track'); // Use ID for track
    const nextButton = document.getElementById('carousel-btn-next'); // Use ID for next button
    const prevButton = document.getElementById('carousel-btn-prev'); // Use ID for prev button
    let cards = track ? Array.from(track.children) : []; // Get carousel items
    let cardWidth = 0; // Width of a single card including margin
    let visibleCards = 1; // How many cards are visible at once
    let currentIndex = 0; // Index of the first visible card
    let isCarouselInitialized = false; // Flag to prevent multiple initializations

    // Function to calculate card width and number of visible cards
    function calculateCarouselMetrics() {
        if (!track || cards.length === 0 || !carouselContainer) return; // Exit if elements are missing

        // Ensure cards are updated if dynamically added/removed (though not expected here)
        cards = Array.from(track.children);
        if (cards.length === 0) return; // Exit if no cards found

        const cardStyle = window.getComputedStyle(cards[0]);
        const cardMarginRight = parseFloat(cardStyle.marginRight) || 0;
        // Use offsetWidth for reliable width including padding/border
        cardWidth = cards[0].offsetWidth + cardMarginRight;

        const containerWidth = carouselContainer.offsetWidth;
        // Calculate how many full cards fit in the container
        visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
        console.log(`Carousel metrics: cardWidth=${cardWidth}, visibleCards=${visibleCards}, containerWidth=${containerWidth}`);
    }

    // Function to update the carousel's position and button states
    function updateCarouselUI() {
        if (!track || cards.length === 0 || !prevButton || !nextButton || cardWidth === 0) return; // Exit if elements missing or width not calculated

        const maxIndex = Math.max(0, cards.length - visibleCards);
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex)); // Ensure index is within bounds

        // Apply the translation to move the track
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        track.style.transition = 'transform 0.5s ease-in-out'; // Add smooth transition

        // Update button disabled state and visual style
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;

        prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
        nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
        // console.log(`Carousel UI updated: currentIndex=${currentIndex}, maxIndex=${maxIndex}`);
    }

    // Function to initialize the carousel event listeners and state
    function initializeCarousel() {
        // Check if already initialized or essential elements are missing
        if (isCarouselInitialized || !track || cards.length === 0 || !nextButton || !prevButton) {
            if (!isCarouselInitialized) console.warn("Carousel elements missing or empty, initialization skipped.");
            return;
        }

        console.log("Initializing Projects carousel...");

        // Event listener for the next button
        nextButton.addEventListener('click', () => {
            const maxIndex = Math.max(0, cards.length - visibleCards);
            if (currentIndex < maxIndex) {
                currentIndex++; // Move to the next set of cards
                updateCarouselUI();
            }
        });

        // Event listener for the previous button
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--; // Move to the previous set of cards
                updateCarouselUI();
            }
        });

        // Recalculate metrics on window resize (using debounce to limit calls)
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout); // Clear previous timeout
            resizeTimeout = setTimeout(() => {
                console.log("Recalculating carousel metrics on resize...");
                calculateCarouselMetrics(); // Recalculate dimensions
                updateCarouselUI(); // Update UI based on new dimensions
            }, 250); // Debounce delay in milliseconds
        });

        // Initial setup
        calculateCarouselMetrics(); // Calculate initial dimensions
        updateCarouselUI(); // Set initial position and button states
        isCarouselInitialized = true; // Mark as initialized
        console.log("Projects carousel initialized successfully.");
    }

    initializeCarousel(); // Attempt to initialize the carousel on page load

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true; // Flag to track overall form validity

            // --- Helper function to show errors (more robust than alert) ---
            function showError(inputElement, message) {
                inputElement.classList.add('input-error'); // Add error class for styling
                // Find or create an error message element
                let errorSpan = inputElement.parentNode.querySelector('.error-message');
                if (!errorSpan) {
                    errorSpan = document.createElement('span');
                    errorSpan.className = 'error-message'; // Class for styling the error text
                    inputElement.parentNode.appendChild(errorSpan);
                }
                errorSpan.textContent = message; // Set the error message text
                isValid = false; // Mark form as invalid
            }

            // --- Helper function to clear errors ---
            function clearError(inputElement) {
                 inputElement.classList.remove('input-error');
                 const errorSpan = inputElement.parentNode.querySelector('.error-message');
                 if (errorSpan) errorSpan.textContent = ''; // Clear message text
            }

            // --- Clear previous errors ---
            [nameInput, emailInput, messageInput].forEach(input => {
                if (input) clearError(input);
            });

            // --- Validate Name ---
            if (!nameInput || nameInput.value.trim() === '') {
                showError(nameInput, 'Please enter your name.');
            }

            // --- Validate Email ---
            if (!emailInput || emailInput.value.trim() === '') {
                showError(emailInput, 'Please enter your email address.');
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())) {
                // Basic regex for email format validation
                showError(emailInput, 'Please enter a valid email address.');
            }

            // --- Validate Message ---
            if (!messageInput || messageInput.value.trim() === '') {
                showError(messageInput, 'Please enter a message.');
            }

            // --- Submit if Valid ---
            if (isValid) {
                console.log('Form is valid. Simulating submission...');
                // Placeholder for actual form submission (e.g., using Fetch API to send data)
                console.log('Form data:', {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim()
                });

                // Provide user feedback (replace alert with a more integrated message if possible)
                alert(`Thank you, ${nameInput.value.trim()}! Your message has been received (simulation).`);

                contactForm.reset(); // Clear the form fields
                // Optionally clear any lingering error states although reset usually handles values
                 [nameInput, emailInput, messageInput].forEach(input => {
                    if (input) clearError(input);
                 });
            } else {
                 console.log('Form validation failed.');
            }
        });
        console.log("Contact form validation script initialized.");
    } else {
        console.warn("Contact form not found.");
    }


    // --- Dynamic Footer Year ---
    // Update the year in the footer automatically
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear(); // Get the current year
    } else {
        console.warn("Footer year element not found.");
    }

    // --- Final Log ---
    console.log("Main script execution complete. DOM is ready.");

}); // End DOMContentLoaded listener
