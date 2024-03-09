import { configureStore } from "@reduxjs/toolkit";
// now import the reducers 
import todoReducer from '../features/todo/todoSlice'
// After installing React Redux, you need to configure a Redux store to manage the state of your React application.
// That u=is why we need to create a store file in the react app

//  The configureStore function is part of Redux Toolkit, which is the recommended way to set up a Redux store.

// Redux Toolkit aims to simplify Redux development by reducing boilerplate code.
// configureStore({}) sets up a Redux store with default middleware, including thunk middleware for handling asynchronous actions.

// now add the key values here

const store = configureStore({
    reducer:todoReducer
})

export default store