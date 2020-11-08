import React from 'react';
import './footer.css';

// this is a sticky footer - maybe change?

function Footer() {
return (
    <div>
        <footer className="d-flex flex-column sticky-footer-wrapper">
            <div className="container footerContainer">
                <span className="text-muted">Mary W. Ervin | About Me | November 2020</span>
            </div>
        </footer>
    </div>

)
}
export default Footer;
