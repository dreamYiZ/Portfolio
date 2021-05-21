import React from 'react';
import style from '../Card/Card.module.css';

const CardInfo = (props) => {
    return (
        <div className={style.Infos}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p className={style.Title}>{props.item.title}</p>
                <p className={style.Description}>{props.item.description}</p>
                <p className={style.Techs}>{props.item.techs}</p>

                <video
                    src={props.item.videoSrc}
                    className={style.Video}
                    title="project-highlight"
                    autoPlay
                >
                    {' '}
                    Your browser does not support the HTML5 Video element.
                </video>
            </div>
            <div className={style.Buttons}>
                <a href={props.item.gitHubUrl}>
                    <img
                        src="assets/images/gitHub-logo.png"
                        alt="github-logo"
                        style={{ width: '4rem' }}
                    />
                </a>
                <a
                    href={props.item.link}
                    // target="_blank"
                    // rel="noopener noreferrer"
                >
                    <img
                        src="assets/images/link-logo.png"
                        alt="link-logo"
                        style={{
                            width: '2rem',
                            backgroundColor: 'transparent',
                        }}
                    />
                </a>
            </div>
        </div>
    );
};

export default CardInfo;
