import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import {Home,About,Contact,Github} from './Components/index.js'

import User from './Components/User/User.jsx'
// Create a router by a method

/*

But there is a n another way to write it more simply.
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ]
  }
])

*/

// Another way is 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>

      {/*Now the below router is for the user routing*/}

       <Route path='user/:userId' element={<User/>}/> 

       {/*Now the below router is for the github*/}

       <Route path='Github' element = {<Github/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
