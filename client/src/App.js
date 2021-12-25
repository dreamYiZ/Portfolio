// import './App.css';
import React, { useRef } from "react";
// import style from './App.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import BackgroundVideo from "./assets/videos/stars-video.mp4";
import style from "./App.module.css";

function App() {
  const config = {
    title: "Marco Capurri",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
    home: {
      title: "Marco Capurri",
      subtitle: "Full-stack Software Developer",
      text: "Professional Portfolio",
    },
    about: {
      title: "About me..",
    },
    contact: {
      title: "Get in touch!",
      subtitle: "Happy to have your feedback",
    },
  };
  const ref = useRef(null);

  return (
    <Router>
      <Container
        className="p-3"
        fluid={true}
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(10, 12, 57)",
          color: "#ccc",
          overflow: "auto",
        }}
      >
        <NavigationBar ref={ref} />
        <video
          autoplay="autoplay"
          muted
          loop
          id={style.BackgroundVideo}
          //   style={{
          //     position: "absolute",
          //     right: "0",
          //     bottom: "-15%",
          //     width: "100%",
          //     height: "104%",
          //     "object-fit": "cover",
          //   }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
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
