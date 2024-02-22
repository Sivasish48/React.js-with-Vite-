import React from 'react'
import { useParams } from 'react-router-dom' 

// Using params in React allows you to pass dynamic parameters to a component through the URL. 
function User(){
    const {userId} = useParams()

    return(
        <div className='bg-gray-700 p-4 text-white text-3xl text-center'> User : {userId} </div>
    )
}

<<<<<<< HEAD
export default User 
=======
export default User
>>>>>>> 4f3ba91642cbdfa6302d92831ff2ad853b53300b
