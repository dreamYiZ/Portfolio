import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Description from './Description/Description';
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div>
            <div className={style.Card} onClick={() => props.click(props.item)}>
                <div className={`${style.CardSide} ${style.Front}`}>
                    <img
                        className={style.Image}
                        src={props.item.imgSrc}
                        alt={props.item.title}
                    />
                </div>
                <div className={`${style.CardSide} ${style.Back}`}>
                    <Description />
                </div>
            </div>
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
