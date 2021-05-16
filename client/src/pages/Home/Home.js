import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Carousel from '../../Components/Carousel/Carousel';

const Home = (props) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Hero
                title={props.title}
                subtitle={props.subtitle}
                text={props.text}
            />
            <Carousel />
        </div>
    );
};

export default Home;
