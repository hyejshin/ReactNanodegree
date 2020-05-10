import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends Component {
  logoutHandler = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render() {
    const { authedUser, user } = this.props
    return (
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/newQuestion">New Question</Nav.Link>
            <Nav.Link href="/leaderBoard">Leader Board</Nav.Link>
          </Nav>
          <Navbar.Text>
              {
                authedUser
                ? <div>{`Welcome ${user.name} |`}
                  <div onClick={this.logoutHandler}>logout</div></div>
                : <Nav.Link href="/login">login</Nav.Link>
              }
          </Navbar.Text>
        </Navbar>
      );
  }
}

  function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser,
        user: users[authedUser] || {},
    }
  }
  
  
  export default connect(mapStateToProps)(NavBar);
  