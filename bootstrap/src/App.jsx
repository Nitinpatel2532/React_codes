import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import mountain from "./assets/mountain.jpg"

function App() {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      



      <Container>
      <Row>
        <Col xs={6} md={4}>
            <Image src={mountain} width={300} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={mountain} width={300} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={mountain} width={300} thumbnail />
        </Col>
      </Row>
      </Container>
      


      <Container>
        <Row>

        <Col>
          first coloumn
        </Col>
        <Col>
          second column
        </Col>

        </Row>
        
    </Container>
    </>

  )
}
export default App