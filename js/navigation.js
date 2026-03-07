/* * Sovereign Intelligence / Navigation Logic v6.0
 * Protocol: Ensure dynamic active states across the forensic folder structure.
 */

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Normalize paths to handle relative 'index.html' and root references
        const normalizedLinkPath = linkPath.replace('../', '').replace('./', '');
        
        // Logical check: Does the current URL contain the directory or filename of the link?
        if (currentPath.includes(normalizedLinkPath) && normalizedLinkPath !== '') {
            link.style.color = 'var(--radiant-gold)';
            link.style.borderBottom = '2px solid var(--radiant-gold)';
            link.style.paddingBottom = '5px';
        }

        // Specific handling for the Home / Command Center link
        if ((currentPath === '/' || currentPath.endsWith('index.html')) && 
            (normalizedLinkPath === 'index.html' || normalizedLinkPath === '')) {
            if (!currentPath.includes('services') && !currentPath.includes('intelligence') && !currentPath.includes('black-box')) {
                link.style.color = 'var(--radiant-gold)';
            }
        }
    });

    // Console Log for Technical Validation
    console.log("[SYSTEM]: Forensic Navigation Active. Perimeter Secured.");
});