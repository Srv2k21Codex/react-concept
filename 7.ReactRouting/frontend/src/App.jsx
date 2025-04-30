import { useState } from 'react'
import { Routes , createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ParamComp from './components/ParamComp'
import MockTest from './components/MockTest';
import Courses from './components/Courses';
import Report from './components/Report';

function withNavbar(Component){
  return <>
    <NavBar/>
    <Component/>
  </>
}
const router = createBrowserRouter(
[
    { path: '/', element: withNavbar(Home) },
    { path: '/about', element: withNavbar(About)},
    { path: '/dashboard', element: withNavbar(Dashboard),
      children:[{
         path:'courses',
         element:<Courses/>
      },
      {
         path:'mocktest',
         element:<MockTest/>
    },{
         path:'report',
         element:<Report/>
    }]
      
    },
    { path: '/student/:id' ,element:withNavbar(ParamComp)}
]  
);
function App() {
 

  return (
    <>
      
   
      <RouterProvider router={router}/>
        
    
    </>
  )
}

export default App
