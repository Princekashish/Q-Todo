// store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "./slice/tasksSlice"


const store = configureStore({
  reducer: tasksReducer,
});

export default store;
