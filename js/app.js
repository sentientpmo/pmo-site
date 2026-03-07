/**
 * FORENSIC GOVERNANCE ENGINE - V6.2
 * Logic for EBITDA Strike Adjudication
 */

document.addEventListener('DOMContentLoaded', () => {
    const zombieInput = document.getElementById('zombieSpend');
    const multipleInput = document.getElementById('multiple');
    const multipleValDisplay = document.getElementById('multipleVal');
    const totalErasureDisplay = document.getElementById('totalErasure');

    function adjudicateStrike() {
        const spend = parseFloat(zombieInput.value) || 0;
        const multiple = parseInt(multipleInput.value);
        
        // Update UI Label
        multipleValDisplay.textContent = `${multiple}x`;
        
        // Calculate Value Erasure
        const totalErasure = spend * multiple;
        
        // Format Currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        });

        totalErasureDisplay.textContent = formatter.format(totalErasure);

        // Visual Feedback: Intensify red if erasure is high
        if (totalErasure > 5000000) {
            totalErasureDisplay.classList.add('text-red-500');
            totalErasureDisplay.style.textShadow = "0 0 20px rgba(239, 68, 68, 0.5)";
        } else {
            totalErasureDisplay.style.textShadow = "none";
        }
    }

    // Listeners
    zombieInput.addEventListener('input', adjudicateStrike);
    multipleInput.addEventListener('input', adjudicateStrike);

    // Initial Adjudication
    adjudicateStrike();
    
    console.log("SENTIENT PMO: Forensic Engine Online. Physics Adjudicated.");
});