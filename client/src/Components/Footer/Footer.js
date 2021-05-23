import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillHeartFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between align-items-center">
                    <Col
                        className="p-0"
                        md={3}
                        sm={4}
                        style={{ maxWidth: '50%' }}
                    >
                        © Marco Capurri
                    </Col>
                    <Col
                        className="p-0 d-flex justify-content-end"
                        md={3}
                        sm={4}
                        style={{
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: '50%',
                        }}
                    >
                        made with
                        <BsFillHeartFill style={{ margin: '0 3%' }} />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
