Next.js Project
This project is a simple web application built using Next.js with state management via Zustand. The application includes a modal for entering the user's name, which is saved both in localStorage and the global store. The app also features links to a password generator and a calculator, which are enabled only after the user has entered their name.

Features
Next.js: The project uses the app directory structure for routing and rendering.
Zustand: Global state management to store and access the user's name across the app.
SCSS: For component-level styling.
Modal: Custom modal component that allows users to input their name.
localStorage: Used to persist the user's name across page reloads.
Dynamic Links: Links to the password generator and calculator are disabled until the user enters their name.

Styling
SCSS Modules are used for styling, providing scoped styles for each component.
The following SCSS modules are used:
Home.module.scss: Home page styles, including layout for the input form and buttons.
Header.module.scss: Styles for the navigation and user information.
modal.module.scss: Styles for the modal window.

Technologies Used
Next.js - React Framework for SSR and SSG
Zustand - Lightweight state management library
SCSS - CSS Preprocessor for styling
