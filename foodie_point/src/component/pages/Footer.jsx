import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import { IoCard, IoLogoPaypal } from 'react-icons/io5';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <FaPhone className="mr-4 mx-3"  />
             
              <p className="mb-0">Phone: +91 62-8000-7521</p>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center">
              <a href="#" className="text-light mx-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-light mx-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-light mx-3"><FaInstagram size={24} /></a>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center">
              <IoCard size={24} className="text-light mx-2" />
              <IoLogoPaypal size={24} className="text-light mx-2" />
              <p className="mb-0 ml-2">Accepted Payment Methods</p>
            </div>
            <p className="text-center mb-0 mt-2">© {new Date().getFullYear()} develop bu Abid khan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


