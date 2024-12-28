import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;  // Increase quantity if the item already exists
      } else {
        // Add new item with initial quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;  // Update quantity
      }
    },
  },
});

// Export action creators for use in components (ProductList.jsx and CartItem.jsx)
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be added to the store
export default CartSlice.reducer;
