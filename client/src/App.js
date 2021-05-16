import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavigationBar/NavigationBar';

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
            title: 'About me..',
        },
        contact: {
            title: 'Get in touch!',
            subtitle: 'Happy to have your feedback',
        },
    };
    const ref = useRef(null);

    return (
        <Router>
            <Container
                className="p-3"
                fluid={true}
                ref={ref}
                style={{ backgroundColor: 'rgb(10, 12, 57)', color: '#ccc' }}
            >
                <NavigationBar ref={ref} />

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
