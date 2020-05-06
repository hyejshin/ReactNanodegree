import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar (props) {
  console.log(props)
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
              props.authedUser
              ? 'Welcome! | logout'
              : 'login'
            }
        </Navbar.Text>
      </Navbar>
    );
  }

  function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser: authedUser,
        users: users
    }
  }
  
  
  export default connect(mapStateToProps)(NavBar);
  