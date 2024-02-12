// Custom Hooks 
// Custom hooks in React are reusable JavaScript functions that contain logic related to state management, side effects, or any other functionality that a predefined hooks have.

// example of a custom hooks

function hello (){
    return[]
}

// We can also integrate the predefined hooks with custom hooks

import {useEffect,useState} from "react"

// lets use a function

function useCurrencyInfo(currency){
    // I want to call an api and now here I want to immplement this hook when someone will call it.
   
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)  // Api is called using fetch in a use Effect hoo and we can use chaining as well.
        .then((response)=>{
            JSON.parse(response)
        })
        .then((json_response)=>{
            // now to update the json data we need to use the useState hook.
            return setData(json_response[currency])
        })
    },[currency])

    return data;
}

export default useCurrencyInfo;
