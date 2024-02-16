// Custom Hooks 
// Custom hooks in React are reusable JavaScript functions that contain logic related to state management, side effects, or any other functionality that a predefined hooks have.

// example of a custom hooks

   function hello(){
    return[]
   }

// We can also integrate the predefined hooks with custom hooks

import {useEffect,useState} from "react"

// lets use a function


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;
        



//export default useCurrencyInfo;

/*
function useCurrencyInfo(){


    const [data,setData] = useState({})

    

    useEffect(async function theFetch(){

        try{
        const fetchData = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        const fetchRes = await fetchData.json()
        console.log(fetchRes);

        } catch(error){
            console.log("errorrrr");
        }then((response)=>{
            const data = response.json()
            console.log(data);
            return data
        })
        .then((json_response)=>{
            // now to update the json data we need to use the useState hook.
            return setData(json_response[currency])
        })
    },[currency]) 
  //  theFetch()

}

*/

