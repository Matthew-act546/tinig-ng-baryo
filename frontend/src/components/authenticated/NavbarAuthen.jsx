import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { auth } from "../../../config/firebase";
function NavbarUnauthen() {

  async function handleLogout() {
      try {
        await auth.signOut();
        window.location.href = "/";
        console.log("User logged out successfully!");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
  
  return (
    <>

      <Navbar expand="lg" fixed="top" className="navbar-transparent">
        <Container>
          <Navbar.Brand > <Link to={'/AuthenticatedLogged'} style={{textDecoration: 'none'}}>Tinig ng baryo</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ms-auto">
              <Nav.Link href="#link">Verfied Now</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/ViewProfile" className="text-decoration-none"> View Profile </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarUnauthen
