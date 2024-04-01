import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { configureStore } from "@reduxjs/toolkit";

import thunk from 'redux-thunk'; 


const store = configureStore({
    reducer: rootReducer,
  
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk), // Add Redux Thunk middleware
    
  })

export default store;