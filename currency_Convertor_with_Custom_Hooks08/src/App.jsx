import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  
   // here make an useState hook

   const [amount,setAmount] = useState(0)  // This hook is used to set the amount 
   const [from,setFrom] = useState("inr")   // This hook sets which currency type is going to be converted
   const [to,setTo] = useState("usd")        // This hook sets in which currency  the given currency type will be changed.
   const [convertedAmount,setConvertedAmount] = useState(0)  // This hook is for the converted amount

   const currencyInfo = useCurrencyInfo(from) 

   const optns = Object.keys(currencyInfo)

   // now for swapping feature where currency type changes as well as the amount and converted amount also changes.
     
   const swap = ()=>{
    setFrom(to)
    setTo(from)
    convertedAmount(amount)
    setAmount(convertedAmount) 
   }
  return (
    <>
      <h1 className='text-pink bg-black'>hello</h1>
    </>
  )
}

export default App
