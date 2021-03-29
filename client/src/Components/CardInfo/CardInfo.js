import React from 'react';
import { useSpring, animated } from 'react-spring';
import style from '../Card/Card.module.css';

const CardInfo = (props) => {
    const styles = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className={style.Info} style={styles} r>
            <p className={style.Title}>{props.title}</p>
            <p className={style.Subtitle}>{props.subtitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                View
            </a>
        </animated.div>
    );
};

export default CardInfo;
