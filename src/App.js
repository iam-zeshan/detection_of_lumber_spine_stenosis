import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Doctor from './Components/Doctor';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signin' element={<Login />} />
          <Route exact path='/prediction' element={<Doctor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
