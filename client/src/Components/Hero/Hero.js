import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && (
                            <h1
                                className="display-4 font-weight-bolder"
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                {props.title}
                            </h1>
                        )}
                        {props.subtitle && (
                            <h3
                                className="display-5 font-weight-light"
                                style={{
                                    fontFamily: "'Train One', cursive",
                                }}
                            >
                                {props.subtitle}
                            </h3>
                        )}
                        {props.text && (
                            <h3
                                className="lead font-weight-light"
                                // style={{
                                //     fontFamily: "'Poppins', sans-serif",
                                //     // fontWeight: 'normal',
                                // }}
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
