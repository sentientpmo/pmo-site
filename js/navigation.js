/**
 * The Sentient Architect | Global Navigation Logic
 * Ensures mobile menu functionality and touch-target adjudication.
 * Synchronized for Root, /briefing/, and /intelligence/ directories.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select primary DOM hooks for menu adjudication
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');
    const menu = document.getElementById('mobile-menu');

    // Clinical Check: Only proceed if the menu elements exist on the page
    if (!toggle || !menu) {
        console.warn('Sovereign Navigation: Menu elements not detected in DOM.');
        return;
    }

    /**
     * Opens the mobile menu and locks the background scroll.
     * Prevents "Linguistic Decay" during navigation.
     */
    const openMenu = () => {
        menu.classList.remove('hidden');
        // Decommission background scrolling to maintain focus on the menu
        document.body.style.overflow = 'hidden';
    };

    /**
     * Closes the mobile menu and restores background scroll.
     */
    const closeMenu = () => {
        menu.classList.add('hidden');
        // Restore standard physics to the page body
        document.body.style.overflow = 'auto';
    };

    // Event Listener: Open Trigger
    toggle.addEventListener('click', openMenu);

    // Event Listener: Close Trigger (if present)
    if (close) {
        closeMenu.addEventListener('click', closeMenu);
    }

    // Surgical Precision: Close menu automatically when any link is selected
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /**
     * Accessibility: Close menu on ESC key to prevent interaction dead-ends.
     */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            closeMenu();
        }
    });

    /**
     * Optional: Close menu when clicking the backdrop/overlay
     */
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            closeMenu();
        }
    });
});