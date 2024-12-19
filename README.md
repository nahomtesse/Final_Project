Fish Creek Animal Clinic Project Report
Overview
The Fish Creek Animal Clinic project involves transforming a static website into an interactive web application with dynamic content, modern navigation, and server-side processing. The final project includes multiple pages such as the Home, Services, Ask the Vet, Shop, and Contact pages. This report outlines the steps taken to complete each task, from setting up the client-side components with React to implementing the backend using Node.js for form processing.

Site Structure
The final website structure includes the following pages:

Home Page (index.html): Serves as the central hub of the website.
Services Page (services.html): A modernized layout using a table format to present service information.
Ask the Vet Page (askvet.html): Includes a dynamic form for submitting questions to the vet, with backend processing handled by Node.js.
Shop Page (shop.html): Features an interactive shopping cart where users can view and add items for purchase.
Contact Page (contact.html): Contains an updated form to send user inquiries to the server.
Task 1: Adding the Shop Page (shop.html)
The Shop Page was added following a structured approach:

Setup Website Folder:

Added the required images (fishtote.gif, fishsweat.gif).
Updated Navigation:

Modified the navigation menu on Navbar html to include a "Shop" link with the corresponding image and a hyperlink to shop html.
Created Shop Page:

Organized the page into sections showcasing products:
Fish Creek Tote Bag: Added an image, description, and form to add the item to the cart.
Fish Creek Sweatshirt: Similar structure for this product.

CSS Configuration:

Applied CSS styles from fishcreek.css to ensure a responsive and attractive layout for shop.
Task 2: Set Up the Client-Side Components
React was introduced to transform the static website into a dynamic web application:

Reusable Components:

Components such as NavBar, Footer, Header, and LastModified were created for reusability across all pages.
LastModified component was added to display the date of the last modification on each page, I used jQuery to write to the date to the document.
React Router for Navigation:

React Router was used to manage navigation between the five pages (Home, Services, Ask the Vet, Shop, and Contact).
Each page became a component that could be navigated using React Router’s Link and Route components.
Styling and Responsiveness:

React components were styled to maintain the same look and feel as the original website.
Additional CSS rules were added for responsiveness, ensuring the site was usable on various devices.
Task 3: Set Up the Server-Side Processing
To handle form submissions and ensure data validation, Node.js Express was used for backend processing:

Backend Project Setup:

Created a new folder called fishcreek_backendServer for the backend.
Used Express.js to set up the server and handle requests.
Server Routes:

Created a POST route to handle form submissions from the Contact component.
Form Validation:

Implemented validation for the Name field (ensuring it was not empty) and the Email field (ensuring it followed a valid email format).
Response Handling:

If the form data was valid, a response containing the received data was sent back to the client.
This ensured that users received feedback after submitting their information.


This project successfully professionalized the Fish Creek Animal Clinic website by converting it into a dynamic React application, implementing reusable components, and adding server-side processing with Node.js. The Shop page was created with interactive features, and the Contact page was integrated with backend validation. The website is now fully functional, responsive, and ready for future improvements.
