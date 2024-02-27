import React, {useState, useContext } from'react'
import UserContext from '../Context/UserContext'
function Login(){
  
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')


    // Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.

    const{setUser}= useContext(UserContext)

    const handleSubmit=(e)=>{
          e.preventDefault()
          setUser({username,password})
    }
    return(
        <div>
            <h2>Log In</h2>
            <input type="text" placeholder='username' 
            value={username} 
            onChange={(e)=>{
                return setUsername(e.target.value)
            }}
            />
            {"    "}
            <input type="text" placeholder='password' 
            value={password}
            onChange={(e)=>{
                return setPassword(e.target.value)
            }}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login