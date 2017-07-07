/**
 * Created by Master on 01-Jul-17.
 */
import React, { Component } from 'react';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.text = "Add Person";
    }

    render() {
        return (
            <div className="">
                <button className="positive ui right floated button" onClick={this.props.onClick}>{this.text}</button>
            </div>
        )
    }
}

export default AddComponent;