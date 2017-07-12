/**
 * Created by Master on 01-Jul-17.
 */
import React, { Component } from 'react';
import UserPanelInnerContainer from  './UserPanelInnerContainer';

class UserPanelContainer extends Component {

    render() {
       return (
            <div className="row">
                {this.props.participants.map(function(user, index) {
                    return <UserPanelInnerContainer key={index} countHandle={ this.props.countHandleChange } userTimerHandler={ this.props.userTimerHandler}
                                                    removeHandler={this.props.removeHandler} user={user} />}.bind(this)
                )}
            </div>

        )
    }

}

export default UserPanelContainer;