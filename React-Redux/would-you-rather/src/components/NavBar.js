import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/question">New Question</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/newQuestion">New Question</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/leaderBoard">Leader Board</NavLink></Nav.Link>
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
  