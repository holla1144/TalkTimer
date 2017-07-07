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
        console.log(this.props);
        return (
            <div className="row">
                {this.props.participants.map(function(name) {
                    return <UserPanelInnerContainer removeHandler={this.props.removeHandler} name={name} />}.bind(this)
                )}
            </div>

        )
    }

}

export default UserPanelContainer;