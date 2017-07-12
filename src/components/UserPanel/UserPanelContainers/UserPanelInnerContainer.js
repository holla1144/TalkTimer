/**
 * Created by Master on 30-Jun-17.
 */
import React, { Component } from 'react';
import StopWatchComponentContainer from './StopWatchComponentsContainer';
import MetaComponentsContainer from './MetaComponentsContainer';
import TimerRemoveComponent from '../UserPanelComponents/MetaComponents/TimerRemoveComponent';
import NameComponent from '../UserPanelComponents/MetaComponents/NameComponent';

class UserPanelInnerContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false

        };

        this.timer = this.timer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.remove = this.remove.bind(this);
    }


    timer = () => {

        this.props.userTimerHandler(this.props.user.name, ++this.props.user.stopWatchTime);

    };

    formatTime = (time) => {
        /* takes time in seconds and returns a string in hh:mm:ss format*/

        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = time - (hours * 3600) - (minutes * 60);
        let result = ( hours < 10 ? "0" + hours : hours);
        result += ":" + (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds < 10 ? "0" + seconds : seconds);

        return result;
    };

    startTimer = () => {


        if (this.state.running !== true) {

            this.props.countHandle(this.props.user.name);

            this.setState({
                    intervalId: setInterval(this.timer, 1000),
                    running: true
                },
            );
        };
    };


    stopTimer = () => {

        clearInterval(this.state.intervalId);

        this.setState({
            running: false
        })
    };


    clearTimer = () => {

        this.props.user.stopWatchTime = 0;
        this.stopTimer();
    };

    remove() {
        this.props.removeHandler((this.props.user.name));


    };

    render() {
        return (
            <div className="ui column four wide user-panel">
                <div className="ui padded segment grid">
                    <div className="row">
                        <div className="left floated column ">
                            <NameComponent name={ this.props.user.name } />
                        </div>
                        <div className="right floated column timer--remove-wrap">
                            <TimerRemoveComponent remove={ this.remove } />
                        </div>
                    </div>
                    <div className="row">
                        <StopWatchComponentContainer  startHandler={ this.startTimer } stopHandler={ this.stopTimer }
                                             clearHandler={ this.clearTimer } counterTime={ this.formatTime(this.props.user.stopWatchTime) }/>
                    </div>
                    <div className="row">
                        <MetaComponentsContainer  count={ this.props.user.timesSpoken } total={ this.formatTime(this.props.user.totalTime) }
                                                 average={ this.formatTime(this.props.user.averageTime) } />
                    </div>
                </div>
            </div>

        )
    }
};
export default UserPanelInnerContainer;
