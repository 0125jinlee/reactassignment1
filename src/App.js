import React, { Component } from 'react';
import './App.css';

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput">
        <p>Type a new username:</p><input type="text" onChange={this.props.changed} value={this.props.initialValue} />
      </div>
    );
  }
}

class UserOutput extends Component {
  render() {
    return (
      <div className="UserOutput">
        <p>The username is</p>
        <p><b>{this.props.username}</b></p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    usernames: [
      {username: "Jinwon"},
      {username: "Yewon"},
      {username: "Junghyun"}
    ]
  }

  stateManipulator = () => {
    this.setState({
      usernames: [
        {username: "Jin"},
        {username: "Ye"},
        {username: "Jung"}
      ]
    })
  }

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        {username: event.target.value},
        {username: this.state.usernames[1].username},
        {username: this.state.usernames[2].username}
      ]
    })
  }

  render() {
    const style = {
      margin: '15px auto auto auto',
      background: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '10px'
    }

    return (
      <div className="App">
        <button style={style} onClick={this.stateManipulator}>Manipulate All Usernames!</button>
        <UserOutput username={this.state.usernames[0].username}  />
        <UserInput changed={this.usernameChangeHandler} initialValue={this.state.usernames[0].username}></UserInput>
        <UserOutput username={this.state.usernames[2].username} />
        <UserInput initialValue={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
        <UserInput initialValue={this.state.usernames[2].username} />
        
        {/* <ol>
          <h1>Assignment 1 Instruction</h1>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>       */}
      </div>
    );
  }
}

export default App;
