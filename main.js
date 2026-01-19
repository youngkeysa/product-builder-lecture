const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.getElementById('menu-display');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const dinnerMenus = [
    "pizza", "hamburger", "sushi", "pasta", "steak",
    "fried chicken", "tacos", "salad", "ramen", "bibimbap", "burger"
];

generateBtn.addEventListener('click', () => {
    // Clear previous content
    menuDisplay.innerHTML = '';

    // Get a random menu
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];

    // Display the menu text
    const menuText = document.createElement('p');
    menuText.textContent = selectedMenu;
    menuDisplay.appendChild(menuText);

    // Fetch and display the food image
    fetch(`https://foodish-api.herokuapp.com/api/images/${selectedMenu}/`)
        .then(response => {
            if (!response.ok) {
                // If category not found, get a random image
                return fetch('https://foodish-api.herokuapp.com/api/');
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.image;
            img.alt = selectedMenu;
            menuDisplay.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching food image:', error);
            // If there's an error, maybe display a placeholder or a message
        });
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
