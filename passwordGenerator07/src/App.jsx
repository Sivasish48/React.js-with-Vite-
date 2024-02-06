import {useState,useCallback, useEffect} from 'react'
function App() {
  // Now as we know that there are several dependecies which are getting updated on each click .
  // So to track them we should use the useState() hhok


  // Now we should check the other dependency that is the length

  const [length,setLength] = useState(8)

  // Now for number

  const [useNum,setUseNum] = useState(false)

  // now for special characters

  const [useSpecialChar,setUseSpecialChar] = useState(false)

  // Now we need to use the password because it also gets updated.

  const [password,setPassword] = useState("")


  // now let us make a password generating method
 // for this we have to use a useCallback hook rather than using a general function.
 // What is useCallback hook?

// The React useCallback Hook returns a memoized callback function.
// Think of memorization as the caching value as it doesnot need get recalculated.
  const passwordGenerator = useCallback(()=>{
       let thePass = ""
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

       // letus give the conditions over the dependencies

       if(useNum){
        str += "1234567890"
       }

       if(useSpecialChar){
        str += "!@#$%^&*(){}[]<>,;':\"-_=+\\/|`~.?\n\t"
       }

       // now actually let us use a loop to get value(random)

       for(let i =1; i<=length;i++){
        let char = Math.floor(Math.random()*str.length+1) // Now we have got an individual index for the whole string(password).
        
        // now we need to pass that index into "pass" to generate a single character of the whole password

        thePass += str.charAt(char)
        }

        // now we have execute the "pass" into the setPassword. 
        setPassword(thePass)

     },[length,useNum,useSpecialChar])

    useEffect(()=>{
      passwordGenerator()
    }, [length,useNum,useSpecialChar])
 return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  <h1 className='text-white text-center my-3'>Password generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={80}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value) // onchange is an attribute , where as e.target.value is where "e" targets the value attribute and the setLength sets the new length
        }}
        />
        <label> Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={useNum}
         id='numberInput'
         onChange={()=>{
          setUseNum((prev)=> !prev);
          // This means it can not set the previous value that it has showed.
         }}
          />
           <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input   // Now this input perfors exactly same for special characters.
              type="checkbox"
              defaultChecked={useSpecialChar}
              id="characterInput"
              onChange={() => {
                  setUseSpecialChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
    
  )
}

export default App
