import React from 'react'
import UserContext from '../Context/UserContext'


function Profile(){
    const {user} = React.useContext(UserContext)
    
    if(!user){
        return <div>Please Log In </div>
    }

    return(
        <div> Welcome  {user.username}</div>
    )
}

export default  Profile 