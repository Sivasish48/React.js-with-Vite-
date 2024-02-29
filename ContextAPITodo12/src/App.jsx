import { TodoProvider } from "./contexts" 

function App(){

  // for the state management of each todos
    const [todos,SetTodos] =React.useState([])

    // And the functionality within the values of the provider
      

    // so here in the below function
    // Here prev is the prev Todotask(msg) , it can be empty or existing
    // And we define a new Date obj here to create the unique value of the id
    // After passing the id we passed ...Todotask which will subsequently update the prev if there is any
    // And After the updated on=bj with new values we passed the prev 

    const addTodo = (Todotask)=>{
       SetTodos((prev)=>{
        return [{id:Date.now(),...Todotask},...prev]
       })

       
    }
    return(
    // Now add the todo provider
    // And provide the value
    <TodoProvider value={{addTodo,updateTodo,deleteTodo,ToggleTodo,todos}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
        </div>
    </div>
    </div>
    </TodoProvider>
    
  )
}


export default App
