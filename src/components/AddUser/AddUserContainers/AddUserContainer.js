/**
 * Created by Master on 07-Jul-17.
 */
import React, { Component } from 'react';
import InputComponent from './../AddUserComponents/InputComponent';
import AddComponent from './../AddUserComponents/AddComponent';

class AddUserContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="centered column eight wide">
                    <InputComponent onChange={ this.props.inputOnChange } value={ this.props.inputValue } />
                    <AddComponent onClick={ this.props.addBtnOnClick } />
                </div>
            </div>
        )
    }
};

export default AddUserContainer;