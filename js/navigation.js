/**
 * SOVEREIGN NAVIGATION PROTOCOL v6.1.2
 * Hardened for WSL and GitHub Subdirectory Persistence
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sovereign Intelligence: DOM Detected. Initializing Perimeter...");

    // Select all navigation links with Null-Safety
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Check if the menu elements exist before proceeding
    if (navLinks.length === 0) {
        console.warn("Sovereign Navigation: Perimeter Check Failed - No menu elements found.");
        return; // Safe exit to prevent console crash
    }

    // Determine the current path for active state synchronization
    // Handles root (index.html) and sub-directories (intelligence/, services/, etc.)
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        
        // Logical match for home vs sub-pages
        const isHome = (currentPath === '/' || currentPath.endsWith('index.html')) && section === 'home';
        const isSubPage = currentPath.includes(`/${section}/`);

        if (isHome || isSubPage) {
            link.classList.add('active');
            console.log(`Perimeter Secure: Active Section [${section.toUpperCase()}]`);
        } else {
            link.classList.remove('active');
        }
    });

    console.log("Sovereign Intelligence: Perimeter Fully Synchronized.");
});