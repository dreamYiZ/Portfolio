import React from 'react';
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
                    <Description item={props.item} />
                </div>
            </div>
        </div>
    );
};

export default Card;
