// import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    let location = useLocation()
    useEffect(() => {
    }, [location]);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className={`${location.pathname==="/"?"active":""}`} href="/">Home</Nav.Link>
                    <Nav.Link className={`${location.pathname==="/about"?"active":""}`} href="/about">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success me-2">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;