import React from 'react';
import './navbar.css';

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
                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./assets/contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./assets/portfolio.html">Portfolio</a>
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
