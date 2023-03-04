import React from 'react'
import Home from "./Home"
import Navbar from './component/Navbar'
import Detail from './component/Detail';
import './output.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
const App = () => {
    return (
      <BrowserRouter>
                <Routes>
                <Route path='/' element={<div className='relative'><Navbar />  <Home /></div>} />
                <Route path='/detail' element={ <Detail/>} />
                </Routes>
      </BrowserRouter>

  )
}

export default App