/* ==========================================================================
   Table of Contents
   ==========================================================================
   1. Global Resets, Variables, and Base Styles
   2. Accessibility Styles (Skip Link, Focus)
   3. Layout Helpers (Containers)
   4. Base Element Styling (Headings, Links, Lists, Buttons)
   5. Utility Classes
   6. Header & Navbar (#site-header)
   7. Home Section (#home)
   8. About Section (#about)
   9. Education Section (#education)
  10. Experience Section (#experience)
  11. Skills Section (#skills)
  12. Projects Section (#projects)
  13. Leadership Section (#leadership)
  14. Testimonials Section (#testimonials)
  15. Blog Section (#blog)
  16. Tools/Resources Section (#tools)
  17. Contact Section (#contact)
  18. Footer (#site-footer)
  19. Utility Elements (Back to Top)
  20. Animations & Keyframes (Optional)
  21. Responsive Design Overrides
   ========================================================================== */


/* ==========================================================================
   1. Global Resets, Variables, and Base Styles
   ========================================================================== */

/* CSS Variables (Custom Properties) */
:root {
    /* Color Palette */
    --primary-dark: #1e3a8a;    /* Navy Blue */
    --primary-medium: #0d9488;   /* Teal */
    --primary-light: #ccfbf1;   /* Very Light Teal (for backgrounds/accents) */
    --accent: #f97316;         /* Orange */
    --accent-dark: #ea580c;     /* Darker Orange */
    --accent-light: #ffedd5;    /* Light Orange (for backgrounds/accents) */
    --light: #ffffff;          /* White */
    --neutral-lightest: #f8f9fa; /* Very Light Grey */
    --neutral-light: #e9ecef;    /* Light Grey */
    --neutral-medium: #dee2e6;   /* Medium Grey (borders) */
    --neutral-text-light: #adb5bd; /* Lighter grey text */
    --neutral-text-dark: #495057;  /* Dark Grey (standard text) */
    --neutral-dark: #212529;    /* Very Dark Grey (headings) */
    --text-on-dark: #e9ecef;    /* Standard text on dark backgrounds */
    --text-on-dark-muted: #ced4da; /* Muted text on dark backgrounds */
    --text-on-medium: #f0fdfa;  /* Standard text on medium (teal) backgrounds */
    --text-on-medium-muted: #a3f7eb;/* Muted text on medium backgrounds */
    --error: #dc3545;          /* Red for errors */
    --success: #198754;        /* Green for success */
    --warning: #ffc107;        /* Yellow for warnings */

    /* Backgrounds for Alternating Sections */
    --bg-section-dark: var(--primary-dark);
    --bg-section-medium: var(--primary-medium);

    /* Card Backgrounds on Dark/Medium Sections */
    --card-bg-dark-section: rgba(255, 255, 255, 0.06); /* Slightly more opaque */
    --card-bg-hover-dark-section: rgba(255, 255, 255, 0.12);
    --card-border-dark-section: rgba(255, 255, 255, 0.1);

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-std: 0.3s ease;
    --transition-med: 0.5s ease;
    --transition-slow: 0.7s ease;

    /* Spacing */
    --space-xs: 0.25rem;  /* 4px */
    --space-sm: 0.5rem;   /* 8px */
    --space-md: 1rem;     /* 16px */
    --space-lg: 1.5rem;   /* 24px */
    --space-xl: 2rem;     /* 32px */
    --space-2xl: 2.5rem;  /* 40px */
    --space-3xl: 3rem;    /* 48px */
    --space-4xl: 4rem;    /* 64px */
    --space-5xl: 5rem;    /* 80px */

    /* Navigation Height */
    --nav-height-desktop: 70px;
    --nav-height-mobile: 60px;

    /* Section Padding */
    --section-padding-y-desktop: var(--space-5xl);
    --section-padding-y-mobile: var(--space-4xl);

    /* Container Max Widths */
    --container-max-width: 1140px;
    --container-max-width-narrow: 900px;
    --container-max-width-narrower: 700px;

    /* Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;
    --border-radius-full: 9999px; /* For pills/circles */

    /* Font Sizes (Base: 16px) */
    --text-xs: 0.75rem;   /* 12px */
    --text-sm: 0.875rem;  /* 14px */
    --text-base: 1rem;    /* 16px */
    --text-lg: 1.125rem;  /* 18px */
    --text-xl: 1.25rem;   /* 20px */
    --text-2xl: 1.5rem;   /* 24px */
    --text-3xl: 1.875rem; /* 30px */
    --text-4xl: 2.25rem;  /* 36px */
    --text-5xl: 3rem;     /* 48px */
    --text-6xl: 3.75rem;  /* 60px */

    /* Font Weights */
    --font-normal: 400;
    --font-semibold: 600;
    --font-bold: 700;

    /* Line Heights */
    --leading-none: 1;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.7; /* Default body line height */
    --leading-loose: 2;

    /* Z-Indexes */
    --z-back: -10;
    --z-base: 0;
    --z-content: 10;
    --z-sticky: 500;
    --z-overlay: 900;
    --z-nav: 1000;
    --z-modal: 1100;
    --z-tooltip: 1200;
}

/* Basic Reset */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Inherit border settings */
    border-width: 0;
    border-style: solid;
    border-color: var(--neutral-medium); /* Default border color */
}

/* HTML Base Styles */
html {
    scroll-behavior: smooth;
    /* Offset scroll position to account for fixed header */
    scroll-padding-top: var(--nav-height-desktop);
    /* Font Smoothing */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 100%; /* Base font size (usually 16px) */
    line-height: var(--leading-relaxed); /* Default line height */
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
}

/* Body Base Styles */
body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--neutral-lightest); /* Default light background */
    color: var(--neutral-text-dark);
    /* Add padding to prevent content from hiding behind fixed header */
    padding-top: var(--nav-height-desktop);
    font-size: var(--text-base);
    overflow-x: hidden; /* Prevent horizontal scrollbars */
    min-height: 100vh; /* Ensure footer stays down */
    display: flex; /* For footer push */
    flex-direction: column; /* For footer push */
}

/* Ensure main content area takes available space */
main {
    flex-grow: 1;
}

/* Remove default list styles */
ul, ol {
    list-style: none;
}

/* Images responsive by default */
img, svg, video, canvas, audio, iframe, embed, object {
    display: block; /* Remove bottom space */
    max-width: 100%;
    height: auto; /* Maintain aspect ratio */
}


/* ==========================================================================
   2. Accessibility Styles (Skip Link, Focus)
   ========================================================================== */

/* Skip Link Style (for keyboard navigation) */
.skip-link {
    position: absolute;
    top: -50px; /* Hide off-screen */
    left: 0.5rem;
    background: var(--primary-dark);
    color: var(--light);
    padding: var(--space-sm) var(--space-md);
    z-index: var(--z-tooltip); /* Ensure it's above everything when focused */
    transition: top var(--transition-std);
    border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
    font-weight: var(--font-semibold);
    text-decoration: none;
}
.skip-link:focus {
    top: 0; /* Bring into view on focus */
    outline: none; /* Custom focus style below */
    text-decoration: underline;
}

/* Consistent Focus Styles for Interactive Elements */
/* Using :focus-visible for modern browsers to only show focus ring for keyboard navigation */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
[tabindex]:not([tabindex="-1"]):focus-visible {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.3); /* Subtle glow using accent color alpha */
    /* Optional: Apply to specific elements if default outline is preferred elsewhere */
}
/* Fallback for older browsers that don't support :focus-visible */
a:focus,
button:focus,
input:focus,
textarea:focus,
select:focus,
[tabindex]:not([tabindex="-1"]):focus {
    outline: 3px solid var(--accent-dark);
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.3);
}
/* Remove default outline when custom focus is applied */
a:focus, a:focus-visible,
button:focus, button:focus-visible,
input:focus, input:focus-visible,
textarea:focus, textarea:focus-visible,
select:focus, select:focus-visible,
[tabindex]:not([tabindex="-1"]):focus,
[tabindex]:not([tabindex="-1"]):focus-visible {
    outline: none;
}


/* ==========================================================================
   3. Layout Helpers (Containers)
   ========================================================================== */

/* Standard Content Container */
.content-container {
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-md); /* Consistent horizontal padding */
    padding-right: var(--space-md);
}

/* Narrower Content Container */
.content-container-narrow {
    max-width: var(--container-max-width-narrow);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
}

/* Even Narrower Content Container */
.content-container-narrower {
    max-width: var(--container-max-width-narrower);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-md);
    padding-right: var(--space-md);
}


/* ==========================================================================
   4. Base Element Styling (Headings, Links, Lists, Buttons)
   ========================================================================== */

/* General Link Styling */
a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition-std), text-decoration-color var(--transition-std);
    text-decoration-color: transparent; /* Start underline transparent */
}
a:hover {
    color: var(--accent-dark);
    text-decoration: underline;
    text-decoration-color: var(--accent-dark); /* Make underline visible */
}

/* General Heading Styles */
h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    margin-bottom: var(--space-md); /* Default bottom margin */
    color: var(--neutral-dark); /* Default heading color for light backgrounds */
}
h1 { font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl)); margin-bottom: var(--space-lg); } /* Responsive font size */
h2 { font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl)); margin-bottom: var(--space-xl); } /* Section Headings */
h3 { font-size: clamp(var(--text-xl), 3vw, var(--text-2xl)); margin-bottom: var(--space-lg); } /* Sub-Section Headings */
h4 { font-size: clamp(var(--text-lg), 2.5vw, var(--text-xl)); margin-bottom: var(--space-sm); font-weight: var(--font-semibold); }
h5 { font-size: var(--text-base); margin-bottom: var(--space-xs); font-weight: var(--font-semibold); }
h6 { font-size: var(--text-sm); margin-bottom: var(--space-xs); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.05em; color: var(--neutral-text-dark); }

/* Paragraph Styling */
p {
    margin-bottom: var(--space-md);
    max-width: 75ch; /* Improve readability */
}
/* Lead paragraph style */
p.lead {
    font-size: var(--text-lg);
    color: var(--neutral-text-dark);
}

/* List Styling */
ul, ol {
    margin-bottom: var(--space-md);
    padding-left: var(--space-lg); /* Indentation */
}
li {
    margin-bottom: var(--space-sm);
}
ul {
    list-style: disc; /* Default bullet */
}
ol {
    list-style: decimal; /* Default number */
}
/* Nested lists */
ul ul, ol ol, ul ol, ol ul {
    margin-top: var(--space-sm);
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
}

/* Blockquote Styling */
blockquote {
    border-left: 4px solid var(--accent);
    padding-left: var(--space-lg);
    margin: var(--space-lg) 0;
    font-style: italic;
    color: var(--neutral-text-dark);
}
blockquote p {
    margin-bottom: var(--space-sm);
}
blockquote cite {
    display: block;
    margin-top: var(--space-sm);
    font-style: normal;
    font-weight: var(--font-semibold);
    font-size: var(--text-sm);
    color: var(--neutral-dark);
}

/* Horizontal Rule */
hr {
    border: 0;
    height: 1px;
    background-color: var(--neutral-medium);
    margin: var(--space-xl) 0;
}

/* Code Styling */
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: var(--text-sm);
}
code {
  color: var(--accent-dark);
  background-color: var(--accent-light);
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius-sm);
}
pre {
  background-color: var(--neutral-dark);
  color: var(--text-on-dark);
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  overflow-x: auto;
  line-height: var(--leading-normal);
}
pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
}


/* Base Button Style */
.btn {
    display: inline-block; /* Allow margin/padding */
    padding: var(--space-sm) var(--space-lg); /* Adjust padding */
    font-family: inherit;
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    line-height: var(--leading-normal);
    text-align: center;
    text-decoration: none !important; /* Remove underline */
    white-space: nowrap; /* Prevent wrapping */
    vertical-align: middle;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
    border: 1px solid transparent; /* Base border */
    border-radius: var(--border-radius-full); /* Pill shape */
    transition: color var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
    /* Default Primary Button */
    background-color: var(--accent);
    color: var(--light) !important; /* Ensure text is light */
    box-shadow: var(--shadow-sm);
}
.btn:hover {
    background-color: var(--accent-dark);
    color: var(--light);
    transform: translateY(-2px); /* Subtle lift */
    box-shadow: var(--shadow-md);
}
.btn:active {
    transform: translateY(0px); /* Press effect */
    box-shadow: var(--shadow-inner);
}
.btn:disabled,
.btn.disabled {
    opacity: 0.65;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
}

/* Secondary Button Style */
.btn-secondary {
    background-color: transparent;
    color: var(--accent) !important;
    border-color: var(--accent);
    box-shadow: none;
}
.btn-secondary:hover {
    background-color: var(--accent-light);
    color: var(--accent-dark) !important;
    border-color: var(--accent-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}
.btn-secondary:active {
    background-color: var(--accent);
    color: var(--light) !important;
    border-color: var(--accent);
    transform: translateY(0px);
    box-shadow: var(--shadow-inner);
}
/* Secondary button on dark backgrounds */
.section .btn-secondary {
    color: var(--light) !important;
    border-color: var(--light);
}
.section .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--light) !important;
    border-color: var(--light);
}
.section .btn-secondary:active {
    background-color: rgba(255, 255, 255, 0.2);
}


/* Small Button Style */
.btn-small {
    padding: var(--space-xs) var(--space-md);
    font-size: var(--text-sm);
    border-radius: var(--border-radius-full);
}

/* Button with Icon */
.btn .icon-left {
    margin-right: var(--space-sm);
}
.btn .icon-right {
    margin-left: var(--space-sm);
}


/* ==========================================================================
   5. Utility Classes
   ========================================================================== */

/* Text Alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Font Weights */
.font-normal { font-weight: var(--font-normal); }
.font-semibold { font-weight: var(--font-semibold); }
.font-bold { font-weight: var(--font-bold); }

/* Display */
.d-block { display: block; }
.d-inline-block { display: inline-block; }
.d-inline { display: inline; }
.d-flex { display: flex; }
.d-inline-flex { display: inline-flex; }
.d-grid { display: grid; }
.d-none { display: none; }

/* Add more utility classes as needed (e.g., margin, padding, colors) */


/* ==========================================================================
   6. Header & Navbar (#site-header)
   ========================================================================== */
#site-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: var(--z-nav);
    transition: background-color var(--transition-std), box-shadow var(--transition-std), height var(--transition-std);
    /* Initial state: semi-transparent dark blue */
    background-color: rgba(30, 58, 138, 0.85); /* var(--primary-dark) with alpha */
    backdrop-filter: blur(10px); /* Blur effect */
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    box-shadow: none;
    height: var(--nav-height-desktop);
}

/* Navbar container */
#site-header .navbar {
    height: 100%; /* Take full height of header */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 var(--space-xl); Inherited from content-container */
}

/* Style when scrolled (added via JS) */
#site-header.scrolled {
    background-color: var(--primary-dark); /* Solid background on scroll */
    box-shadow: var(--shadow-md);
    backdrop-filter: none; /* Remove blur when solid */
    -webkit-backdrop-filter: none;
    /* Optional: Slightly shrink header on scroll */
    /* height: calc(var(--nav-height-desktop) - 10px); */
}

/* Brand/Logo Styling */
.nav-brand a {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    color: var(--light);
    text-decoration: none;
    transition: color var(--transition-std), opacity var(--transition-std);
}
.nav-brand a:hover {
    color: var(--light); /* Keep brand color consistent */
    text-decoration: none;
    opacity: 0.85;
}

/* Navigation Links List (Desktop) */
.nav-links {
    list-style: none;
    display: flex;
    gap: var(--space-xl); /* Spacing between links */
    margin: 0;
    padding: 0;
}

/* Individual Navigation Link */
.nav-links li a {
    color: var(--light);
    text-decoration: none;
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    padding: var(--space-sm) 0; /* Vertical padding for click area */
    position: relative; /* For the underline pseudo-element */
    transition: color var(--transition-std);
    display: flex; /* Align icon and text */
    align-items: center;
    gap: var(--space-xs);
}
/* Underline effect */
.nav-links li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -8px; /* Position below text */
    left: 50%; /* Start from center */
    transform: translateX(-50%);
    background-color: var(--accent);
    transition: width var(--transition-std) ease-in-out;
    border-radius: var(--border-radius-full);
}
.nav-links li a:hover,
.nav-links li a:focus-visible { /* Apply hover style also on focus */
    color: var(--accent);
}
/* Highlight for Active Link (added via JS) */
.nav-links li a.active-link {
    color: var(--accent);
    /* font-weight: var(--font-bold); */ /* Optional: Make active link bolder */
}
/* Keep underline visible for active link and on hover/focus */
.nav-links li a.active-link::after,
.nav-links li a:hover::after,
.nav-links li a:focus-visible::after {
    width: 100%; /* Expand underline fully */
}

/* Navigation Icons */
.nav-icon {
    font-size: 0.9em; /* Slightly smaller than text */
    /* margin-right: var(--space-xs); */ /* Replaced by gap */
}

/* Hamburger Button (Mobile) */
.hamburger {
    display: none; /* Hidden by default */
    background: none;
    border: none;
    font-size: var(--text-2xl);
    cursor: pointer;
    color: var(--light);
    padding: var(--space-sm);
    z-index: var(--z-modal); /* Ensure above mobile menu overlay */
    line-height: 1; /* Prevent extra spacing */
    transition: color var(--transition-std), transform var(--transition-std);
}
.hamburger:hover {
    color: var(--accent);
}
.hamburger[aria-expanded="true"] {
    /* Optional: Transform into an 'X' */
    /* transform: rotate(90deg); */
}


/* ==========================================================================
   7. Home Section (#home)
   ========================================================================== */
.home-section {
    text-align: center;
    display: flex; /* Use flexbox for vertical centering */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - var(--nav-height-desktop)); /* Full viewport height minus nav */
    padding-top: var(--space-2xl); /* Extra padding */
    padding-bottom: var(--space-4xl); /* Extra padding below content */
    position: relative; /* For scroll indicator positioning */
    /* Example Gradient Background */
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(13, 148, 136, 0.85)), /* Dark Blue to Teal */
                url('https://placehold.co/1920x1080/cccccc/969696?text=Background+Image+Placeholder') center center/cover no-repeat fixed; /* Placeholder Image */
    /* Fallback solid color */
    background-color: var(--bg-section-dark);
    color: var(--light); /* Ensure base text is light */
}
/* Ensure content container within home section inherits text color */
.home-section .home-content {
    color: inherit;
    position: relative; /* Ensure content is above background effects */
    z-index: var(--z-content);
}

/* Specific styling for home heading */
.home-section #home-heading {
    color: var(--light);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Subtle text shadow */
}
.headline-line {
    display: block; /* Each part on its own line */
}
.headline-line-emphasis {
    color: var(--accent); /* Highlight part of the headline */
    font-weight: var(--font-bold);
}

/* Specific styling for home paragraph */
.home-section .home-content p {
    font-size: clamp(var(--text-base), 2.5vw, var(--text-lg)); /* Responsive paragraph */
    color: var(--text-on-dark); /* Use standard light text */
    max-width: 65ch; /* Limit line length */
    margin-bottom: var(--space-2xl);
}
.home-section .home-content strong {
    color: var(--accent-light); /* Highlight keywords */
    font-weight: var(--font-semibold);
}

/* Home section buttons container */
.home-section .buttons {
    display: flex;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
    justify-content: center;
    flex-wrap: wrap; /* Allow buttons to wrap on small screens */
}

/* Scroll Down Indicator */
.scroll-down-indicator {
    position: absolute;
    bottom: var(--space-xl);
    left: 50%;
    transform: translateX(-50%);
    color: var(--light);
    font-size: var(--text-2xl);
    opacity: 0.7;
    transition: opacity var(--transition-std), transform var(--transition-std);
    animation: bounce 2s infinite ease-in-out; /* Add bounce animation */
}
.scroll-down-indicator:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(5px); /* Slight move on hover */
    animation-play-state: paused; /* Pause animation on hover */
}


/* ==========================================================================
   8. About Section (#about)
   ========================================================================== */
.about-section {
    background-color: var(--bg-section-medium);
    color: var(--text-on-medium);
}
.about-section h2, .about-section h3 {
    color: var(--light);
}
.about-section p, .about-section li {
    color: var(--text-on-medium);
}
.about-section strong {
    color: var(--light);
}
.about-section a {
    color: var(--accent-light); /* Lighter accent for links on teal */
}
.about-section a:hover {
    color: var(--light);
}

/* Grid Layout for About Section */
.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr; /* Text takes more space */
    gap: var(--space-3xl);
    align-items: flex-start; /* Align items to the top */
    margin-top: var(--space-xl);
}

/* About Text Column */
.about-text h3 {
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
    border-bottom: 2px solid var(--accent-light);
    padding-bottom: var(--space-xs);
    display: inline-block; /* Keep border tight */
}
.about-text h3:first-of-type {
    margin-top: 0;
}
.about-text ul {
    list-style: inside;
    padding-left: var(--space-sm); /* Less indent for values */
}
.about-text li {
    margin-bottom: var(--space-xs);
}
.about-text strong {
    font-weight: var(--font-semibold);
}

/* About Image Column */
.about-image {
    text-align: center; /* Center image if needed */
}
.profile-picture {
    border-radius: var(--border-radius-lg);
    border: 4px solid var(--light);
    box-shadow: var(--shadow-lg);
    max-width: 350px; /* Limit image size */
    margin: 0 auto; /* Center image */
}

/* About Section Buttons */
.about-buttons {
    margin-top: var(--space-2xl);
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
}
/* Use secondary style for buttons here */
.about-buttons .btn {
    background-color: var(--accent);
    color: var(--light) !important;
    border-color: var(--accent);
}
.about-buttons .btn:hover {
    background-color: var(--accent-dark);
    border-color: var(--accent-dark);
}
.about-buttons .btn-secondary {
    background-color: transparent;
    color: var(--light) !important;
    border-color: var(--light);
}
.about-buttons .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--light);
}


/* ==========================================================================
   9. Education Section (#education)
   ========================================================================== */
.education-section {
    background-color: var(--bg-section-dark);
    color: var(--text-on-dark);
}
.education-section h2, .education-section h3, .education-section h4 {
    color: var(--light);
}
.education-section p, .education-section li {
    color: var(--text-on-dark);
}
.education-section strong {
    color: var(--light);
}
.education-section a {
    color: var(--accent);
}
.education-section a:hover {
    color: var(--accent-light);
}

/* Education Grid Layout */
.education-grid {
    display: grid;
    gap: var(--space-2xl);
    /* Define columns later in responsive section if needed */
}

/* Individual Degree Article */
.degree {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-std), box-shadow var(--transition-std), background-color var(--transition-std);
}
.degree:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    background: var(--card-bg-hover-dark-section);
}

/* Degree Header Layout */
.degree-header {
    display: flex;
    align-items: flex-start; /* Align logo and text top */
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
}
.university-logo {
    width: 60px; /* Fixed size */
    height: 60px;
    border-radius: var(--border-radius-md);
    object-fit: contain; /* Ensure logo fits well */
    flex-shrink: 0; /* Prevent logo from shrinking */
    background-color: var(--light); /* Add background if logo is transparent */
    padding: var(--space-xs);
}
.degree-header h3 {
    margin-bottom: var(--space-xs);
    font-size: var(--text-xl);
}
.degree-header p {
    margin-bottom: var(--space-xs);
    font-size: var(--text-sm);
    color: var(--text-on-dark-muted);
}
.degree-header p strong {
    color: var(--text-on-dark);
    font-weight: var(--font-semibold);
}
.degree-date {
    font-style: italic;
    color: var(--accent-light);
}

/* Coursework Styling */
.degree h4 {
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
    font-size: var(--text-lg);
    border-bottom: 1px solid var(--accent);
    padding-bottom: var(--space-xs);
    display: inline-block;
}
.degree ul {
    list-style: none; /* Remove default bullets */
    padding-left: 0;
}
.degree > ul > li { /* Target top-level list items (courses) */
    margin-bottom: var(--space-lg);
    padding-left: var(--space-md);
    border-left: 3px solid var(--accent);
}
.degree > ul > li > strong { /* Course title */
    font-weight: var(--font-semibold);
    color: var(--light);
    display: block;
    margin-bottom: var(--space-xs);
}
.degree ul ul { /* Nested list (course details) */
    list-style: circle; /* Different bullet for details */
    padding-left: var(--space-lg);
    margin-top: var(--space-sm);
    margin-bottom: var(--space-sm);
}
.degree ul ul li {
    font-size: var(--text-sm);
    color: var(--text-on-dark-muted);
    margin-bottom: var(--space-xs);
}
.degree ul ul li strong { /* Highlight tools */
    color: var(--accent-light);
    font-weight: var(--font-semibold);
}

/* Certifications Section */
.certifications-section {
    margin-top: var(--space-3xl);
}
.subsection-heading { /* Reusable style for subheadings within sections */
    font-size: var(--text-xl);
    color: var(--light);
    margin-bottom: var(--space-lg);
    border-bottom: 2px solid var(--accent);
    padding-bottom: var(--space-sm);
    display: inline-block;
}
.certifications-list {
    list-style: none;
    padding-left: 0;
}
.certifications-list li {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-md);
    padding: var(--space-md);
    margin-bottom: var(--space-md);
}
.certifications-list li strong { /* Cert name */
    display: block;
    color: var(--light);
    font-weight: var(--font-semibold);
    margin-bottom: var(--space-xs);
}
.certifications-list li p { /* Description */
    font-size: var(--text-sm);
    color: var(--text-on-dark-muted);
    margin-bottom: 0;
}


/* ==========================================================================
   10. Experience Section (#experience)
   ========================================================================== */
.experience-section {
    background-color: var(--bg-section-medium);
    color: var(--text-on-medium);
}
.experience-section h2, .experience-section h3, .experience-section h4, .experience-section h5 {
    color: var(--light);
}
.experience-section p, .experience-section li {
    color: var(--text-on-medium);
}
.experience-section strong {
    color: var(--light);
}
.experience-section a {
    color: var(--accent-light);
}
.experience-section a:hover {
    color: var(--light);
}

/* Timeline Container */
.timeline {
    position: relative;
    padding-left: var(--space-3xl); /* Space for line and dots */
    margin-top: var(--space-xl);
    /* The vertical line */
    border-left: 4px solid var(--accent);
}

/* Individual Timeline Item */
.timeline-item {
    position: relative; /* For pseudo-element positioning */
    background: var(--card-bg-dark-section); /* Using dark card style on medium bg */
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-xl);
    margin-bottom: var(--space-2xl);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-std), box-shadow var(--transition-std), background-color var(--transition-std);
}
.timeline-item:hover {
    transform: translateX(10px); /* Slight shift right */
    box-shadow: var(--shadow-lg);
    background: var(--card-bg-hover-dark-section);
}

/* Timeline Dot */
.timeline-item::before {
    content: '';
    position: absolute;
    /* Position Calculation: -(padding-left) - (border-left / 2) - (dot-width / 2) */
    /* padding-left = 3rem (48px), border = 4px, dot = 1.2rem (19.2px) */
    /* left: calc(-3rem - 2px - 0.6rem); */
    left: -59px; /* Approximate calculation */
    top: calc(var(--space-xl) + 10px); /* Align with top of content padding + adjust */
    width: 1.2rem;
    height: 1.2rem;
    border: 4px solid var(--primary-medium); /* Match section background */
    background-color: var(--accent);
    border-radius: 50%;
    z-index: var(--z-content);
    transition: transform var(--transition-std);
}
.timeline-item:hover::before {
    transform: scale(1.1); /* Slightly enlarge dot on hover */
}

/* Experience Header Layout */
.experience-header {
    display: flex;
    align-items: flex-start; /* Align logo and text top */
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
}
.company-logo {
    width: 80px;
    height: auto; /* Maintain aspect ratio */
    max-height: 50px; /* Limit height */
    border-radius: var(--border-radius-sm);
    object-fit: contain;
    flex-shrink: 0;
    /* Optional background for transparent logos */
    /* background-color: var(--light); */
    /* padding: var(--space-xs); */
}
.experience-header h3 { /* Job Title */
    margin-bottom: var(--space-xs);
    font-size: var(--text-xl);
}
.company-name { /* Company Name */
    font-weight: var(--font-semibold);
    color: var(--light);
    margin-bottom: var(--space-xs);
}
.timeline-details { /* Date & Location */
    font-size: var(--text-sm);
    color: var(--text-on-medium-muted);
    margin-bottom: 0;
}
.timeline-details .date,
.timeline-details .location {
    display: inline-flex; /* Align icon and text */
    align-items: center;
    gap: var(--space-xs);
    margin-right: var(--space-md); /* Space between date and location */
}
.timeline-details .icon-left {
    font-size: 0.9em;
}

/* Experience Details Styling */
.timeline-item h4 { /* Responsibilities Heading */
    margin-top: var(--space-lg);
    margin-bottom: var(--space-md);
    font-size: var(--text-lg);
}
.timeline-item ul {
    list-style: disc; /* Use standard bullets */
    padding-left: var(--space-lg);
    margin-bottom: var(--space-md);
}
.timeline-item li {
    margin-bottom: var(--space-sm);
    color: var(--text-on-medium);
    font-size: var(--text-base);
}
.timeline-item li strong { /* Highlight numbers/keywords */
    color: var(--accent-light);
    font-weight: var(--font-semibold);
}

.timeline-item h5 { /* Key Projects Heading */
    margin-top: var(--space-lg);
    margin-bottom: var(--space-sm);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--accent-light);
}
/* Key projects list uses different style */
.timeline-item h5 + ul {
    list-style: none;
    padding-left: 0;
}
.timeline-item h5 + ul li {
    padding-left: var(--space-md);
    border-left: 2px solid var(--accent-light);
    margin-bottom: var(--space-sm);
    font-size: var(--text-sm);
    color: var(--text-on-medium-muted);
}

/* Technologies Used Styling */
.timeline-item h5:last-of-type { /* Target skills heading */
     margin-top: var(--space-lg);
     margin-bottom: var(--space-sm);
}
.skills-used {
    font-size: var(--text-sm);
    color: var(--text-on-medium-muted);
    font-style: italic;
    margin-top: var(--space-sm);
    line-height: var(--leading-normal);
}


/* ==========================================================================
   11. Skills Section (#skills)
   ========================================================================== */
.skills-section {
    background-color: var(--bg-section-dark);
    color: var(--text-on-dark);
}
.skills-section h2, .skills-section h3 {
    color: var(--light);
}
.skills-section p, .skills-section li {
    color: var(--text-on-dark);
}
.skills-section strong {
    color: var(--light);
}
.skills-section a {
    color: var(--accent);
}
.skills-section a:hover {
    color: var(--accent-light);
}

/* Skills Grid Layout */
.skills-grid {
    display: grid;
    /* Responsive grid: 1 column on small, 2 on medium, 3 on large */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}

/* Individual Skill Category Card */
.skill-category {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-std), box-shadow var(--transition-std);
}
.skill-category:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--shadow-lg);
}

/* Skill Category Heading */
.skill-category h3 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-lg);
    border-bottom: 2px solid var(--accent);
    padding-bottom: var(--space-sm);
    display: flex; /* Align icon and text */
    align-items: center;
    gap: var(--space-sm);
}
.skill-category h3 .icon-left {
    font-size: 1.1em; /* Make icon slightly larger */
    color: var(--accent);
}

/* Skill List */
.skill-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.skill-category li {
    display: flex; /* Align icon and text */
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) 0;
    margin-bottom: var(--space-xs);
    border-bottom: 1px dashed var(--card-border-dark-section); /* Subtle separator */
    font-size: var(--text-base);
    transition: background-color var(--transition-fast), padding-left var(--transition-fast);
}
.skill-category li:last-child {
    border-bottom: none;
}
.skill-category li:hover {
    background-color: var(--card-bg-hover-dark-section);
    padding-left: var(--space-sm); /* Indent on hover */
    border-radius: var(--border-radius-sm);
}

/* Skill Icon */
.skill-icon {
    font-size: 1.2em; /* Make icons noticeable */
    color: var(--accent-light); /* Lighter accent color */
    width: 1.5em; /* Fixed width for alignment */
    text-align: center;
    flex-shrink: 0;
}
/* Proficiency text (example) */
.skill-category li span.proficiency {
    font-size: var(--text-xs);
    color: var(--text-on-dark-muted);
    margin-left: auto; /* Push to the right */
    font-style: italic;
}


/* ==========================================================================
   12. Projects Section (#projects)
   ========================================================================== */
.projects-section {
    background-color: var(--bg-section-medium);
    color: var(--text-on-medium);
    overflow: hidden; /* Prevent potential carousel overflow issues */
}
.projects-section h2, .projects-section h3, .projects-section h4 {
    color: var(--light);
}
.projects-section p, .projects-section li {
    color: var(--text-on-medium);
    font-size: var(--text-sm); /* Slightly smaller text in cards */
}
.projects-section strong {
    color: var(--light);
}
.projects-section a {
    color: var(--accent-light);
}
.projects-section a:hover {
    color: var(--light);
}

/* Carousel Container - provides space for buttons */
.carousel-container {
    position: relative;
    padding: 0 var(--space-5xl); /* Generous padding for buttons */
    margin: var(--space-xl) auto 0;
}

/* Carousel - handles overflow */
.carousel {
    width: 100%;
    overflow: hidden;
}

/* Carousel Track - holds the cards */
.carousel-track {
    display: flex;
    transition: transform var(--transition-med) ease-in-out;
    padding-bottom: var(--space-lg); /* Space below cards if needed */
    /* No negative margin needed if cards have margin */
}

/* Individual Project Card */
.project-card {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    margin: 0 var(--space-md); /* Spacing between cards */
    /* Flex properties for sizing */
    flex: 0 0 auto; /* Don't grow, don't shrink, use basis */
    width: calc(33.333% - (var(--space-md) * 2)); /* 3 cards visible, accounting for margin */
    /* min-width: 300px; */ /* Minimum width before wrapping/adjusting */
    display: flex;
    flex-direction: column; /* Stack image, content */
    overflow: hidden; /* Ensure content stays within rounded corners */
    transition: transform var(--transition-std), box-shadow var(--transition-std);
}
.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

/* Project Thumbnail Image */
.project-thumbnail {
    width: 100%;
    height: 200px; /* Fixed height for consistency */
    object-fit: cover; /* Cover the area */
    border-bottom: 1px solid var(--card-border-dark-section);
}

/* Project Card Content Area */
.project-card-content {
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow content to take remaining space */
}
.project-card h3 { /* Project Title */
    font-size: var(--text-lg);
    margin-bottom: var(--space-sm);
}
.project-card h4 { /* Subheadings like Problem, Solution */
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--accent-light);
    margin-top: var(--space-md);
    margin-bottom: var(--space-xs);
}
.project-card ul { /* Feature lists */
    list-style: disc;
    padding-left: var(--space-lg);
    margin-bottom: var(--space-md);
}
.project-card li {
    margin-bottom: var(--space-xs);
}

/* Project Tags */
.project-tags {
    margin-bottom: var(--space-md);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
}
.project-tags span {
    background-color: var(--accent);
    color: var(--light);
    padding: 0.15rem 0.6rem;
    border-radius: var(--border-radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Project Links (Buttons at bottom) */
.project-links {
    margin-top: auto; /* Push to bottom */
    padding-top: var(--space-md); /* Space above buttons */
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
}
/* Use small secondary buttons */
.project-links .btn {
    background-color: transparent;
    color: var(--accent-light) !important;
    border-color: var(--accent-light);
    padding: var(--space-xs) var(--space-md);
    font-size: var(--text-sm);
}
.project-links .btn:hover {
    background-color: rgba(249, 115, 22, 0.1); /* Light accent bg */
    color: var(--light) !important;
    border-color: var(--light);
}


/* Carousel Navigation Buttons */
.carousel-btn {
    background: var(--accent);
    color: var(--light);
    border: none;
    border-radius: 50%;
    width: 50px; /* Larger buttons */
    height: 50px;
    font-size: var(--text-xl);
    line-height: 50px; /* Vertically center icon */
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 50%; /* Center vertically */
    transform: translateY(-50%);
    z-index: var(--z-content);
    opacity: 0.7;
    transition: opacity var(--transition-std), background-color var(--transition-std), transform var(--transition-fast), box-shadow var(--transition-std);
    box-shadow: var(--shadow-md);
}
.carousel-btn:hover {
    opacity: 1;
    background: var(--accent-dark);
    transform: translateY(-50%) scale(1.1);
    box-shadow: var(--shadow-lg);
}
.carousel-btn.prev {
    left: var(--space-md); /* Position inside padding */
}
.carousel-btn.next {
    right: var(--space-md); /* Position inside padding */
}
.carousel-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1); /* Reset scale */
    background: var(--neutral-medium);
    color: var(--neutral-text-dark);
    box-shadow: none;
}


/* ==========================================================================
   13. Leadership Section (#leadership)
   ========================================================================== */
.leadership-section {
    background-color: var(--bg-section-dark);
    color: var(--text-on-dark);
}
.leadership-section h2, .leadership-section h3 {
    color: var(--light);
}
.leadership-section p, .leadership-section li {
    color: var(--text-on-dark);
}
.leadership-section strong {
    color: var(--light);
}
.leadership-section a {
    color: var(--accent);
}
.leadership-section a:hover {
    color: var(--accent-light);
}

/* Leadership List */
.leadership-list {
    list-style: none;
    padding: 0;
    margin-top: var(--space-xl);
}
.leadership-list li {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-std), box-shadow var(--transition-std), background-color var(--transition-std);
}
.leadership-list li:hover {
    transform: translateX(12px) scale(1.01);
    background-color: var(--card-bg-hover-dark-section);
    box-shadow: var(--shadow-lg);
}

/* Leadership Item Heading */
.leadership-list li h3 {
    font-size: var(--text-lg);
    margin-bottom: var(--space-xs);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}
.leadership-list li h3 .icon-left {
    color: var(--accent);
    font-size: 1.1em;
}

/* Organization/Date Line */
.leadership-list li > p:first-of-type { /* Target the line right after h3 */
    font-size: var(--text-sm);
    color: var(--text-on-dark-muted);
    margin-bottom: var(--space-md);
    font-weight: var(--font-semibold);
}
.leadership-list li .degree-date { /* Reusing class */
    font-style: italic;
    color: var(--accent-light);
    margin-left: var(--space-sm);
}

/* Details List within Leadership Item */
.leadership-list li ul {
    list-style: disc;
    padding-left: var(--space-lg);
    margin-top: var(--space-md);
}
.leadership-list li ul li {
    font-size: var(--text-base);
    color: var(--text-on-dark-muted);
    margin-bottom: var(--space-sm);
    background: none; /* Override card background */
    border: none;
    padding: 0;
    box-shadow: none;
}
.leadership-list li ul li:hover {
    transform: none;
    background: none;
}
.leadership-list li ul li strong { /* Highlight impact */
    color: var(--accent-light);
}


/* ==========================================================================
   14. Testimonials Section (#testimonials)
   ========================================================================== */
.testimonials-section {
    background-color: var(--bg-section-medium);
    color: var(--text-on-medium);
    padding-bottom: var(--space-5xl); /* Extra padding for controls */
}
.testimonials-section h2 {
    color: var(--light);
}

/* Testimonial Slider Container */
.testimonial-slider {
    position: relative;
    max-width: var(--container-max-width-narrow);
    margin: var(--space-xl) auto 0;
    text-align: center;
    /* Add overflow hidden if using slide animations */
    /* overflow: hidden; */
}

/* Individual Testimonial Item */
.testimonial-item {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-2xl) var(--space-xl);
    box-shadow: var(--shadow-lg);
    /* For fade effect - manage display/opacity via JS */
    opacity: 0;
    position: absolute; /* Position for fade */
    top: 0; left: 0; right: 0;
    transition: opacity var(--transition-med) ease-in-out;
    z-index: var(--z-base);
}
.testimonial-item.active-testimonial {
    opac
