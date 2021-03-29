import React from 'react';
import { useSpring, animated } from 'react-spring';
import style from '../Card/Card.module.css';

const CardInfo = (props) => {
    const styles = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className={style.Info} style={styles}>
            <p className={style.Title}>{props.item.title}</p>
            <p className={style.Subtitle}>{props.item.subtitle}</p>
            <p className={style.Description}>{props.item.description}</p>
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                View
            </a>
        </animated.div>
    );
};

export default CardInfo;
