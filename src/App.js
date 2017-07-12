import React, { Component } from 'react';
import AddUserContainer from './components/AddUser/AddUserContainers/AddUserContainer';
import UserPanelContainer from './components/UserPanel/UserPanelContainers/UserPanelContainer';
import HeaderComponent from './components/HeaderComponent';
import User from './classes/UserClass';
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
     this.addUser = this.addUser.bind(this);
     this.removeUser = this.removeUser.bind(this);
     this.timerHandleChange = this.timerHandleChange.bind(this);
     this.countHandleChange = this.countHandleChange.bind(this);
 }

 componentWillMount() {

     if (localStorage.getItem('talkTimerData') !== null) {

         let oldData = JSON.parse(localStorage.getItem('talkTimerData'));

         let participantsArray = [];

         for (let user of oldData) {
             let userInstance = new User(user.name, user.stopWatchTime, user.averageTime, user.timesSpoken, user.totalTime);
             participantsArray.push(userInstance);
         }

         this.setState({
             participants: participantsArray
         })
     }
 }

 inputHandleChange(e) {
     let newVal = e.target.value;
     this.setState({ inputValue: newVal});
 }

 setLocalStorage() {
     localStorage.setItem('talkTimerData', JSON.stringify(this.state.participants));
 }

 countHandleChange(name) {
     console.log("count handle change called");
     let userIndex;

     for (let [index, user] of this.state.participants.entries()) {
         if (user.name === name) {

             userIndex = index;

             let participantCopy = this.state.participants[userIndex];

             participantCopy.updateTimesSpoken();

             let newParticipantsArray = this.state.participants;

             newParticipantsArray[userIndex] = participantCopy;

             this.setState({
                 participants: newParticipantsArray
             });

             this.setLocalStorage();
         }

     }

 }

 timerHandleChange(name, newCounterTime) {

     let userIndex;

     for (let [index, user] of this.state.participants.entries()) {

         if (user.name === name) {

             userIndex = index;

             let participantCopy = this.state.participants[userIndex];

             let newTotalTime = ++participantCopy.totalTime;

             let newAverageTime = Math.floor(newTotalTime / participantCopy.timesSpoken);

             participantCopy.updateStopWatchTime(newCounterTime);

             participantCopy.updateAverageTime(newAverageTime);

             participantCopy.updateTotalTime(newTotalTime);

             let newParticipantsArray = this.state.participants;

             newParticipantsArray[userIndex] = participantCopy;

             this.setState({
                participants: newParticipantsArray
             });

             this.setLocalStorage();
        }
     }
 }

 addUser() {

     if (this.state.inputValue !== '') {

         let newUser = new User(this.state.inputValue, 0, 0, 0, 0);
         this.state.participants.push(newUser);
         this.setState({ inputValue: ''});
     }

 }

 removeUser(nameToRemove){

    let nameIndex;

    for (let [index, user] of this.state.participants.entries()) {
        if (user.name === nameToRemove) {
            nameIndex = index;
        }
    }

     let participants = this.state.participants;

     participants.splice(nameIndex, 1);

     this.setState({
         participants: participants
     });

     this.setLocalStorage();
 };

  render() {
    return (
        <div className="ui padded grid">
            <HeaderComponent />
            <AddUserContainer inputOnChange={this.inputHandleChange} inputValue={this.state.inputValue} addBtnOnClick={this.addUser} />
            <UserPanelContainer countHandleChange={ this.countHandleChange } userTimerHandler={ this.timerHandleChange } removeHandler={this.removeUser} participants={this.state.participants} />
        </div>
    );
  }
}

export default App;
