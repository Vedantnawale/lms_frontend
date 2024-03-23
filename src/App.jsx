import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'

function App() {


  return (
   <>
   {/* Bohot sare route honge to routes mein dalte hai */}
   <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/about" element={<AboutUs />}></Route>

    <Route path="*" element={<NotFound />}></Route>
   </Routes>
   </>
  )
}

export default App
