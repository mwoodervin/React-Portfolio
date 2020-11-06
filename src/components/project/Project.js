import React, { Component } from 'react';
import { projDetails } from '../ProjDetails';
import '../..//App.css';

export const Project = () => {
    return (
        <div>
            <div className="project-container"></div>
            {projDetails.map((data, key) => {
                return(
                    <div key = {key}>
                        {data.title}
                        {data.description}
                        {data.appLink}
                    </div>
                );
            })}
        </div>
    );
}

