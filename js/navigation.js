/**
 * SOVEREIGN NAVIGATION PROTOCOL v6.1.1
 * Hardened DOM Integration Wrapper
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sovereign Intelligence: Initializing Perimeter Logic...");

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navLinks.length === 0) {
        console.warn("Sovereign Navigation: No menu elements detected in DOM.");
        return; // Safe exit to prevent console crash
    }

    // Determine the current path and identify the active section
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        // Extract the section name from the data attribute
        const section = link.getAttribute('data-section');
        
        // Logical match for current pathing
        // Handles root (index.html) and sub-directories (intelligence/, services/, etc.)
        if (
            (currentPath === '/' || currentPath.endsWith('index.html')) && section === 'home' ||
            currentPath.includes(`/${section}/`)
        ) {
            link.classList.add('active');
            console.log(`Perimeter Secure: Active Section [${section.toUpperCase()}]`);
        } else {
            link.classList.remove('active');
        }
    });

    // Optional: Add hover sound or visual glitch effect initialization here
});