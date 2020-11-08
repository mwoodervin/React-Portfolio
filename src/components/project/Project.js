import React, { Component } from 'react';
import { projDetails } from '../ProjDetails';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './project.css';


import '../..//App.css';

export const Project = () => {
    return (
        <div>
            <div className="project-container">
                {projDetails.map((data, key) => {
                    return (
                        <div>
                            <div className='container-fluid containerStyle'>
                                <CardDeck key={key} className="cardDeckStyle row row-cols-1 row-cols-md-3">
                                    <Card border='success' className="cardStyle col mb-4">
                                        <Card.Img variant="top" className='img-responsive' src={data.imgURL} alt={data.componentimgAlt} />
                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text>
                                                <p>{data.description}</p>
                                                <p>{data.tech}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button className="buttonStyle" variant="info"><a href={data.appLink} />App</Button>
                                            <Button className="buttonStyle" variant="info"><a href={data.codeLink} />Code</Button>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

