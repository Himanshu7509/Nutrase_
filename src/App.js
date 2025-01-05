import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Authorization/login-signup/login';
import Register from './Authorization/login-signup/signup';
import Notfound from './components/pages/notFound/notFound';
import Home from './components/pages/home/home';
import About from './components/pages/about/About';
import BlogsP from './components/pages/blog/BlogsP';
import Contact from './components/pages/contact/Contact';
import AskAi from './components/pages/ai-component/AskAI';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/askNutras' element={<AskAi/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<BlogsP/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Notfound/>} />
      </Routes>
    </>
  )
}

export default App