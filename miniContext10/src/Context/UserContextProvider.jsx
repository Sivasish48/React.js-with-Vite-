import React from 'react'
import UserContext from './UserContext'

// The below is  a just a custom method
// here children as the paramater that is anything to which we want to provide the usercontext.

const UserContextProvider = ({children})=>{

    // now we have to pass thwe data which can be changed so we have to provide a state here
    const [user,setUser] = React.useState(null)
    //const [password,setPassword] = React.useState()
return(
    // And here we can pass the all related obj inthe provider in the name as value
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
)
}

// now import it in app.jsx or main.jsx


export default UserContextProvider