import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { fakeAuth } from './App'

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
              fakeAuth.isAuthenticated === false
              ? 'Welcome! | logout'
              : 'login'
            }
        </Navbar.Text>
      </Navbar>
    );
  }

  function mapStateToProps ({ users }) {
    return {
        users: users
    }
  }
  
  
  export default NavBar;
  