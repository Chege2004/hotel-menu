# Hotel Menu Application

## Overview
The Hotel Menu Application is a web application that allows hotel guests to browse the hotel's menu, view detailed information about each dish, and make special food orders. The application is designed to enhance the dining experience by making the menu easily accessible and allowing customization through special orders.

## Features
1. **Menu Display**: View a list of available dishes categorized into appetizers, main courses, and desserts.
2. **Dish Details**: Click on a menu item to see detailed information including name, category, ingredients, price (converted to Kenyan Shillings), and an image.
3. **Search Functionality**: Search for specific dishes by name using a search input field.
4. **Special Orders**: Make special orders by providing a dish name, category, and ingredients through a form.
5. **Responsive Design**: The application is responsive and user-friendly across different devices.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON Server

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/hotel-menu-app.git
   cd hotel-menu-app
   ```

2. Install JSON Server:
   ```sh
   npm install -g json-server
   ```

3. Start JSON Server with the provided `db.json` file:
   ```sh
   json-server --watch db.json
   ```

4. Open `index.html` in your browser.

## Project Structure
- `index.html`: The main HTML file that contains the structure of the application.
- `index.css`: The CSS file for styling the application.
- `index.js`: The JavaScript file containing the logic for fetching data, handling events, and updating the UI.
- `db.json`: The JSON file that acts as a mock database for the menu items and special orders.

## Usage
- **View Menu**: On page load, the menu items are fetched from the server and displayed.
- **View Dish Details**: Click on a menu item to see its details.
- **Search**: Use the search input to filter menu items by name.
- **Make Special Orders**: Fill in the special order form and submit to add a custom dish.

## Code Explanation
### Event Listeners
- `DOMContentLoaded`: Initializes the menu display and sets up form and search handlers.
- `click`: Handles clicks on menu items to display their details.
- `input`: Filters menu items based on search input.
- `submit`: Handles special order form submissions.

### Functions
- `getMenu()`: Fetches the menu data from the server and displays it.
- `displayMenu(data)`: Renders the menu items on the page.
- `displayMenuItems(id)`: Fetches and displays details of a specific menu item.
- `setupFormHandler()`: Sets up the special order form submission handling.
- `searchHandler()`: Sets up the search input handling to filter menu items.

### Data Handling
- Fetches menu data from `db.json`.
- Converts prices to Kenyan Shillings using a conversion rate.
- Submits special orders to the server and displays a confirmation message.

## Future Enhancements
- Improve input validation for special orders.
- Add user feedback for search results.
- Enhance the UI with more styling and animations.
- Implement sorting and filtering options for the menu.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements
- [JSON Server](https://github.com/typicode/json-server) for providing a simple way to create a mock REST API.
- [Pexels](https://www.pexels.com/) for providing free images used in the application.

## Contact
For any inquiries or feedback, please contact (chegemanasseh2@gmail.com).