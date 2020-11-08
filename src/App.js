import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';


function App() {
  return (
    <div>
      <Router>
        <Hero/>
        {/* <Header /> */}
        <Navbar/>
        <Route exact path = {["/","/about"]} component = {About} />
        <Route exact path = "/portfolio" component = {Portfolio} />
        {/* <Route exact path = "/contact" component = {Contact} /> */}
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

// Import Router and use <Router> and <Link>