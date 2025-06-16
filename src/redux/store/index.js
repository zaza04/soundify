import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "../slices/themeSlice";

// console.log(themeReducer);


const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

export default store; 