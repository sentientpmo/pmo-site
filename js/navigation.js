/* * Sovereign Intelligence / Navigation Logic v6.1
 * Protocol: Root-Relative Pathing & Active State Persistence
 * Author: MAKCON / Michael Kaplan
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Path Normalization: Capture the current URL path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Retrieve the data-section attribute to identify the target area
        const section = link.getAttribute('data-section');
        
        // 2. Active State Logic: High-fidelity visual feedback
        // Check if the current URL contains the section directory name
        if (section !== 'home' && currentPath.includes(`/${section}/`)) {
            link.style.color = 'var(--radiant-gold)';
            link.style.borderBottom = '2px solid var(--radiant-gold)';
            link.style.paddingBottom = '5px';
        } 
        
        // 3. Command Center (Home) Logic: Primary Entry Point
        // Highlights the home link only if at the root or main index.html
        else if (section === 'home') {
            const isAtRoot = currentPath === '/' || currentPath.endsWith('index.html');
            const inSubFolder = currentPath.includes('/services/') || 
                                currentPath.includes('/intelligence/') || 
                                currentPath.includes('/black-box/') ||
                                currentPath.includes('/about/');

            if (isAtRoot && !inSubFolder) {
                link.style.color = 'var(--radiant-gold)';
                link.style.borderBottom = '2px solid var(--radiant-gold)';
                link.style.paddingBottom = '5px';
            }
        }
    });

    // Console Log for Technical Validation
    console.log("[SYSTEM]: Forensic Navigation v6.1 Active. Root-Relative Perimeter Secured.");
});