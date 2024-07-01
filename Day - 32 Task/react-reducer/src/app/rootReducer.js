import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers as needed
});

export default rootReducer;
