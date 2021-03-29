import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Carousel from '../../Components/Carousel/Carousel';

const Home = (props) => {
    return (
        <>
            <Hero
                title={props.title}
                subtitle={props.subtitle}
                text={props.text}
            />
            <Carousel />
        </>
    );
};

export default Home;
