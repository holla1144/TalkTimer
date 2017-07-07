/**
 * Created by Master on 01-Jul-17.
 */
import React from 'react';

const TimerClearComponent = (props) => {
    return (<button className="ui blue button" onClick={props.clearClickHandler} >Clear</button>)
};

export default TimerClearComponent;