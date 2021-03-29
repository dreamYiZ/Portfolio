import React from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';

const About = (props) => {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>
                    Hello visitor, my name is Marco. I am a junior full stack
                    Web Developer based in Berlin.
                </p>

                <p>
                    I am passionate about new technologies and fully in love
                    with React for the front-end development. I also have some
                    basic knowledge of Vue.js and I am confident working with
                    databases in Express. <br />
                    Code improvements with TypeScript and Tailwind, so like
                    learning PHP, are my next goals for the near future.
                </p>
                <p>
                    I'm constantly learning new things and looking for a chance
                    of self-improvement. <br /> I am very driven and dedicated
                    to everything I do.
                </p>
                <p>
                    Highly empathetic and naturally inclined to help others, I
                    pivoted my career from hospitality to Tech to build modern
                    web applications which can provide some major improvements
                    to the community or lead to social change. <br />I found in
                    Web development an efficient, intelligent and creative way
                    of self-expression, as well as an effective tool to play my
                    role in the big socioeconomic transformation occurring in
                    these days.
                </p>

                <p>Hope you will like my Web page and my work!</p>
            </Content>
        </div>
    );
};

export default About;
