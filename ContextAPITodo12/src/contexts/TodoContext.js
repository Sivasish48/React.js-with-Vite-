import {createContext,useContext} from 'react'

// now here write the context about the todo section with its details of what is happening 

  const refContext ={

    // Let us make an array what there will be technically in a todo section
    todos:[
       {
         // In a an to do section there will an unique id for every todo
            id:10,
         // And in every todo there will be a todo msg or about of the todo
            Todotask:"Learn Js",
         // And there will be a completed section in the boolean form as well
            completed:false
       } 
    ],
    // And here we are going to write about the functions

    addTodo:(Todotask)=>{},

    // We also can update the todo,for that we need the id of the todo and the task msg of todo
    updateTodo:(id,Todotask)=>{},
    
    // to delete the todo we need the id of the todo
    deleteTodo:(id)=>{},

    // To toggle the todo we need the id
    ToggleTodo:(id)=>{}
}

// now make the reference of our above varoable and create a context of the todo

export const TodoContext = createContext(refContext)


// Now create a variable and store its provider

 export const TodoProvider = TodoContext.Provider

// now create a custom hook using useContext hook 

 export const useTodo = ()=>{
   return  useContext(TodoContext)
}