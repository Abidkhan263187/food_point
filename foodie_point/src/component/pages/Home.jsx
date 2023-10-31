import React from 'react';
import { Navbar, Container, Nav, Card, Button, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer';
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <SectionOne />
      <SectionTwo/>
       {/* Featured Section */}
       <section className="py-5 text-center">
        <Container>
          <h1 className="display-8">Delicious Food</h1>
          <p className="lead">Explore our mouthwatering dishes</p>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <Card>
                <Card.Img variant="top" src="https://sukhis.com/app/uploads/2022/05/image2-3-1024x684.jpg" />
                <Card.Body>
                  <Card.Title>North Indian</Card.Title>
                  <Card.Text>Enjoy our signature dish</Card.Text>
                  <Link to={'/restaurant'}> <Button variant="outline" style={{ backgroundColor: "#6da617", color: "white" }} onClick={() => navigate('/restaurant')} >Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3">
              <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBmb29kfGVufDB8fDB8fHww&w=1000&q=80" />
                <Card.Body>
                  <Card.Title>American</Card.Title>
                  <Card.Text>Savor the flavors</Card.Text>
                  <Link to={'/restaurant'}> <Button variant="outline" style={{ backgroundColor: "#6da617", color: "white" }} onClick={() => navigate('/restaurant')} >Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3">
              <Card>
                <Card.Img variant="top" src="https://sukhis.com/app/uploads/2022/04/image3-4.jpg" />
                <Card.Body>
                  <Card.Title>South Indian</Card.Title>
                  <Card.Text>Experience food heaven</Card.Text>
                  <Link to={'/restaurant'}> <Button variant="outline" style={{ backgroundColor: "#6da617", color: "white" }} onClick={() => navigate('/restaurant')} >Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
        <div  id="carousal">
        <Carousel  className='mt-3 mb-3 p-40'>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
            alt="Second slide"

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
            alt="fourth slide"

          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 img-fluid"
            src="https://images.ctfassets.net/iw4cawak30d4/iTaVucVWGjWCRnclFOJFB/687115b3dc00f74aa01694879229cd38/220805_HarvestBowls_F24-BKBEAN_F25-GADO_F26-GRAIN_HERO_Desktop_3936x1800.jpg"
            alt="First slide"

          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/food-pro/9-cup-optimization/hero-masthead--desktop2.jpg?fit=constrain&fmt=jpg&hei=970&resMode=sharp2&utc=2021-09-29T15:14:27Z&wid=2800"
            alt="Third slide"

          />
        </Carousel.Item>

      </Carousel>
        </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};


