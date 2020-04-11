import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: ''
  }
  // mirrorText = (value) => {
  //   this.setState(() => ({
  //     text: value
  //   }))
  // }
  mirrorText = (event) => {
    this.setState({text: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {/* <input type="text" placeholder="Say Something" 
                 onChange={(event) => this.mirrorText(event.target.value)}/> */}
          <input type="text" placeholder="Say Something" 
                 value={this.state.text} onChange={this.mirrorText}/>
          <p className="echo">Echo:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
