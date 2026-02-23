import './App.css';
import Home from './pages/home';
import About from './pages/About';
import Restaurants from './pages/Restaurants';
import MenuPage from './pages/menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/Form';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<MenuPage/>} />
        <Route path='/restaurants' element={<Restaurants/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
