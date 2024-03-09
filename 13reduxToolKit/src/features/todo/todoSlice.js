import { createSlice,nanoid } from "@reduxjs/toolkit";


// now create a initial state for a todo  

const initialState = {
    todos:{
        id:1,
        text:"Gym"
    }
}

// now use the createSlice functionality 

// createSlice() as a handy tool that helps you organize your Redux code more easily.
// With it, you can define a part of your app's data and the actions that can change that data all in one place.

 const todoSlice = createSlice({
    name: "todo",
    initialState,
    // reducers is an object inside the createSlice function where you define functions to handle different types of actions that can occur in your application. 
    reducers: {
         // Logic to add a new todo item to the state
            // now here we have to define functions in the form of property
        addTodo: (state, action) => {
            //(state, action): The reducer function takes two parameters:
            // state: This represents the current state of the slice. That is the initialState
            // action: This represents the action dispatched to the store. It contains information about what happened in the application or the operation.



            const todo ={
                // n0w create a unique id using nanoId for the new todo.
                id:nanoid(),

                //  When you create an action in Redux, you define a payload property to hold any data that needs to be passed along with the action.
                // payload is basically a predefined object which stores the dispathced values

                text:action.payload

            }
            state.todos.push(todo)

        },

        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload)
        },


    }
});

// so to use it we have to export the individual reducers and the actual reducers as well 
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer