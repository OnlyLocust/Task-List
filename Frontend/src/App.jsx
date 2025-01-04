import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './ui/Home'
import Login from './ui/Login'
import Signup from './ui/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
