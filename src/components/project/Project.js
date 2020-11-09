import React, { Component } from 'react';
import { projDetails } from '../ProjDetails';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './project.css';
import '../../App.css';

export const Project = () => {
    return (
        <div className="project-container">
            {projDetails.map((data, key) => {
                return (
                    <CardDeck>
                    <Card key={key} className="cardStyle">
                        <Card.Img variant="top" className='img-responsive' src={data.imgURL} alt={data.componentimgAlt} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                <p>{data.description}</p>
                                <p>{data.tech}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="buttonStyle"><a href={data.appLink} />Try me</Button>
                            <Button className="buttonStyle"><a href={data.codeLink} />Code</Button>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                );
            })}
        </div>
    );
}

