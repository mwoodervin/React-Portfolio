import React from 'react';
import './hero.css';
import heroImage from "../../assets/img/mark-tegethoff-lX-sxatAvqc-unsplash-1.jpg";

function Hero() {
    return (
        <div>
            <img src={heroImage} alt="Bass Harbor Light" className="hero-image"/>
                <div className="hero-text">
                    <h1>Mary W. Ervin</h1>
                </div>
        </div>
    )
}
export default Hero;
