import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from './Components/Home/Home'
import About from './Components/About/About'

// Create a router by a method
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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
