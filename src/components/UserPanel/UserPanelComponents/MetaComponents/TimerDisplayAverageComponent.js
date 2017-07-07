/**
 * Created by Master on 02-Jul-17.
 */
import React from 'react';

const TimerDisplayAverageComponent = (props) => {
    return (
        <div className="row">
            <p>Average Time Spoken: {props.average}</p>
        </div>
    )
};

export default TimerDisplayAverageComponent;