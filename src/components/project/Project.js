import React, { Component } from 'react';
import { projDetails } from '../ProjDetails';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import '../..//App.css';

export const Project = () => {
    return (
        <div>
            <div className="project-container">
                {projDetails.map((data, key) => {
                    return (
                        <div>
                            <div key={key}>
                                {data.title}
                                {data.description}
                                {data.appLink}
                            </div>
                            <CardDeck className="cardDeckStyle">
                                <Card className="cardStyle">
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

