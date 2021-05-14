import React from 'react';
import style from '../Card/Card.module.css';

const CardInfo = (props) => {
    return (
        <div className={style.Infos}>
            <div>
                <p className={style.Title}>{props.item.title}</p>
                <p className={style.Description}>{props.item.description}</p>
                <p className={style.Techs}>{props.item.techs}</p>
                <iframe
                    className={style.Iframe}
                    src={props.item.videoSrc}
                    title="project-highlight"
                />
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
