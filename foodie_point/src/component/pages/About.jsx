import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Footer } from './Footer';


 export const About = () => {
  return (
    <div className="about-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="about-heading">About Us</h2>
            <p className="about-text">
              Welcome to Dawat App, your ultimate destination for delicious and
              diverse culinary experiences! We believe that great food brings people
              together, and we're on a mission to make ordering your favorite meals
              as easy as a few taps on your device.
            </p>
            {/* Carousel */}
            <Carousel className="carousel-container">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1.5x/cbbc/What-will-you-eat-for-Eid-index_v2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2019/10/kids-food.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            {/* End of Carousel */}
            <p className="about-text">
              Our team is passionate about connecting you with a wide range of
              restaurants, cafes, and eateries from around the city. Whether you're
              craving comfort food, exploring international flavors, or looking for
              a quick bite, we've got you covered.
            </p>
            <p className="about-text">
              What sets us apart is our commitment to quality and convenience. We work
              tirelessly to ensure that every order is prepared with care and delivered
              to your doorstep fresh and hot. With our user-friendly app, you can browse
              menus, customize orders, and track deliveries in real-time.
            </p>
            <p className="about-text">
              Thank you for being a part of the [Your App Name] community. We're excited
              to serve you and enhance your dining experiences. Feel free to reach out
              to us with any feedback or suggestions – we'd love to hear from you!
            </p>
            <p className="about-text">
              Stay hungry, stay curious, and keep discovering new flavors with us.
            </p>
          </Col>
        </Row>
      </Container>
     <Footer/>
    </div>
  );
};


