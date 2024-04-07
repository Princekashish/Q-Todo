import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice/tasksSlice';

// Define a function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Define a function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle potential errors saving state to local storage
    console.error('Error saving state to local storage:', err);
  }
};

// Load initial state from local storage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // Add other reducers here if needed...
  },
  preloadedState: persistedState, // Provide preloaded state from local storage
});

// Subscribe to Redux store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
