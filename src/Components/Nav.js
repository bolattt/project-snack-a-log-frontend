import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="py-4" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "1.4rem" }}>
            Snack-A-🪵
          </Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: "1.2rem" }}>
            <Nav.Link href="/snacks">All Snacks</Nav.Link>
            <Nav.Link href="/snacks/newsnack">Add New Snack</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
