/**
 * Created by Master on 02-Jul-17.
 */
import React from 'react';

const TimerCountComponent = (props) => {
    return (
        <div className="row">
            <p>Times Spoken: {props.count}</p>
        </div>
    )
};

export default TimerCountComponent;