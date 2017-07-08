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
            name: this.props.user.name,
            counterTime: this.props.user.stopWatchTime,
            totalTime: this.props.user.totalTime,
            averageTime: this.props.user.averageTime,
            count: this.props.user.timesSpoken,
            running: false

        };


        this.stopTimer = this.stopTimer.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.props.userUpdateHandler(this.state);
    };

    timer = () => {

        let newValue = ++this.state.counterTime;
        let newTotal = ++this.state.totalTime;
        let newFormattedTotal = this.formatTime(newTotal);
        let newFormattedCounter = this.formatTime(newValue);
        let newAverage = Math.floor(newTotal / this.state.count);
        let newAverageFormatted = this.formatTime(newAverage);

        this.setState({
            counterTime: newValue,
            totalTime: newTotal,
            formattedTime: newFormattedTotal,
            counterFormatted: newFormattedCounter,
            averageTime: newAverage,
            averageTimeFormatted: newAverageFormatted
        });

        this.props.userUpdateHandler(this.state);

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
            let newCount = ++this.state.count;
            this.setState({
                    intervalId: setInterval(this.timer, 1000),
                    count: newCount,
                    running: true
                },
            );
        } else {
            return;
        }
    };


    stopTimer = () => {

        clearInterval(this.state.intervalId);

        this.setState({
            running: false
        })
    };


    clearTimer = () => {

        this.setState({
            counterTime: 0,
            counterFormatted: '00:00:00'
        });

        this.stopTimer();
    };

    remove() {
        this.props.removeHandler((this.state.name));
    };

    render() {
        return (
            <div className="ui column four wide user-panel">
                <div className="ui padded segment grid">
                    <div className="row">
                        <div className="left floated column ">
                            <NameComponent name={ this.state.name } />
                        </div>
                        <div className="right floated column timer--remove-wrap">
                            <TimerRemoveComponent remove={ this.remove } />
                        </div>
                    </div>
                    <div className="row">
                        <StopWatchComponentContainer  startHandler={ this.startTimer } stopHandler={ this.stopTimer }
                                             clearHandler={ this.clearTimer } counterTime={ this.formatTime(this.state.counterTime) }/>
                    </div>
                    <div className="row">
                        <MetaComponentsContainer  count={ this.state.count } total={ this.formatTime(this.state.totalTime) }
                                                 average={ this.formatTime(this.state.averageTime) } />
                    </div>
                </div>
            </div>

        )
    }
};
export default UserPanelInnerContainer;
