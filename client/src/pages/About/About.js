import React from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';

const About = (props) => {
    return (
        <div style={{ width: '100%', minHeight: '100vh', padding: '0 5%' }}>
            <Hero title={props.title} />
            <Content>
                <p
                    style={{
                        fontFamily: "'New Tegomin', serif",
                    }}
                >
                    Welcome to my page!
                </p>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    I am a full stack Web Developer based in Berlin.
                    <br /> I am passionate about new technologies, blockchains
                    and AI.
                </p>

                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    I'm constantly learning new things and looking for a chance
                    of self-improvement. <br /> I am very driven and dedicated
                    to everything I do.
                </p>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    Highly empathetic and naturally inclined to help others, I
                    pivoted my professional career into tech to build modern web
                    applications which can provide some major improvements to
                    the community or lead to social change.
                </p>

                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    Wish you a pleasant navigation, please leave a feedback in
                    the contact page!
                </p>
            </Content>
        </div>
    );
};

export default About;
