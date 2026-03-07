/**
 * SOVEREIGN NAVIGATION PROTOCOL v7.0
 * Purpose: Global UI Injection & State Management
 */
const SovereignUI = {
    init() {
        this.injectHeader();
        this.injectFooter();
        this.syncState();
    },

    injectHeader() {
        const header = `
        <nav class="nav-hud border-b border-gold/20 sticky top-0 bg-void/80 backdrop-blur-md z-50">
            <div class="container nav-inner" style="display: flex; justify-content: space-between; align-items: center; height: 4.5rem;">
                <div style="display: flex; align-items: center;">
                    <div class="status-pulse"></div>
                    <span class="font-mono text-gold uppercase tracking-widest" style="font-size: 10px;">Sovereign Intelligence / v7.0</span>
                </div>
                <div class="font-mono" style="font-size: 11px; display: flex; gap: 20px;">
                    <a href="/" class="nav-link" data-section="home">01. COMMAND_CENTER</a>
                    <a href="/intelligence" class="nav-link" data-section="intel">02. THE_VAULT</a>
                    <a href="/case-study" class="nav-link" data-section="case">03. EVIDENCE</a>
                    <a href="mailto:michael@makcon.com" style="color: var(--red-bright); text-decoration: none;">[ SECURE PERIMETER ]</a>
                </div>
            </div>
        </nav>`;
        document.body.insertAdjacentHTML('afterbegin', header);
    },

    injectFooter() {
        const footer = `
        <footer style="padding: 4rem 0; text-align: center; border-top: 1px solid var(--zinc-900);">
            <p class="font-mono text-zinc-800 tracking-widest" style="font-size: 10px;">
                &copy; 2026 MAKCON LLC | FORENSIC GOVERNANCE | SOVEREIGN INTELLIGENCE
            </p>
        </footer>`;
        document.body.insertAdjacentHTML('beforeend', footer);
    },

    syncState() {
        const path = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            const section = link.getAttribute('href');
            if (path === section || (path === '/' && section === '/')) {
                link.style.color = 'var(--gold)';
                link.style.borderBottom = '1px solid var(--gold)';
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => SovereignUI.init());