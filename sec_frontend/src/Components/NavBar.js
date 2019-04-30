import React from 'react';
import { Navbar, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AppNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/store"><Nav.Link>Store</Nav.Link></LinkContainer>
                </Nav>
                <Form inline>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <LinkContainer to="/login"><NavDropdown.Item >Login</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/signup"><NavDropdown.Item>Create</NavDropdown.Item></LinkContainer>
                </NavDropdown>
                </Form>
            </Navbar>
        )
    }
}
export default AppNav;