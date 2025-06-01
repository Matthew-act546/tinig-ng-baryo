import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarUnauthen() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="navbar-transparent">
        <Container>
          <Navbar.Brand href="#home" className='fw-medium text-white'>Tinig ng Baryo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-2 ">
              <Nav.Link className='text-white' href="#home">Home</Nav.Link>
              <Nav.Link className='text-white' href="#about">About us</Nav.Link>
              <Nav.Link className='text-white' href="#howtouse">How to use?</Nav.Link>
              <Nav.Link className='text-white' href="#contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarUnauthen
