import React from 'react';
// import { Router } from 'react-router-dom';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App;

// Import Router and use <Router> and <Link>