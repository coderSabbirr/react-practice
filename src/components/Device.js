import React from 'react';
import Config from './config/Config';

const Device = (props) => {
    return (
        <div>
            <h3>MY Device: {props.name}</h3>
            <h4>My current steps: {props.steps}</h4>
            <Config price={props.price} steps={props.steps}></Config>
        </div>
    );
};

export default Device;