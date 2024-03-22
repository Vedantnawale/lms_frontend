import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Homepage'

function App() {


  return (
   <>
   {/* Bohot sare route honge to routes mein dalte hai */}
   <Routes> 
    <Route path="/" element={<HomePage />}></Route>
   </Routes>
   </>
  )
}

export default App
