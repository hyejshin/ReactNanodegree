import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DisplayChat from './DisplayChat';
import InputChat from './InputChat';

/*
The messages they send to each other should
appear in both chat windows. On Amy's screen, her messages should appear in green and
John's messages should appear in blue. On John's screen, his messages should appear in
green and Amy's messages should appear in blue.
*/

class App extends Component {
  users = [{ username: 'Amy' }, { username: 'John' }, { username: 'HyeJung' }];
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }
  addMessageHandler = (newMessage) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        {this.users.map(user => {
          return (
            <div className="container">
              <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <DisplayChat messages={this.state.messages} username={user.username}></DisplayChat>
                <InputChat username={user.username} addMessage={this.addMessageHandler}></InputChat>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
