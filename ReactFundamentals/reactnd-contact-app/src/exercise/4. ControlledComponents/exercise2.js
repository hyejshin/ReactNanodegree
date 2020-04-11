import React from 'react';
import logo from './logo.svg';
import './App.css';

class AddItem extends React.Component {
  state = {
    value: ''
  }
  inputIsEmpty = () => {
    return this.state.value === '';
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  onAddHandler = event => {
    event.preventDefault();
    this.props.onAddHandler(this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.onAddHandler}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    )
  }
}

const DeleteItem = props => {
  return (
    <button onClick={props.onDeleteLastItem} disabled={props.buttonDisabled()}>
      Delete Last Item
    </button>
  )
}

const ListItem = props => {
  return (
    <div>
    <p className="items">Items</p>
    <ol className="item-list">
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ol>
    </div>
  )
}

class App extends React.Component {
  state = {
    items: []
  };

  addHandler = (newItem) => {
    this.setState(oldState => ({
      items: [...oldState.items, newItem],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem onAddHandler={this.addHandler}>Add</AddItem>
        <DeleteItem buttonDisabled={this.noItemsFound} onDeleteLastItem={this.deleteLastItem}></DeleteItem>
        <ListItem items={this.state.items}></ListItem>
      </div>
    );
  }
}

export default App;
