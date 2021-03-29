import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div
            // className="d-inline-block"
            className={style.Card}
            onClick={() => props.click(props.item)}
        >
            <img
                className={style.Image}
                src={props.item.imgSrc}
                alt={props.item.title}
            />
            {props.item.selected && (
                <CardInfo
                    title={props.item.title}
                    subtitle={props.item.subtitle}
                    link={props.item.link}
                />
            )}
        </div>
    );
};

export default Card;
