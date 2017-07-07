/**
 * Created by Master on 01-Jul-17.
 */
import React from 'react';

const TimerStartComponent = (props) => {
    return (<button className="ui green button" onClick={props.startClickHandler} >Start</button>)
};

export default TimerStartComponent;