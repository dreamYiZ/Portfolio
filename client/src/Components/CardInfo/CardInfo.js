import React from 'react';
import style from '../Card/Card.module.css';
import { BsFillPersonFill, BsFillEyeFill } from 'react-icons/bs';

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
                <div>
                    <p className={style.Title}>{props.item.title}</p>
                    <p className={style.Description}>
                        {props.item.description}
                    </p>
                    <p className={style.Techs}>{props.item.techs}</p>
                </div>
                <div style={{ marginTop: '-5%' }}>
                    <span>
                        Credentials: <BsFillPersonFill />{' '}
                        {props.item.credentials.username}
                    </span>{' '}
                    <span>
                        <BsFillEyeFill /> {props.item.credentials.password}
                    </span>
                </div>
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
                <a href={props.item.link}>
                    <div style={{ display: 'flex' }}>
                        <span
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            View
                        </span>
                        <img
                            src="assets/images/link-logo.png"
                            alt="link-logo"
                            style={{
                                backgroundColor: 'transparent',
                                width: '1rem',
                                marginLeft: '7%',
                            }}
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CardInfo;
