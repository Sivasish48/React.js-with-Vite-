import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    
   /* const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Sivasish48')
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            setData(data) 
        })
    }) 
    */



    // There is another way to do it via using a react hook


    const data = useLoaderData()


    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers:{data.followers} 
            <img src={data.avatar_url} alt="Git Picture"  width={300} />
        </div>
    )
}

// There is another way to do it via using a react hook


// A loader component is responsible for rendering some visual indication (such as a spinner, progress bar, or animation) to inform the user that data is being loaded and to provide feedback on the progress of the operation.


//useLoadData is not a standard React hook, but it could be a custom hook created within a React application to manage the loading of data.



export const githubInfo = async ()=>{
   const response =  await fetch('https://api.github.com/users/Sivasish48')
   return response.json()
}
export default Github
  