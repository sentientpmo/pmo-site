/**
 * The Sentient Architect | Global Navigation Logic
 * Ensures mobile menu functionality and touch-target adjudication.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');
    const menu = document.getElementById('mobile-menu');

    if (!toggle || !menu) return;

    // Open Menu
    toggle.addEventListener('click', () => {
        menu.classList.remove('hidden');
        // Prevent background scrolling while navigating
        document.body.style.overflow = 'hidden';
    });

    // Close Menu Function
    const closeMenu = () => {
        menu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    if (close) {
        closeMenu.addEventListener('click', closeMenu);
    }

    // Close menu when clicking any link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on ESC key for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            closeMenu();
        }
    });
});