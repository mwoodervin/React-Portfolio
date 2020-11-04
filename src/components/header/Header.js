import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <div>
        <header className = "headerStyle">
            <h1>My Header will go here </h1>
            {/* <Link className = "linkStyle" to='/'>Home</Link> | <Link className = "linkStyle" to='/about'>About</Link> | <Link className = "linkStyle" to='/contact'>Contact</Link> */}
        </header>
        </div>
    )
}

export default Header;

