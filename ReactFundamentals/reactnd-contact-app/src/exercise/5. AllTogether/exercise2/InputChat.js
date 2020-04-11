import React, { Component } from 'react';

class InputChat extends Component {
    state = {
        text: ''
    }
    isDisabled = () => {
        return this.state.text === '';
    }
    onChangeHandler = event => {
        this.setState({text: event.target.value})
    }
    onAddMessageHandler = event => {
        event.preventDefault();
        this.props.addMessage({username: this.props.username, text: this.state.text});
        event.target[0].value = '';
    }
    render() {
        return (
            <div>
            <form className="input-group" onSubmit={this.onAddMessageHandler}>
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.onChangeHandler}/>
                <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                </button>
                </div>
            </form>
            </div>
        );
    }
}

export default InputChat;
