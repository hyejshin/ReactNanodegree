import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const questionPool = this.makeNewQuestion();
    state = {
      value1: questionPool[0],
      value2: questionPool[1],
      value3: questionPool[2],
      proposedAnswer: questionPool[3],
      numQuestions: 0,
      numCorrect: 0
    }
  }
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
  submitAnswer = (answer) => {
    let correctAnswer = false;
    if(this.state.value1 + this.state.value2 + this.state.value3 == this.state.proposedAnswer) {
      correctAnswer = true;
    }
    const questionPool = this.makeNewQuestion();
    this.setState((prevState) => ({
      value1: questionPool[0],
      value2: questionPool[1],
      value3: questionPool[2],
      proposedAnswer: questionPool[3],
      numQuestions: prevState.numQuestions + 1,
      numCorrect: prevState.numCorrect + (answer == correctAnswer? 1 : 0)
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.submitAnswer(true)}>True</button>
          <button onClick={()=>this.submitAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
