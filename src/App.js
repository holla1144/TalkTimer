import React, { Component } from 'react';
import AddUserContainer from './components/AddUser/AddUserContainers/AddUserContainer';
import UserPanelContainer from './components/UserPanel/UserPanelContainers/UserPanelContainer';
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import './Semantic-UI-CSS-master/semantic.css';

class App extends Component {
 constructor(props) {
     super(props);
     this.state = {
         participants: [],
         inputValue: ''
     };

     this.inputHandleChange = this.inputHandleChange.bind(this);
     this.addComponentClickHandler = this.addComponentClickHandler.bind(this);
     this.removeUser = this.removeUser.bind(this);
 }


 inputHandleChange(e) {
     let newVal = e.target.value;
     this.setState({ inputValue: newVal});
 }

 addComponentClickHandler() {

     if (this.state.inputValue !== '') {
         this.state.participants.push(this.state.inputValue);
         this.setState({ inputValue: ''});
     }

 }

 removeUser(nameToRemove){

     let nameIndex = this.state.participants.indexOf(nameToRemove);

     let participants = this.state.participants;

     participants.splice(nameIndex, 1);

     this.setState({
         participants: participants
     })

 };

  render() {
    return (
        <div className="ui padded grid">
            <HeaderComponent />
            <AddUserContainer inputOnChange={this.inputHandleChange} inputValue={this.state.inputValue} addBtnOnClick={this.addComponentClickHandler} />
            <UserPanelContainer removeHandler={this.removeUser} participants={this.state.participants} />
        </div>
    );
  }
}

export default App;
