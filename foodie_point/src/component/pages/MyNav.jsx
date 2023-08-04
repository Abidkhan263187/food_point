import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { updateCords } from '../redux/api';
import { useDispatch } from 'react-redux';
import { cityName } from '../redux/action';
import { Card, Col, Image } from 'react-bootstrap';
import logo from '../images/dawat-logo.png'



export const MyNav=()=> {
  const[search,setSearch]=useState('')

  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(cityName(search))
    dispatch(updateCords(search))
    setSearch('')
  }
    return (
      <Navbar id="navbar" expand="lg" className="p-3" >
          <Container fluid>
         
          <Image  id="logo" src="https://cdn-icons-png.flaticon.com/128/209/209116.png" rounded />
     
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} id="navA" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} id="navA" to="/restaurant" >
              Restaurants
            </Nav.Link>
            <Nav.Link as={Link} id="navA" to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} id="navA" to="/contact">
              Contact
            </Nav.Link>
          
           
          </Nav>
              <Form className="d-flex">
                <Form.Control
            
                  type="search"
                  placeholder="search here"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <Button variant="outline-success"id="navA" style={{backgroundColor:'green'}} onClick={handleClick}>Search</Button>
              
              
              </Form>
              <Nav>
                <Nav.Link id="navA" as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

