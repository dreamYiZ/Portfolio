import React, { useState } from 'react';
import CardInfo from '../CardInfo/CardInfo';
import style from './Card.module.css';
import { useSpring, animated } from 'react-spring';

const Card = (props) => {
    const [isHovered, setHovered] = useState(false);

    let styles = useSpring(
        isHovered
            ? ({
                  zIndex: 2,
                  from: { zIndex: 1 },
              },
              {
                  transform: 'scale(1.2)',
                  from: { transform: 'scale(1)' },
              })
            : ({
                  zIndex: 1,
                  from: { zIndex: 2 },
              },
              {
                  transform: 'scale(1)',
                  from: { transform: 'scale(1.2)' },
              })
    );

    return (
        <animated.div
            className={style.Card}
            style={styles}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            <div className={`${style.CardSide} ${style.Front}`}>
                <img
                    className={style.Image}
                    src={props.item.imgSrc}
                    alt={props.item.title}
                />
            </div>
            <div className={`${style.CardSide} ${style.Back}`}>
                <CardInfo item={props.item} />
            </div>
        </animated.div>
    );
};

export default Card;
