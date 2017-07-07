/**
 * Created by Master on 01-Jul-17.
 */
import React from 'react';

const TimerDisplayComponent = (props) =>{
    return (
        <div className="row">
            <div className="column">
                <div className="ui center aligned basic segment">
                    <h1>{props.time}</h1>
                </div>
            </div>
        </div>
    )
};

export default TimerDisplayComponent;