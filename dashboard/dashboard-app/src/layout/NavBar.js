import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar({title}) {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>Web portal {title && '- ' + title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Users" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/users/create">Create</NavDropdown.Item>
                        <NavDropdown.Item href="/users">
                            List users
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}