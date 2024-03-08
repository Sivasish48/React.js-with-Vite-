import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo(){

    // now let us set up the states
    const [input,setInput] = useState()

    // now use the useDispatch()
    //In Redux, useDispatch is a h(ook provided by the react-redux library that allows functional components to dispatch actions to the Redux store.
    // so by using the useDispatch() we can make changes in the reduxStore by dispatching the actions from the reducers
    const dispatch = useDispatch()

    // now here declare the addTodoHandler

    const addTodoHandler = (e)=>{
        // e.preventDefault(): This line prevents the default behavior of the form submission, which is to refresh the page.
        e.preventDefault()
        
        // dispatch(addTodo(input)): This line dispatches an action which is addTodo() from the reducers to add a new todo item to the Redux store. 
        //  It uses the dispatch function provided by Redux to dispatch the action.
        // the input parameter would typically represent the data needed to create a new todo item.
        dispatch(addTodo(input))

        // now after dispatching the action now set the input to empty
        setInput('')
    }
    return(
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    )
}