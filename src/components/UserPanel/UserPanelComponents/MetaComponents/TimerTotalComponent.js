/**
 * Created by Master on 01-Jul-17.
 */
import React from 'react';

const TimerTotalComponent = (props) => {
    return (
        <div className="row">
            <p>Total Time: { props.total }</p>
        </div>    )
};

export default TimerTotalComponent;