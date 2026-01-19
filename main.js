const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.getElementById('numbers-display');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

generateBtn.addEventListener('click', () => {
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of [...numbers].sort((a, b) => a - b)) {
        const numberBall = document.createElement('div');
        numberBall.classList.add('number-ball');
        numberBall.textContent = number;
        numbersDisplay.appendChild(numberBall);
    }
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
