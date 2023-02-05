import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Snack-A-🪵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/snacks">All Snacks</Nav.Link>
            <Nav.Link href="/snacks/newsnacks">Add New Snack</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;