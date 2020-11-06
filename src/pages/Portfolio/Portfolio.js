import React from 'react';
import './portfolio.css';
import { Project } from '../../components/project/Project.js';

export default function Portfolio() {

    return (
        <div>
            <div className="container container-fluid">
                <p className = "portfolioContent">Portfolio Page</p>
                <Project />
                <button className = "buttonStyle">click me</button>
            </div>
        </div>
    )
}
