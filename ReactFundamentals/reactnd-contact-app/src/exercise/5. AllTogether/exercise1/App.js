import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Add user: fisrt name, last name, username(unique), numerOfGames=0, if filed is empty button disabled
// Display list of users (usernames, number of games,)
// Button: Hide the Number of Games Played / Show the Number of Games Played ex) username1 played 0(*) games.

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      numberOfGames: 0
    };
  }

  onDisableHander = () => {
    return (this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '');
  }
  updateUserValue = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  onAddUserHandler = event => {
    event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      numberOfGames: 0
    }
    const duplicatedUser = this.props.users.filter(user => (user.userName === this.state.userName));
    if (duplicatedUser.length === 0) {
      this.props.addUserHandler(user);
    } else {
      alert("The user name is already exists");
    }
  }
  render() {
    return (
      <form onSubmit={this.onAddUserHandler}>
        <input name='firstName' placeholder='First Name' onChange={this.updateUserValue}></input>
        <input name='lastName' placeholder='Last Name' onChange={this.updateUserValue}></input>
        <input name='userName' placeholder='User Name' onChange={this.updateUserValue}></input>
        <button disabled={this.onDisableHander()}>Add User</button>
      </form>
    )
  }
}

const ListUser = (props) => {
  return (
    <ol>
      {props.users.map(user => (
        <li>{user.userName} played {props.showNumberOfGame? user.numberOfGames : '*'} games.</li>
      ))}
    </ol>
  )
}

class ShowNumberofGame extends Component {
  state = {
    show: true
  }
  changeShowNumberOfGame = () => {
    this.props.onShowNumberOfGame();
    this.setState(prevState => ({ show: prevState.show? false : true }))
  }
  render() {
    return (
      <button onClick={this.changeShowNumberOfGame}>
              {this.state.show? 'Hide' : 'Show'} the Number of Games Played</button>
    )
  }
}

class App extends React.Component {
  state = {
    users: [],
    showNumberOfGame: true
  };

  addUserHandler = (newUser) => {
    this.setState(oldState => ({
      users: [...oldState.users, newUser]
    }))
  };

  changeShowNumberOfGame = () => {
    this.setState(prevState => ({
      showNumberOfGame: prevState.showNumberOfGame? false : true
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddUser addUserHandler={this.addUserHandler} users={this.state.users}>Add</AddUser>
        <ShowNumberofGame onShowNumberOfGame={this.changeShowNumberOfGame}></ShowNumberofGame>
        <ListUser users={this.state.users} showNumberOfGame={this.state.showNumberOfGame}></ListUser>
      </div>
    );
  }
}

export default App;
