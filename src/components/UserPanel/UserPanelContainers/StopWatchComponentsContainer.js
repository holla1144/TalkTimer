/**
 * Created by Master on 02-Jul-17.
 */
import React, { Component } from 'react';
import TimerDisplayComponent from '../UserPanelComponents/StopWatchComponents/StopWatchDisplayComponent';
import TimerStartComponent from '../UserPanelComponents/StopWatchComponents/StopWatchStartComponent';
import TimerStopComponent from '../UserPanelComponents/StopWatchComponents/StopWatchStopComponent';
import TimerClearComponent from '../UserPanelComponents/StopWatchComponents/StopWatchClearComponent';

class StopWatchComponentContainer extends Component {
    constructor(props) {
        super(props)
    };


    render() {
        return (
            <div className="">
                <div className="row">
                    <TimerDisplayComponent time={ this.props.counterTime }/>
                </div>
                <div className="row">
                    <div className="column">
                        <TimerStartComponent startClickHandler={ this.props.startHandler } />
                        <TimerStopComponent stopClickHandler={ this.props.stopHandler } />
                        <TimerClearComponent clearClickHandler={ this.props.clearHandler }/>
                    </div>
                </div>
            </div>

        )
    }
}

export default StopWatchComponentContainer;