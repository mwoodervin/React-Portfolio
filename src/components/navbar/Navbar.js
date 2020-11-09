import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link linkStyle" to="/react-portfolio"> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkStyle" to="/react-portfolio/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Retooling for the Future </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
