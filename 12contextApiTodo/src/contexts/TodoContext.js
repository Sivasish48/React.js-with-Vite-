import {createContext, useContext} from "react"

export const TodoContext = createContext({
    // Let us make an array what there will be technically in a todo section
    todos: [
        {
            id: 1, // In a an to do section there will an unique id for every todo

            todo: " Todo msg",  // And in every todo there will be a todo msg or about of the todo


            completed: false,// And there will be a completed section in the boolean form as well

        }

        // And here we are going to write about the functions
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {}, // We also can update the todo,for that we need the id of the todo and the task msg of todo

    deleteTodo: (id) => {}, // to delete the todo we need the id of the todo

    toggleComplete: (id) => {} // To toggle the todo we need the id

})

// now create a custom hook using useContext hook 
export const useTodo = () => {
    return useContext(TodoContext)
}


// Now create a variable and store its provider
export const TodoProvider = TodoContext.Provider