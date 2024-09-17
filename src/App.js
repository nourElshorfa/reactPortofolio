


import React from 'react'

import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Compoents/Layout/Layout'
import About from './Compoents/About/About'
import Home from './Compoents/Home/Home'
import Portfolio from './Compoents/Portofolio/Portfolio'
import Contacts from './Compoents/Contacts/Contacts'



let routers = createHashRouter([{
  path:"", element:<Layout/> , children: [
    {index:true , element: <Home/>},
    {path:"about" , element: <About/>},
    {path:"portfolio" , element: <Portfolio/>},
    {path:"contact" , element: <Contacts/>}
  ]
}])

export default function App() {

  return <RouterProvider router={routers} />

}

