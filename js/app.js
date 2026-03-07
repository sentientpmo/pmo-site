/**
 * FORENSIC FUNCTIONAL ENGINE v7.0
 * Purpose: Page-specific logic (Calculators, Interactive Elements)
 */
const ForensicEngine = {
    init() {
        this.initCalculator();
        // Future modules (e.g., this.initTimeline()) go here
    },

    initCalculator() {
        const zombieInput = document.getElementById('zombieSpend');
        const multipleInput = document.getElementById('multiple');
        
        // Safety Check: Only run if elements exist
        if (!zombieInput || !multipleInput) return;

        const multipleValDisplay = document.getElementById('multipleVal');
        const totalErasureDisplay = document.getElementById('totalErasure');

        const adjudicate = () => {
            const spend = parseFloat(zombieInput.value) || 0;
            const multiple = parseInt(multipleInput.value);
            multipleValDisplay.textContent = `${multiple}x`;
            const total = spend * multiple;
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD', maximumFractionDigits: 0
            });
            totalErasureDisplay.textContent = formatter.format(total);
        };

        zombieInput.addEventListener('input', adjudicate);
        multipleInput.addEventListener('input', adjudicate);
        adjudicate(); // Initial run
    }
};

document.addEventListener('DOMContentLoaded', () => ForensicEngine.init());