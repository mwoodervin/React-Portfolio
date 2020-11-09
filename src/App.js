import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';


function App() {
  return (
    <Router>
    <div>
        <Hero/>
        <Navbar/>
        <Switch>
        <Route exact path = "/">
          <About />
          </Route> 
        <Route exact path = "/portfolio">
          <Portfolio />
          </Route> 
        </Switch>
        <Footer/>
    </div>
    </Router>
    
  )
}

export default App;

