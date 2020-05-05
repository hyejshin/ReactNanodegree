import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'
import {fakeAuth} from './App'

class Login extends Component {
    state = {
        redirectToReferrer: false,
        loginId: ''
    }
    selectChange = (e) => {
        const loginId = e.target.value
        this.setState(() => ({
            loginId
        }))
    }
    handleLogin = (e) => {
        e.preventDefault()
        const { loginId } = this.state
        console.log(loginId)
        if (loginId === '') {
            return
        }
        console.log(loginId)
        //const { dispatch } = this.props
        //dispatch(handleSetAuthedUser(loginId))
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }
    render() {
        const { users } = this.props;
        const { redirectToReferrer } = this.state;
        const { from } = this.props.location.state || { from: {pathname: '/' }}

        if (redirectToReferrer === true) {
            return (
                <Redirect to={from} />
            )
        }

        return (
        <Card className="Login">
            <Card.Header>
                <h4>Welcome to the Would You Rather App!{from.pathname}</h4>
                <h5>Please sign in to continue</h5>
            </Card.Header>
            <Card.Body>
                <img src={logo} className="App-logo" alt="log"/>
                <Card.Title>Sign in</Card.Title>
                <Form onSubmit={this.handleLogin}>
                    <Form.Control as="select" onChange={this.selectChange}>
                        <option value='' style={{color:"grey"}}>Select User</option>
                        {Object.entries(users).map(([id, user]) => (
                            <option value={id} key={id}>{user.name}</option>
                        ))}
                    </Form.Control>
                    <Button variant="info" type="submit" className="submit" block>Sign in</Button>
                </Form>
            </Card.Body>
        </Card>
        )
    }
  }

  function mapStateToProps ({ users }) {
    return {
        users: users
    }
  }
  
  export default connect(mapStateToProps)(Login);
  