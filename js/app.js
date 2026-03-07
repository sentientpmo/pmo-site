document.addEventListener('DOMContentLoaded', () => {
    const zombieInput = document.getElementById('zombieSpend');
    const multipleInput = document.getElementById('multiple');
    const multipleValDisplay = document.getElementById('multipleVal');
    const totalErasureDisplay = document.getElementById('totalErasure');

    function adjudicate() {
        const spend = parseFloat(zombieInput.value) || 0;
        const multiple = parseInt(multipleInput.value);
        
        multipleValDisplay.textContent = `${multiple}x`;
        
        const total = spend * multiple;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        });

        totalErasureDisplay.textContent = formatter.format(total);
    }

    zombieInput.addEventListener('input', adjudicate);
    multipleInput.addEventListener('input', adjudicate);
    adjudicate();
});