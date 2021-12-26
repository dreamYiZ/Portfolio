import React from "react";
import Content from "../../Components/Content/Content";
import Hero from "../../Components/Hero/Hero";

const About = (props) => {
  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: "0 5%" }}>
      <Hero title={props.title} />
      <Content>
        <p
          style={{
            fontFamily: "'New Tegomin', serif",
            fontSize: "1.5rem",
          }}
        >
          Welcome to my portfolio site!
        </p>
        <p
          style={{
            fontFamily: "'New Tegomin', serif",
            fontSize: "1.5rem",
          }}
        >
          I am a full stack Software Developer based in Berlin.
          <br /> My passions are programming, new technologies, blockchain and
          martial arts.
        </p>

        <p
          style={{
            fontFamily: "'New Tegomin', serif",
            fontSize: "1.5rem",
          }}
        >
          I'm constantly learning new things and looking for a chance of
          improvement. <br /> I am very driven and dedicated to everything I
          do..
        </p>
        <p
          style={{
            fontFamily: "'New Tegomin', serif",
            fontSize: "1.5rem",
          }}
        >
          Highly empathetic and naturally inclined to help others, I pivoted my
          professional career into tech to build modern web and mobile
          applications which can provide some major improvements to the
          community and eventually lead to social change.
        </p>

        <p
          style={{
            fontFamily: "'New Tegomin', serif",
            fontSize: "1.5rem",
          }}
        >
          Wish you a pleasant navigation, and if you feel like, please leave a
          feedback in the contact page!
        </p>
      </Content>
    </div>
  );
};

export default About;
