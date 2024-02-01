import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Let us see how this below conter code works
function App() {
  
  /*
  let counter = 1
  // here define those methods
  const addValue = () =>{
     counter = counter+1
     console.log(counter);
  } 
  const removeValue = ()=>{
    counter = counter-1
    console.log(counter);
  }
    // Let us add a onclick() in the button to increase or decrease the counter value
    // After clicking the buttons the Ui doesnot change but we can see the changes in console.
    // To make it possible here comes REACT hooks

    // React Hooks are functions that allow you to use state and other React features in functional components without writing a class.
    //They were introduced in React 16.8 as a way to enable stateful logic and side effects in functional components, which were previously only possible with class components.


    // Here we are going to use a react hook that is {useState}
    // To use we have to import it = import { useState } from 'react'

   */

    let [counter,setCounter] = useState(1)
    
    const addValue = ()=>{
      if(counter<20){
      setCounter(counter+1)
      } else {
     setCounter(counter)
    }
  }
   const removeValue = ()=>{
    if(counter>=0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
   }
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Counter App </h2>
    <h2>Counter Value:{counter}</h2>
    
    <button onClick={addValue}>Increase</button>
    <button onClick={removeValue}>Decrease</button>
    </>
  )
}
  



export default App
