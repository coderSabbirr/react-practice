import React from 'react';

const Config = (props) => {
    return (
        <div>
            <ul>
                <li>Price: {props.price}</li>
                <li>steps: {props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;