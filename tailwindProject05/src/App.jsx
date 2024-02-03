import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/card'


function App() {
 // we can also pass any custom element in the predefined or functional tag as the evaluated expression .
// Ex 

/*
let myObj = {
  username:"Suvam",
  age:40
}
  return (
    <>
    <h2 className='bg-green-400 p-4 text-black text-lg mb-4'>talwind classes</h2>
    <Card name="Peps" someObj={myObj} />
    <Card/>
    </>
  )
}

export default App
*/
// Other wise if the value of the evaluated expression is none like the 3 <div/>, we pass that on the App() as the parameter as if all the non writen evaluated expression will be that passed parameter.
return (
  <>
  <h2 className='bg-green-400 p-4 text-black text-lg mb-4'>talwind classes</h2>
  <Card name="Peps" theBtnText= "click me" />
  <Card name="Suvam" />
  <Card/>

  </>
)
}

export default App