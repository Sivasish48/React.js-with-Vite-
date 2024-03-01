import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

   // for the state management of each todos
  const [todos, setTodos] = useState([])


   // And the functionality within the values of the provider
      

    // so here in the below function
    // Here prev is the prev Todo(msg) , it can be empty or existing
    // And we define a new Date obj here to create the unique value of the id
    // After passing the id we passed ...Todo which will subsequently update the prev if there is any
    // And After the updated on=bj with new values we passed the prev 
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }


  // So here we gonna be giving functionalities of updateTodo
       // So first of all here we have id which is the id of the modified todos
       // And the todo is the new todos's msg
       // so here we declare a call back with the prevTodo which is the parameter of is=f there any previous todos
       // Then we used an iteration foreach which operates on every element or every todo existed on the todos array 
       // Then we gave prevTodo as the parameter if there is previous todo exist
       // then we check if the previously existed todo has the same id with the todo we are trying to update
       // If yes then update the Todotask or keep the prevTodo
       
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }



   // now let us jump into the functionalities of deleteTodo
    // so here we used the prev as the previously exist todos
    // Now we apply the filter method here which adds or check a pariticular functionaly or operation and makes a new array
    // here we applied filter method and passed a parameter as prevTodo 
    // and gives a new array where the input id is not equal to the any previous todos
    // So it returns these todos which has the non equality todos


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  // Now let us add functionality for the toggleTodo
    // So here we did the exact same thing as updates odo
    // but here we changed the completed property to its vice-versa
  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }



  // Now let us write the code for the local storage of the browser

    // let us call an useEffect
    //localStorage.getItem("todos"): This retrieves the value associated with the key "todos" from the browser's localStorage. 
    //The data stored in localStorage persists even after the browser is closed.
    //JSON.parse(): This function parses the JSON-formatted string retrieved from localStorage and converts it into a JavaScript object.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
 // let us check if there is any todos in localStorage
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  // here i also want the todo list which are going into the todos through context Apis , We want them to save in the localStorage as well
    // This useEffect hook is called whenever the todos array changes.
    // The second argument [todos] is the dependency array, meaning the effect will run whenever the value of todos changes.
    // Inside the useEffect, the setItem method of localStorage is called to store the todos array. 
    // localStorage.setItem takes two arguments: the key under which to store the data (in this case, "todos"), and the value to store. 
    // Since localStorage can only store strings, JSON.stringify is used to convert the todos array into a JSON string before storing it.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
     // Now add the todo provider
    // And provide the value
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
