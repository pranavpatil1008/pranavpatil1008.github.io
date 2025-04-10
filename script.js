// --- Navigation (Prompt #1 / #12) ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links & close mobile menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Check if it's an internal link
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                 // Calculate offset position slightly below the fixed navbar
                 const navBarHeight = document.querySelector('.navbar').offsetHeight;
                 const elementPosition = targetElement.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - navBarHeight - 10; // 10px buffer

                 window.scrollTo({
                     top: offsetPosition,
                     behavior: 'smooth'
                 });


               // Close mobile menu after clicking a link
               if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        }
         // Allow default behavior for external links or non-hash links
    });
});

// --- Projects Carousel (Prompt #7 / #12) ---
const track = document.querySelector('.carousel-track');
const cards = track ? Array.from(track.children) : []; // Handle case where carousel might not exist
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
let cardWidth = 0;
let visibleCards = 1; // Default
let currentIndex = 0;


function calculateCarousel() {
    if (cards.length > 0) {
        // Get width of the first card + margin (assuming all are same width)
        const cardStyle = window.getComputedStyle(cards[0]);
        const cardMarginRight = parseFloat(cardStyle.marginRight);
        cardWidth = cards[0].offsetWidth + cardMarginRight; // Width + right margin

        // Calculate how many cards are visible
         const carouselWidth = track.parentElement.offsetWidth;
        visibleCards = Math.max(1, Math.floor(carouselWidth / cardWidth)); // Ensure at least 1 is visible
    }
}

function updateCarousel() {
     if (track) {
         // Calculate the maximum index based on visible cards
         const maxIndex = Math.max(0, cards.length - visibleCards);
         // Ensure currentIndex does not exceed maxIndex
         currentIndex = Math.min(currentIndex, maxIndex);

        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

         // Disable/Enable buttons based on position
         prevButton.disabled = currentIndex === 0;
         nextButton.disabled = currentIndex >= maxIndex;

     }
}

// Add listeners if buttons exist
if (nextButton && prevButton && track) {
    nextButton.addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - visibleCards);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initial calculation and update on load & resize
    calculateCarousel();
    updateCarousel(); // Update on initial load
    window.addEventListener('resize', () => { // Recalculate on resize
        calculateCarousel();
        updateCarousel();
    });

    console.log("Projects carousel initialized.");
} else {
     console.log("Carousel elements not found.");
}


// --- Contact Form Validation (Prompt #11 / #12) ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Basic Email Regex Validation
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // --- Placeholder for actual submission logic ---
        // You would typically send the data to a server or email service here
        // For example using fetch():
        // fetch('/your-api-endpoint', { method: 'POST', body: JSON.stringify({ name, email, message }) })
        //   .then(response => response.json())
        //   .then(data => { alert('Success!'); contactForm.reset(); })
        //   .catch(error => alert('Error submitting form.'));

        // Placeholder response:
        alert(`Thank you, ${name}! Your message has been submitted (placeholder response).`);
        contactForm.reset(); // Clear form
    });
    console.log("Contact form validation script loaded.");
} else {
     console.log("Contact form element not found.");
}


// Placeholder logs for future enhancements
console.log("Dynamic website script loaded.");
console.log("Placeholder: Check for CMS integration needs.");

// --- Potential future JS ---
// - Add specific JS for Tools/Resources section if interactive elements are added.
// - Implement bio PDF download logic.
// - Add popups or expansions for project details.
// - Add skill proficiency level indicators/visualizations.
