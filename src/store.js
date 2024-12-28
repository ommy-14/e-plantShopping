// Importing necessary functions and files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Importing the cart reducer from CartSlice.jsx

// Configuring the store with the cartReducer
const store = configureStore({
    reducer: {
        cart: cartReducer, // cart slice will be managed by the cartReducer
    },
});

// Exporting the store so it can be used throughout the application
export default store;
