import React from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';

const About = (props) => {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    Welcome to my page!
                </p>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    I am a junior full stack Web Developer based in Berlin.
                    <br /> I am passionate about new technologies, clean
                    energies, blockchains and AI.
                </p>

                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    I'm constantly learning new things and looking for a chance
                    of self-improvement. <br /> I am very driven and dedicated
                    to everything I do.
                </p>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    Highly empathetic and naturally inclined to help others, I
                    started my journey into tech to build modern web
                    applications which can provide some major improvements to
                    the community or lead to social change.
                </p>
                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    I found in Web development an efficient, intelligent and
                    creative way of self-expression, as well as a huge amazing
                    dev community, which provided me the help and support I
                    needed to keep on track.
                </p>

                <p style={{ fontFamily: "'New Tegomin', serif" }}>
                    Hope you will like my Web page and my work!
                </p>
            </Content>
        </div>
    );
};

export default About;
