// src/App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Card,
  Row,
  Col,
  Button,
  Badge,
  Carousel,
  Form,
  Modal,
} from "react-bootstrap";
import {
  House,
  Person,
  Cart,
  Search,
  Star,
  StarFill,
  Heart,
  HeartFill,
  InfoCircle,
  Envelope,
} from "react-bootstrap-icons";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [favorites, setFavorites] = useState([false, false, false]);
  const [ratings, setRatings] = useState([4, 5, 3]);

  const products = [
    {
      id: 1,
      title: "Premium Headphones",
      description:
        "Experience crystal-clear sound with noise cancellation technology. Perfect for music lovers and professionals.",
      price: 199.99,
      features: ["Wireless", "40hr battery", "Noise cancellation"],
    },
    {
      id: 2,
      title: "Smart Watch Pro",
      description:
        "Track your fitness, receive notifications, and make payments with this stylish smartwatch.",
      price: 299.99,
      features: ["Heart rate monitor", "GPS", "Water resistant"],
    },
    {
      id: 3,
      title: "Wireless Earbuds",
      description:
        "Compact and powerful earbuds with seamless connectivity and impressive battery life.",
      price: 129.99,
      features: ["True wireless", "24hr battery", "Voice assistant"],
    },
  ];

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handleShowModal = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <StarFill key={i} className="text-warning me-1" />
      ) : (
        <Star key={i} className="text-secondary me-1" />
      )
    );
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <House className="me-2" />
            <span className="fw-bold">TechShop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Form className="d-flex me-2">
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">
                  <Search />
                </Button>
              </Form>
              <Button
                variant="outline-light"
                className="me-2 position-relative"
              >
                <Cart />
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  3
                </Badge>
              </Button>
              <Button variant="primary">
                <Person className="me-1" /> Sign In
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <Carousel fade className="mb-5">
        <Carousel.Item>
          <div className="d-block w-100 bg-dark" style={{ height: "400px" }}>
            <div className="d-flex justify-content-center align-items-center h-100 text-white">
              <div className="text-center">
                <h1 className="display-4 fw-bold">Summer Tech Sale</h1>
                <p className="fs-4">Up to 40% off on all premium gadgets</p>
                <Button variant="warning" size="lg">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bg-primary" style={{ height: "400px" }}>
            <div className="d-flex justify-content-center align-items-center h-100 text-white">
              <div className="text-center">
                <h1 className="display-4 fw-bold">New Arrivals</h1>
                <p className="fs-4">Check out our latest innovative products</p>
                <Button variant="light" size="lg">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Main Content */}
      <Container className="mb-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Featured Products</h2>
          <p className="text-muted">Discover our top-rated tech gadgets</p>
          <div className="d-flex justify-content-center">
            <div
              className="bg-primary"
              style={{ width: "80px", height: "4px" }}
            ></div>
          </div>
        </div>

        {/* Cards */}
        <Row xs={1} md={3} className="g-4">
          {products.map((product, index) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/400/300?tech=${index}`}
                    alt={product.title}
                    className="object-fit-cover"
                    style={{ height: "200px" }}
                  />
                  <Button
                    variant={favorites[index] ? "danger" : "outline-secondary"}
                    className="position-absolute top-0 end-0 m-2 rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => toggleFavorite(index)}
                  >
                    {favorites[index] ? <HeartFill /> : <Heart />}
                  </Button>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">{product.title}</Card.Title>
                    <Badge bg="success" className="fs-6">
                      New
                    </Badge>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    {renderStars(ratings[index])}
                    <span className="ms-2 text-muted">
                      ({ratings[index]}.0)
                    </span>
                  </div>
                  <Card.Text className="text-muted flex-grow-1">
                    {product.description}
                  </Card.Text>
                  <div className="mb-3">
                    <ul className="list-unstyled">
                      {product.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center">
                          <span className="text-primary me-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <h4 className="text-primary mb-0">${product.price}</h4>
                    <div>
                      <Button
                        variant="outline-primary"
                        className="me-2"
                        onClick={() => handleShowModal(product)}
                      >
                        <InfoCircle className="me-1" /> Details
                      </Button>
                      <Button variant="primary">
                        <Cart className="me-1" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Newsletter Section */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h3 className="mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-muted mb-4">
            Stay updated with our latest products and exclusive offers
          </p>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="w-50 me-2"
            />
            <Button variant="primary">Subscribe</Button>
          </Form>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="mb-3">TechShop</h5>
              <p className="text-white-50">
                Your one-stop destination for the latest tech gadgets and
                accessories. Quality products at competitive prices.
              </p>
              <div className="d-flex">
                <Button variant="outline-light" size="sm" className="me-2">
                  <i className="bi bi-facebook"></i>
                </Button>
                <Button variant="outline-light" size="sm" className="me-2">
                  <i className="bi bi-twitter"></i>
                </Button>
                <Button variant="outline-light" size="sm" className="me-2">
                  <i className="bi bi-instagram"></i>
                </Button>
                <Button variant="outline-light" size="sm">
                  <i className="bi bi-linkedin"></i>
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#home"
                    className="text-white-50 text-decoration-none"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-white-50 text-decoration-none"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white-50 text-decoration-none"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white-50 text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white-50 text-decoration-none">
                    FAQ
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="mb-3">Contact Us</h5>
              <ul className="list-unstyled text-white-50">
                <li className="d-flex align-items-center mb-2">
                  <Envelope className="me-2" /> support@techshop.com
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone me-2"></i> +1 (555) 123-4567
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-geo-alt me-2 mt-1"></i>
                  <span>123 Tech Street, Innovation City, IC 12345</span>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4" />
          <p className="text-center text-white-50 mb-0">
            © {new Date().getFullYear()} TechShop. All rights reserved.
          </p>
        </Container>
      </footer>

      {/* Product Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{activeProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeProduct && (
            <Row>
              <Col md={6}>
                <img
                  src={`https://picsum.photos/500/400?tech=${activeProduct.id}`}
                  alt={activeProduct.title}
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center mb-3">
                  {renderStars(ratings[activeProduct.id - 1])}
                  <span className="ms-2 text-muted">
                    ({ratings[activeProduct.id - 1]}.0)
                  </span>
                </div>
                <p className="lead">${activeProduct.price}</p>
                <p>{activeProduct.description}</p>
                <h5>Features:</h5>
                <ul>
                  {activeProduct.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="d-flex mt-4">
                  <Button variant="primary" className="me-2 flex-grow-1">
                    <Cart className="me-1" /> Add to Cart
                  </Button>
                  <Button variant="outline-secondary">
                    <Heart />
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
