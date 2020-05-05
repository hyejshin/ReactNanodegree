import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar (props) {
  console.log(props)
  return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">New Question</Nav.Link>
          <Nav.Link href="#pricing">Leader Board</Nav.Link>
        </Nav>
        <Navbar.Text>
            {
              `Hello, HyeJung | Logout`
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
  