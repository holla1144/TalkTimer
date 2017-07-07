/**
 * Created by Master on 01-Jul-17.
 */
import React, { Component } from 'react';

class InputComponent extends Component {


    render() {
        return (
            <div className="ui fluid input name-input--wrap">
                <input className="" type="text" onChange={this.props.onChange} value={this.props.value} />
            </div>)
    }

}

export default InputComponent;