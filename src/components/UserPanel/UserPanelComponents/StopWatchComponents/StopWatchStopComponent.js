/**
 * Created by Master on 01-Jul-17.
 */
import React from 'react';

const TimerStopComponent = (props) => {
    return (<button className="ui red button" onClick={props.stopClickHandler} >Stop</button>)
};

export default TimerStopComponent;