Next.js Project
This project is a simple web application built using Next.js with state management via Zustand. The application includes a modal for entering the user's name, which is saved both in localStorage and the global store. The app also features links to a password generator and a calculator, which are enabled only after the user has entered their name.

Features
Next.js: The project uses the app directory structure for routing and rendering.
Zustand: Global state management to store and access the user's name across the app.
SCSS: For component-level styling.
Modal: Custom modal component that allows users to input their name.
localStorage: Used to persist the user's name across page reloads.
Dynamic Links: Links to the password generator and calculator are disabled until the user enters their name.
Project Structure
ruby
Copy code
├── components
│   ├── Header.tsx          # Displays navigation and user info
│   ├── Modal.tsx           # Custom modal component
├── pages
│   ├── index.tsx           # Home page with name input and modal
│   ├── password-generator.tsx  # Password generator page
│   ├── calculator.tsx      # Simple calculator page
├── store
│   └── useStore.ts         # Zustand store for global state management
├── styles
│   ├── Home.module.scss    # Styles for the Home page
│   ├── Header.module.scss  # Styles for the Header component
│   ├── modal.module.scss   # Styles for the Modal component
Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/nextjs-zustand-app.git
Install dependencies:

Navigate to the project folder and run:

bash
Copy code
npm install
Run the development server:

Start the Next.js development server:

bash
Copy code
npm run dev
Open http://localhost:3000 to view the app in your browser.

State Management
This project uses Zustand for state management. The global store is defined in store/useStore.ts and stores the user's name. The name is updated in two places:

When the user inputs their name and clicks "Save".
When the name is loaded from localStorage on page load.
Styling
SCSS Modules are used for styling, providing scoped styles for each component.
The following SCSS modules are used:
Home.module.scss: Home page styles, including layout for the input form and buttons.
Header.module.scss: Styles for the navigation and user information.
modal.module.scss: Styles for the modal window.
Custom Modal
The project features a reusable modal component located in components/Modal.tsx. The modal is triggered by a button click and can be closed by clicking on the background or the close button (×).

Persistence with localStorage
The user's name is stored in localStorage, allowing the app to remember the name between sessions. The name is retrieved when the app loads and stored again when the user enters or changes it.

Navigation
The app contains links to a password generator and calculator:

Links are disabled if the user's name has not been entered.
When the name is entered, the links become active, and the user's name is saved both globally and in localStorage.
Improvements
Implement actual logic for the password generator and calculator pages.
Add tests using Jest or React Testing Library.
Enhance UI/UX, such as providing visual feedback when the name is saved.
License
This project is open-source and available under the MIT License. 

Technologies Used
Next.js - React Framework for SSR and SSG
Zustand - Lightweight state management library
SCSS - CSS Preprocessor for styling
