import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
    console.log('props-location', window.location);
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h1
                            className="display-4 font-weight-bolder"
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: '4rem',
                            }}
                        >
                            {props.title}
                        </h1>
                        {props.subtitle && (
                            <h3
                                className="display-5 font-weight-light"
                                style={{
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: '1rem',
                                }}
                            >
                                {props.subtitle}
                            </h3>
                        )}
                        {props.text && (
                            <h3
                                className="lead font-weight-light"
                                style={{
                                    fontFamily: "'Press Start 2P', cursive",
                                    fontSize: '0.8rem',
                                }}
                            >
                                {props.text}
                            </h3>
                        )}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Hero;
