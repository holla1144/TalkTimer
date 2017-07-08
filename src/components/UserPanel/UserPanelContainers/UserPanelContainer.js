/**
 * Created by Master on 01-Jul-17.
 */
import React, { Component } from 'react';
import UserPanelInnerContainer from  './UserPanelInnerContainer';

class UserPanelContainer extends Component {
    constructor(props) {
        super(props);


    };

    render() {
       return (
            <div className="row">
                {this.props.participants.map(function(user, index) {
                    return <UserPanelInnerContainer key={index} userUpdateHandler={ this.props.userUpdateHandler}
                                                    removeHandler={this.props.removeHandler} user={user} />}.bind(this)
                )}
            </div>

        )
    }

}

export default UserPanelContainer;