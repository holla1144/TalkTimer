/**
 * Created by Master on 03-Jul-17.
 */
import React from 'react';

const TimerRemoveComponent = (props) => {
    return (<span className="timer--remove-span">
                <h1 className="timer--remove-span-elem" onClick={props.remove}>X</h1>
            </span>)

};

export default TimerRemoveComponent;