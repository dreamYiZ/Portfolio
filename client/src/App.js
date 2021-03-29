import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
    const config = {
        title: 'Marco Capurri',
        headerLinks: [
            { title: 'Home', path: '/' },
            { title: 'About', path: '/about' },
            { title: 'Contact', path: '/contact' },
        ],
        home: {
            title: 'Marco Capurri',
            subtitle: 'Junior Web Developer',
            text: 'Professional Portfolio',
        },
        about: {
            title: 'About me',
        },
        contact: {
            title: 'Get in touch!',
            subtitle: 'Happy to have feedbacks',
        },
    };
    const ref = useRef();

    return (
        <Router>
            <Container className="p-0" fluid={true} ref={ref}>
                <Navbar
                    className="border-bottom"
                    bg="transparent"
                    expand="lg"
                    ref={ref}
                >
                    <Navbar.Brand>Marco Capurri</Navbar.Brand>
                    <Navbar.Toggle
                        className="border-0"
                        aria-controls="navbar-toggle"
                    />
                    <Navbar.Collapse id="navbar-toggle" ref={ref}>
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Home
                            title={config.home.title}
                            subtitle={config.home.subtitle}
                            text={config.home.text}
                        />
                    )}
                />
                <Route
                    path="/about"
                    render={() => <About title={config.about.title} />}
                />
                <Route
                    path="/contact"
                    render={() => (
                        <Contact
                            title={config.contact.title}
                            subtitle={config.contact.subtitle}
                        />
                    )}
                />
                <Footer />
            </Container>
        </Router>
    );
}

export default App;
