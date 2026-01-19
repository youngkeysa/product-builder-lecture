const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.getElementById('menu-display');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const dinnerMenus = [
    "Pizza", "Hamburger", "Sushi", "Pasta", "Steak",
    "Fried Chicken", "Tacos", "Salad", "Ramen", "Bibimbap"
];

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = selectedMenu;
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
