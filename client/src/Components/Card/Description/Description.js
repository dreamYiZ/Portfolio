import React from 'react';
import CardInfo from '../../CardInfo/CardInfo';

const Description = (props) => {
    return (
        <div
        // style={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     marginTop: '45%',
        // }}
        >
            <CardInfo item={props.item} />
        </div>
    );
};

export default Description;
