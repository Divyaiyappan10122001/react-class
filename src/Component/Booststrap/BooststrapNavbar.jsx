// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const BooststrapNavbar = () => {
// card image
    const cards = [
      { id: 1, title: 'Card 1', text: 'This is the first card.', img: 'https://via.placeholder.com/150'},
      { id: 2, title: 'Card 2', text: 'This is the second card.', img: 'https://via.placeholder.com/150'},
      { id: 3, title: 'Card 3', text: 'This is the third card.', img: 'https://via.placeholder.com/150'},
      { id: 4, title: 'Card 4', text: 'This is the fourth card.', img: 'https://via.placeholder.com/150'},
      { id: 5, title: 'Card 5', text: 'This is the fifth card.', img: 'https://via.placeholder.com/150'},
      { id: 6, title: 'Card 6', text: 'This is the sixth card.', img: 'https://via.placeholder.com/150'},
    ]

    const slides = [
      { id: 1, title: 'Slide 1', text: 'This is the first Slide.', img: 'https://via.placeholder.com/800x400'},
      { id: 2, title: 'Slide 2', text: 'This is the second Slide.', img: 'https://via.placeholder.com/800x400'},
      { id: 3, title: 'Slide 3', text: 'This is the third Slide.', img: 'https://via.placeholder.com/800x400'},
    ]


  return (
      <>

      {/* navbar */}
  <div>
  <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>


      {/* carousel slider */}

<div>
<Carousel>
  {slides.map((slide)=>(

      <Carousel.Item key={slide.id}>
        <img className='d-block w-100' src={slide.img} alt={slide.title} />

        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>

        
        </Carousel.Caption>
      </Carousel.Item>
  ))}
        
    </Carousel>
</div>


      {/* cards */}
<div>
<Container className="my-4">
      
      <Row className='g-4'>
        {cards.map((card)=>(
          <Col md={4}  key={card.id}>
            <Card>
              <Card.Img  variant='top'src={card.img} alt={card.title}  />
              <Card.Body>
                <Card.Title> {card.title}</Card.Title>
                <Card.Text>
                  {card.text}
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
</div>


          {/* footer */}
<div>
<footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={2}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Who We Are</a></li>
              <li><a href="#!" className="text-light">Our Values</a></li>
              <li><a href="#!" className="text-light">Careers</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Web Design</a></li>
              <li><a href="#!" className="text-light">Development</a></li>
              <li><a href="#!" className="text-light">Marketing</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Help Center</a></li>
              <li><a href="#!" className="text-light">FAQs</a></li>
              <li><a href="#!" className="text-light">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-light">Facebook</a></li>
              <li><a href="#!" className="text-light">Twitter</a></li>
              <li><a href="#!" className="text-light">Instagram</a></li>
              <li><a href="#!" className="text-light">LinkedIn</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe</h5>
            <p>Get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-2"
              />
              <button className="btn btn-primary w-100">Subscribe</button>
            </form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 Your Company. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
</div>

    </>
  );
}


export default BooststrapNavbar;