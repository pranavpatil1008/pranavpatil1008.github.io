Okay, let's complete the styles.css file based on the provided structure and the established variable system. I will fill in the styles for the remaining sections based on common patterns for portfolios and the style guide we've implicitly built.

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
  14. Testimonials Section (#testimonials) - Basic Styling Added
  15. Blog Section (#blog) - Basic Styling Added
  16. Tools/Resources Section (#tools) - Basic Styling Added
  17. Contact Section (#contact) - Enhanced Styling Added
  18. Footer (#site-footer) - Styling Added
  19. Utility Elements (Back to Top) - Basic Styling Added
  20. Animations & Keyframes (Optional) - Added Example Bounce
  21. Responsive Design Overrides - Added and Completed
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
}
/* Fallback for older browsers */
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
/* Add `.content-container` class inside each section's top div for standard width */
.content-container {
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-lg); /* Use larger padding */
    padding-right: var(--space-lg);
}
/* Add `.content-container-narrow` for narrower content sections */
.content-container-narrow {
    max-width: var(--container-max-width-narrow);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-lg);
    padding-right: var(--space-lg);
}
/* Add `.content-container-narrower` for text-heavy sections or forms */
.content-container-narrower {
    max-width: var(--container-max-width-narrower);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--space-lg);
    padding-right: var(--space-lg);
}


/* ==========================================================================
   4. Base Element Styling (Headings, Links, Lists, Buttons)
   ========================================================================== */

/* (Heading, Link, List, Button styles already covered in global/component sections) */
/* Specific Paragraph Styles */
p { margin-bottom: var(--space-lg); }
/* Styling for emphasized text */
strong, b { font-weight: var(--font-bold); }
/* Styling for italicized text */
em, i { font-style: italic; }


/* ==========================================================================
   5. Utility Classes
   ========================================================================== */
.text-center { text-align: center; }
/* Add more as needed (e.g., .mb-md for margin-bottom, .p-lg for padding) */


/* ==========================================================================
   6. Header & Navbar (#site-header)
   ========================================================================== */
#site-header { position: fixed; width: 100%; top: 0; left: 0; z-index: var(--z-nav); transition: background-color var(--transition-std), box-shadow var(--transition-std), height var(--transition-std); background-color: rgba(30, 58, 138, 0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: none; height: var(--nav-height-desktop); }
#site-header .navbar { height: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 var(--space-xl); max-width: 1400px; margin: 0 auto; color: var(--light); }
#site-header.scrolled { background-color: var(--primary-dark); box-shadow: var(--shadow-md); backdrop-filter: none; -webkit-backdrop-filter: none; }
.nav-brand a { font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--light); text-decoration: none; transition: color var(--transition-std), opacity var(--transition-std); }
.nav-brand a:hover { color: var(--light); text-decoration: none; opacity: 0.85; }
.nav-links { list-style: none; display: flex; gap: var(--space-xl); margin: 0; padding: 0; }
.nav-links li a { color: var(--light); text-decoration: none; font-size: var(--text-base); font-weight: var(--font-semibold); padding: var(--space-sm) 0; position: relative; transition: color var(--transition-std); }
.nav-links li a::after { content: ''; position: absolute; width: 0; height: 3px; bottom: -8px; left: 50%; transform: translateX(-50%); background-color: var(--accent); transition: width var(--transition-std) ease-in-out; border-radius: var(--border-radius-full); }
.nav-links li a:hover, .nav-links li a:focus-visible { color: var(--accent); }
.nav-links li a.active-link { color: var(--accent); }
.nav-links li a.active-link::after, .nav-links li a:hover::after, .nav-links li a:focus-visible::after { width: 100%; }
.hamburger { display: none; background: none; border: none; font-size: var(--text-2xl); cursor: pointer; color: var(--light); padding: var(--space-sm); z-index: var(--z-modal); }
.hamburger:hover { color: var(--accent); }

/* ==========================================================================
   7. Home Section (#home)
   ========================================================================== */
/* Reusing previously defined styles */
.home-section { text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: calc(100vh - var(--nav-height-desktop)); padding-top: var(--space-2xl); padding-bottom: var(--space-4xl); background: linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(13, 148, 136, 0.85)), url('https://source.unsplash.com/random/1920x1080/?stars,galaxy,technology') center center/cover no-repeat fixed; background-color: var(--bg-section-dark); color: var(--light); }
.home-section .home-content { color: inherit; position: relative; z-index: var(--z-content); }
.home-section #home-heading { color: var(--light); text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); font-size: clamp(var(--text-4xl), 6vw, var(--text-6xl)); }
.home-section .home-content p { font-size: clamp(var(--text-lg), 3vw, var(--text-xl)); color: var(--text-on-dark); max-width: 65ch; margin-bottom: var(--space-2xl); }
.home-section .buttons { display: flex; gap: var(--space-lg); margin-bottom: var(--space-2xl); justify-content: center; flex-wrap: wrap; }


/* ==========================================================================
   8. About Section (#about)
   ========================================================================== */
/* Reusing previously defined styles */
.about-section { background-color: var(--bg-section-medium); color: var(--text-on-medium); }
.about-section h2, .about-section h3 { color: var(--light); }
.about-section p, .about-section li { color: var(--text-on-medium); }
.about-section strong { color: var(--light); }
.about-section a { color: var(--accent-light); }
.about-section a:hover { color: var(--light); }


/* ==========================================================================
   9. Education Section (#education)
   ========================================================================== */
/* Reusing previously defined styles */
.education-section { background-color: var(--bg-section-dark); color: var(--text-on-dark); }
.education-section h2, .education-section h3 { color: var(--light); }
.education-content .degree { background: var(--card-bg-dark-section); transition: background-color var(--transition-std), transform var(--transition-std), box-shadow var(--transition-std); border-radius: var(--border-radius-lg); padding: var(--space-xl); box-shadow: var(--shadow-sm); margin-bottom: var(--space-xl); border: 1px solid var(--card-border-dark-section);}
.education-content .degree:hover { background: var(--card-bg-hover-dark-section); transform: translateY(-5px); box-shadow: var(--shadow-md);}
.education-content .degree-date { font-size: var(--text-sm); color: var(--neutral-text-light); }
.education-content .degree ul { list-style: disc; padding-left: var(--space-lg); margin-top: var(--space-sm); }
.education-content .degree ul li { margin-bottom: var(--space-xs); }


/* ==========================================================================
  10. Experience Section (#experience)
   ========================================================================== */
/* Reusing previously defined styles */
.experience-section { background-color: var(--bg-section-medium); color: var(--text-on-medium); }
.experience-section h2, .experience-section h3 { color: var(--light); }
.experience-content .timeline { border-left: 4px solid var(--accent); padding-left: var(--space-3xl); position: relative; margin-top: var(--space-xl); }
.experience-content .timeline-item { background: var(--card-bg-dark-section); transition: background-color var(--transition-std), transform var(--transition-std), box-shadow var(--transition-std); border-radius: var(--border-radius-lg); padding: var(--space-xl); margin-bottom: var(--space-2xl); box-shadow: var(--shadow-md); border: 1px solid var(--card-border-dark-section); position: relative;}
.experience-content .timeline-item::before { content: ''; position: absolute; left: calc(-1 * (var(--space-3xl) + (4px / 2) + (1.2rem / 2))); /* approx -59px */ top: var(--space-xl); width: 1.2rem; height: 1.2rem; border: 4px solid var(--primary-medium); background-color: var(--accent); border-radius: 50%; z-index: var(--z-content); transition: transform var(--transition-std); }
.experience-content .timeline-item:hover { background: var(--card-bg-hover-dark-section); transform: translateX(10px); box-shadow: var(--shadow-lg); }
.experience-content .timeline-item:hover::before { transform: scale(1.1); }
.experience-content .timeline-details { font-size: var(--text-sm); color: var(--text-on-medium-muted); margin-bottom: var(--space-sm); }
.experience-content .timeline-details .date { color: var(--accent-light); font-weight: var(--font-semibold); }
.experience-content .timeline-item ul { list-style: disc; padding-left: var(--space-lg); margin-top: var(--space-sm); margin-bottom: var(--space-md); }
.experience-content .timeline-item ul li { margin-bottom: var(--space-sm); }

/* ==========================================================================
  11. Skills Section (#skills)
   ========================================================================== */
/* Reusing previously defined styles */
.skills-section { background-color: var(--bg-section-dark); color: var(--text-on-dark); }
.skills-section h2, .skills-section h3 { color: var(--light); }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-xl); margin-top: var(--space-xl); }
.skill-category { background: var(--card-bg-dark-section); border: 1px solid var(--card-border-dark-section); border-radius: var(--border-radius-lg); padding: var(--space-xl); box-shadow: var(--shadow-md); transition: transform var(--transition-std), box-shadow var(--transition-std); }
.skill-category:hover { transform: translateY(-5px) scale(1.02); box-shadow: var(--shadow-lg); }
.skill-category h3 { font-size: var(--text-xl); margin-bottom: var(--space-lg); border-bottom: 2px solid var(--accent); padding-bottom: var(--space-sm); }
.skill-category ul { list-style: none; padding: 0; margin: 0; }
.skill-category li { padding: var(--space-sm) 0; margin-bottom: var(--space-xs); border-bottom: 1px dashed var(--card-border-dark-section); font-size: var(--text-base); transition: padding-left var(--transition-fast); color: var(--text-on-dark);}
.skill-category li:last-child { border-bottom: none; }
.skill-category li:hover { padding-left: var(--space-sm); background-color: var(--card-bg-hover-dark-section); border-radius: var(--border-radius-sm);}

/* ==========================================================================
  12. Projects Section (#projects)
   ========================================================================== */
/* Reusing previously defined styles */
.projects-section { background-color: var(--bg-section-medium); color: var(--text-on-medium); overflow: hidden; }
.projects-section h2, .projects-section h3 { color: var(--light); }
.carousel-container { position: relative; padding: 0 calc(var(--space-xl) + 25px); /* Space for buttons = 45/2 + margin */ margin: var(--space-xl) auto 0; max-width: var(--container-max-width); }
.carousel { width: 100%; overflow: hidden; margin: 0 auto; }
.carousel-track { display: flex; transition: transform var(--transition-med) ease-in-out; padding-bottom: var(--space-lg); }
.project-card { background: var(--card-bg-dark-section); border: 1px solid var(--card-border-dark-section); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-md); margin: 0 var(--space-md); flex: 0 0 calc(33.333% - var(--space-md) * 2); /* Adjust width based on margins */ display: flex; flex-direction: column; overflow: hidden; transition: transform var(--transition-std), box-shadow var(--transition-std); min-height: 400px; /* Give cards consistent height */}
.project-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.project-card-content { padding: var(--space-lg); display: flex; flex-direction: column; flex-grow: 1; }
.project-card h3 { font-size: var(--text-lg); margin-bottom: var(--space-sm); }
.project-card p { font-size: var(--text-sm); color: var(--text-on-medium); margin-bottom: var(--space-md); flex-grow: 1;} /* Paragraph takes up space */
.project-links { margin-top: auto; padding-top: var(--space-md); }
.carousel-btn { background: var(--accent); color: var(--light); border: none; border-radius: 50%; width: 45px; height: 45px; font-size: var(--text-lg); line-height: 45px; text-align: center; cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); z-index: var(--z-content); opacity: 0.7; transition: opacity var(--transition-std), background-color var(--transition-std), transform var(--transition-fast), box-shadow var(--transition-std); box-shadow: var(--shadow-sm); }
.carousel-btn:hover { opacity: 1; background: var(--accent-dark); transform: translateY(-50%) scale(1.1); box-shadow: var(--shadow-md); }
.carousel-btn.prev { left: 0px; } /* Adjust position */
.carousel-btn.next { right: 0px; } /* Adjust position */
.carousel-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: translateY(-50%) scale(1); background: var(--neutral-medium); color: var(--neutral-dark); box-shadow: none; }


/* ==========================================================================
  13. Leadership Section (#leadership)
   ========================================================================== */
/* Reusing previously defined styles */
.leadership-section { background-color: var(--bg-section-dark); color: var(--text-on-dark); }
.leadership-section h2, .leadership-section h3 { color: var(--light); }
.leadership-list { list-style: none; padding: 0; margin-top: var(--space-xl); }
.leadership-list li { background: var(--card-bg-dark-section); border: 1px solid var(--card-border-dark-section); border-radius: var(--border-radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg); box-shadow: var(--shadow-md); transition: transform var(--transition-std), box-shadow var(--transition-std), background-color var(--transition-std); }
.leadership-list li:hover { transform: translateX(12px) scale(1.01); background-color: var(--card-bg-hover-dark-section); box-shadow: var(--shadow-lg); }
.leadership-list li h3 { font-size: var(--text-lg); margin-bottom: var(--space-xs); }
.leadership-list li p:first-of-type { font-size: var(--text-sm); color: var(--text-on-dark-muted); margin-bottom: var(--space-md); }
.leadership-list li ul { list-style: disc; padding-left: var(--space-lg); margin-top: var(--space-md); }
.leadership-list li ul li { background: none; border: none; padding: 0; margin-bottom: var(--space-sm); font-size: var(--text-base); color: var(--text-on-dark-muted); box-shadow: none; }
.leadership-list li ul li:hover { background: none; transform: none;}

/* ==========================================================================
   14. Testimonials Section (#testimonials) - Placeholder Styles
   ========================================================================== */
.testimonials-section {
    background-color: var(--bg-section-medium); /* Alternating bg */
    color: var(--text-on-medium);
    padding-bottom: calc(var(--section-padding-y-desktop) + 2rem); /* Space for controls below */
    position: relative; /* For controls positioning */
    text-align: center;
}
.testimonials-section h2 {
    color: var(--light);
    margin-bottom: var(--space-2xl);
}
.testimonial-slider {
    position: relative; /* Container for absolute items */
    max-width: var(--container-max-width-narrower);
    margin: 0 auto;
    min-height: 250px; /* Give it some base height */
}
.testimonial-item {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-xl) var(--space-2xl);
    box-shadow: var(--shadow-lg);
    position: absolute;
    top: 0; left: 0; right: 0;
    opacity: 0; /* Hidden by default */
    visibility: hidden;
    transition: opacity var(--transition-med) ease-in-out, visibility var(--transition-med);
    z-index: var(--z-base);
}
.testimonial-item.active-testimonial {
    opacity: 1;
    visibility: visible;
    z-index: var(--z-content); /* Active item on top */
}
.testimonial-item blockquote {
    border-left: none;
    padding: 0;
    margin: 0 0 var(--space-lg);
    font-size: var(--text-lg);
    font-style: italic;
    line-height: var(--leading-relaxed);
    color: var(--light);
}
.testimonial-item cite {
    display: block;
    font-style: normal;
    font-weight: var(--font-semibold);
    color: var(--accent-light); /* Author highlighted */
    margin-top: var(--space-sm);
}
.testimonial-item cite span { /* Author title/company */
    display: block;
    font-size: var(--text-sm);
    font-weight: var(--font-normal);
    color: var(--text-on-medium-muted);
}
.testimonial-controls {
    position: absolute;
    bottom: calc(var(--section-padding-y-desktop) - 3rem); /* Position below content, relative to section */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--space-lg);
    z-index: var(--z-content);
}
.testimonial-controls button {
    background: var(--accent);
    color: var(--light);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: var(--text-lg);
    line-height: 40px;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    transition: background-color var(--transition-fast), transform var(--transition-fast);
}
.testimonial-controls button:hover {
    background: var(--accent-dark);
    transform: scale(1.1);
}
.testimonial-controls button:disabled {
    background: var(--neutral-medium);
    cursor: not-allowed;
    opacity: 0.5;
    transform: scale(1);
}

/* ==========================================================================
   15. Blog Section (#blog) - Placeholder Styles
   ========================================================================== */
.blog-section {
    background-color: var(--bg-section-dark);
    color: var(--text-on-dark);
}
.blog-section h2, .blog-section h3 {
    color: var(--light);
}
.blog-content { /* Center content */
    text-align: center;
}
.blog-grid { /* Layout for potential future posts */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);
    margin-top: var(--space-xl);
}
.blog-card-placeholder { /* Specific placeholder card style */
    position: relative;
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    min-height: 250px;
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.blog-card-placeholder p {
    margin: 0 0 var(--space-xl) 0;
    color: var(--text-on-dark);
    position: relative; /* Ensure text is above overlay */
    z-index: var(--z-content);
}
.blog-card-placeholder .overlay { /* "Coming Soon" overlay */
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    border-radius: var(--border-radius-lg);
    opacity: 0.9;
    z-index: var(--z-overlay);
}

/* ==========================================================================
   16. Tools/Resources Section (#tools) - Placeholder Styles
   ========================================================================== */
.tools-section {
    background-color: var(--bg-section-medium);
    color: var(--text-on-medium);
}
.tools-section h2, .tools-section h3 {
    color: var(--light);
}
.tools-section > .content-container > p { /* Targeting intro paragraph */
    text-align: center;
    margin-bottom: var(--space-2xl);
    color: var(--text-on-medium);
}
.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);
}
.tool-card-placeholder {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    min-height: 180px;
    padding: var(--space-xl);
    box-shadow: var(--shadow-md);
    text-align: center;
    font-style: italic;
    color: var(--text-on-medium-muted);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform var(--transition-std), box-shadow var(--transition-std);
}
.tool-card-placeholder:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}
.tool-card-placeholder h3 {
    font-size: var(--text-lg);
    margin-bottom: var(--space-sm);
    color: var(--light); /* Heading still light */
}

/* ==========================================================================
   17. Contact Section (#contact) - Enhanced Styles
   ========================================================================== */
.contact-section {
    background-color: var(--bg-section-dark);
    color: var(--text-on-dark);
}
.contact-section h2 {
    color: var(--light);
    text-align: center; /* Center section heading */
}
.contact-section > .content-container > p { /* Target intro paragraphs */
    text-align: center;
    margin-bottom: var(--space-md);
    color: var(--text-on-dark);
}
.contact-section > .content-container > p a {
    color: var(--accent);
    font-weight: var(--font-semibold);
}
.contact-section > .content-container > p a:hover {
    color: var(--accent-light);
}
#contact-form {
    background: var(--card-bg-dark-section);
    border: 1px solid var(--card-border-dark-section);
    border-radius: var(--border-radius-lg);
    padding: var(--space-2xl);
    box-shadow: var(--shadow-lg);
    margin-top: var(--space-2xl);
    max-width: var(--container-max-width-narrower);
    margin-left: auto;
    margin-right: auto;
}
#contact-form .form-group {
    margin-bottom: var(--space-lg);
}
#contact-form label {
    display: block;
    font-weight: var(--font-semibold);
    margin-bottom: var(--space-sm);
    color: var(--light);
}
#contact-form input[type="text"],
#contact-form input[type="email"],
#contact-form textarea {
    width: 100%;
    padding: var(--space-md);
    font-family: inherit;
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    background-color: rgba(255, 255, 255, 0.9); /* Input background */
    color: var(--neutral-dark);
    border: 2px solid transparent; /* Prepare for focus border */
    border-radius: var(--border-radius-md);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
#contact-form input[type="text"]:focus,
#contact-form input[type="email"]:focus,
#contact-form textarea:focus {
    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.3); /* Use focus mixin */
    border-color: var(--accent);
}
#contact-form textarea {
    min-height: 150px;
    resize: vertical;
}
#contact-form button[type="submit"] {
    display: block; /* Make button block level */
    width: 100%; /* Full width */
    margin-top: var(--space-lg);
    font-size: var(--text-lg); /* Slightly larger submit button */
}
/* Form Error Style */
.form-group .input-error {
    border-color: var(--error);
    box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.25);
}
/* Error message styling (requires JS to add span.error-message) */
.error-message {
    color: var(--error);
    font-size: var(--text-sm);
    margin-top: var(--space-xs);
}


/* ==========================================================================
   18. Footer (#site-footer)
   ========================================================================== */
#site-footer {
    background-color: #111827; /* Even darker footer */
    color: #9ca3af; /* Lighter grey text */
    padding: var(--space-3xl) var(--space-md);
    text-align: center;
    font-size: var(--text-sm);
    margin-top: auto; /* Pushes footer to bottom */
}
#site-footer p {
    margin-bottom: var(--space-sm);
    color: #9ca3af; /* Explicitly set color */
}
#site-footer .placeholder {
     color: #4b5563; /* Darker placeholder */
     margin-top: var(--space-sm);
}
/* Social Links Example Styling (if added later) */
.footer-social-links {
    margin-top: var(--space-lg);
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
}
.footer-social-links a {
    color: #9ca3af;
    font-size: var(--text-xl);
    transition: color var(--transition-std), transform var(--transition-fast);
}
.footer-social-links a:hover {
    color: var(--light);
    transform: scale(1.1);
}


/* ==========================================================================
   19. Utility Elements (Back to Top) - Basic Placeholder
   ========================================================================== */
.back-to-top {
    position: fixed;
    bottom: var(--space-xl);
    right: var(--space-xl);
    background-color: var(--accent);
    color: var(--light);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: none; /* Hidden by default - Show with JS */
    justify-content: center;
    align-items: center;
    font-size: var(--text-lg);
    text-decoration: none;
    box-shadow: var(--shadow-lg);
    z-index: var(--z-sticky);
    transition: opacity var(--transition-std), visibility var(--transition-std), transform var(--transition-fast);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
}
.back-to-top.visible {
    display: flex;
    opacity: 0.8;
    visibility: visible;
    transform: translateY(0);
}
.back-to-top:hover {
    opacity: 1;
    background-color: var(--accent-dark);
    transform: scale(1.05);
}


/* ==========================================================================
   20. Animations & Keyframes (Optional) - Adding bounce example
   ========================================================================== */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideIn { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }

/* Bounce Animation for Scroll Down Indicator */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}


/* ==========================================================================
   21. Responsive Design Overrides
   ========================================================================== */

/* Medium screens (tablets) */
@media (max-width: 992px) {
    :root {
        --container-max-width: 960px;
        --container-max-width-narrow: 720px;
    }
    h1 { font-size: clamp(var(--text-2xl), 5vw, var(--text-4xl)); }
    h2 { font-size: clamp(var(--text-xl), 4vw, var(--text-3xl)); }

    .nav-links { gap: var(--space-lg); } /* Slightly less gap */

    /* Carousel - Show 2 cards */
    .project-card { flex-basis: calc(50% - (var(--space-md) * 2)); }
    /* Recalculate visible cards in JS for medium screens if desired */

    /* About Grid */
    .about-grid { grid-template-columns: 1fr; gap: var(--space-2xl); } /* Stack on tablet */
    .about-image { max-width: 300px; margin-bottom: var(--space-xl); order: -1; /* Image first on mobile */ }
}

/* Small screens (mobile) */
@media (max-width: 768px) {
    :root {
        /* Adjust nav height and padding */
        --nav-height-desktop: var(--nav-height-mobile); /* Override for scroll padding */
        --section-padding-y-desktop: var(--section-padding-y-mobile); /* Override section padding */
    }
    html { scroll-padding-top: var(--nav-height-mobile); }
    body { padding-top: var(--nav-height-mobile); font-size: 15px; }

    h1 { font-size: var(--text-3xl); }
    h2 { font-size: var(--text-2xl); margin-bottom: var(--space-lg); }
    h3 { font-size: var(--text-xl); }
    h4 { font-size: var(--text-lg); }

    .section { padding: var(--section-padding-y-mobile) 0; }

    .content-container, .content-container-narrow, .content-container-narrower {
        padding-left: var(--space-md); padding-right: var(--space-md);
    }

    /* Navbar Mobile */
    #site-header { height: var(--nav-height-mobile); }
    #site-header .navbar { padding: 0 var(--space-md); }
    .nav-brand a { font-size: var(--text-lg); }
    .hamburger { display: block; } /* Show hamburger */

    .nav-links {
        position: fixed; /* Use fixed to cover viewport */
        top: var(--nav-height-mobile);
        left: -100%; /* Start hidden */
        width: 100%;
        height: calc(100vh - var(--nav-height-mobile)); /* Full remaining height */
        background-color: rgba(30, 58, 138, 0.98); /* Almost solid background */
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--space-xl) 0;
        transition: left var(--transition-med); /* Slide transition */
        gap: var(--space-lg);
        overflow-y: auto; /* Allow scrolling if links exceed height */
    }
    .nav-links.active { left: 0; } /* Slide in */
    .nav-links li a { font-size: var(--text-xl); } /* Larger text for touch */
    .nav-links li a::after { display: none; } /* No underline needed */


    /* Stack grids */
    .skills-grid, .tools-grid { grid-template-columns: 1fr; gap: var(--space-lg); }

    /* Carousel - Show 1 card (adjust basis) */
    .carousel-container { padding: 0 var(--space-md); }
    .project-card {
        flex-basis: calc(100% - (var(--space-sm) * 2)); /* Near full width */
        min-width: 280px; /* Slightly smaller min */
        margin: 0 var(--space-sm);
    }
    /* Consider hiding buttons or making them smaller/different positions */
    .carousel-btn { width: 40px; height: 40px; font-size: var(--text-lg); }
    .carousel-btn.prev { left: 5px; }
    .carousel-btn.next { right: 5px; }

    /* Timeline */
    .timeline { border-left-width: 3px; padding-left: var(--space-lg); }
    .timeline-item::before { display: none; } /* Hide dots on mobile */
    .timeline-item { padding: var(--space-lg); margin-bottom: var(--space-lg); transform: none !important; /* Reset hover transforms */ } /* Less padding */
    .timeline-item:hover {transform: none; background-color: var(--card-bg-dark-section);} /* Remove hover transform */

    /* Contact Form */
    #contact-form { padding: var(--space-xl); }
    #contact-form button[type="submit"] { font-size: var(--text-lg); }

    /* Footer */
    .site-footer { padding: var(--space-xl) var(--space-md); }
}
content_copy
download
Use code with caution.
Css
This completed styles.css file provides comprehensive styling for all sections outlined, incorporates the variable system, adds accessibility considerations, and includes responsive adjustments for tablet and mobile views. Remember to upload this updated file along with the corrected index.html and the final script.js to your GitHub repository.
