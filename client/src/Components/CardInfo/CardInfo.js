import React from 'react';
import style from '../Card/Card.module.css';

const CardInfo = (props) => {
    return (
        <div className={style.Info}>
            <div>
                <p className={style.Title}>{props.item.title}</p>
                <p className={style.Subtitle}>{props.item.subtitle}</p>
                <p className={style.Description}>{props.item.description}</p>
            </div>
            <a
                href={props.item.link}
                // target="_blank"
                // rel="noopener noreferrer"
            >
                View
            </a>
        </div>
    );
};

export default CardInfo;
