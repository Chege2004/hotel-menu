const url = "http://localhost:3000/menu/";
const specialOrderUrl = "http://localhost:3000/specialOrders";
const conversionRate = 140;

document.addEventListener("DOMContentLoaded", function() {
    getMenu();
    setupFormHandler();
    searchHandler();
});

function getMenu() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            window.menuData = data; // Store the menu data globally
            displayMenu(data);
        });
}

function displayMenu(data) {
    const menu = document.getElementById("menu");
    menu.innerHTML = ''; // Clear the menu before displaying new items
    data.forEach(item => {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menu-item");
        menuItem.textContent = item.name;
        menuItem.dataset.id = item.id; // Store the item's id in a data attribute
        menu.appendChild(menuItem);
        menuItem.addEventListener("click", function() {
            displayMenuItems(item.id);
        });
    });
}

function displayMenuItems(id) {
    fetch(`${url}${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const foodName = document.getElementById("food-name");
            const foodCategory = document.getElementById("food-category");
            const foodIngredients = document.getElementById("food-ingredients");
            const foodPrice = document.getElementById("food-price");
            const image = document.getElementById("hotel-image");
            image.src = data.image; // Set src property correctly
            foodName.textContent = data.name;
            foodCategory.textContent = `Category: ${data.category}`;
            foodIngredients.textContent = `Ingredients: ${data.ingredients}`;
            const priceInKES = (data.price * conversionRate).toFixed(2); // Convert price to KES
            foodPrice.textContent = `KES ${priceInKES}`;
        })
        .catch(error => console.log(error));
}

function searchHandler() {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", function(event) {
        const query = event.target.value.toLowerCase();
        if (window.menuData) {
            const filteredData = window.menuData.filter(item =>
                item.name.toLowerCase().includes(query)
            );
            displayMenu(filteredData);
        }
    });
}

function setupFormHandler() {
    const form = document.getElementById("special-order-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const dishName = document.getElementById("special-order-name").value;
        const category = document.getElementById("special-order-category").value;
        const ingredients = document.getElementById("special-order-ingredients").value;

        // Send special order to the server
        fetch(specialOrderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: dishName,
                category: category,
                ingredients: ingredients
            })
        })
        .then(response => response.json())
        .then(data => {
            const message = document.getElementById("message");
            message.style.display = "block";
            setTimeout(() => {
                message.style.display = "none";
            }, 1000);
            console.log('Order submitted successfully:', data);
        })
        .catch(error => console.error('Error submitting order:', error));
        
        // Clear the form input
        form.reset();
    });
}
