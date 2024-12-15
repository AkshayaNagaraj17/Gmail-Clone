import Body from "./Components/Body"
import './App.css'
import Nav from './Components/Nav'

import Mail from './Components/Mail'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Inbox from './Components/Inbox'
const router=createBrowserRouter([
  {
    path:"/",element:<Body></Body>,children:[{path:'/',element:<Inbox></Inbox>}]
  } ,
  {
    path:"/mail/:id",element:<Mail></Mail>
  }
])
function App() {
  

  return (
    <div className='bg-slate-200 h-screen w-screen overflow-hidden'>
        <Nav></Nav>
        <RouterProvider router={router}></RouterProvider>
        
    </div>
  )
}

export default App
