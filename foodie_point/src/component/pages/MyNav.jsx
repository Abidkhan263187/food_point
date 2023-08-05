import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { updateCords } from '../redux/api';
import { useDispatch } from 'react-redux';
import { cityName } from '../redux/action';
import { Image, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const MyNav = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const { cartItems } = useSelector((store) => store)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(cityName(search))
    dispatch(updateCords(search))
    // navigate('/restaurant')
    setSearch('')
  }
  return (
    <Navbar id="navbar" expand="lg" className="p-3" >
      <Container fluid>

        <Link to={'/'}> <Image id="logo" src="https://cdn-icons-png.flaticon.com/128/209/209116.png" rounded /></Link>

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
              placeholder="search your city"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" id="navA" style={{ backgroundColor: '#198754' }} onClick={handleClick}>Search</Button>


          </Form>
          <NavLink as={Link} to="/cart" className="d-flex align-items-center text-decoration-none position-relative">
            <BsFillCartFill className="text-success" style={{ fontSize: '2.5rem', marginLeft: '10px' }} />
            <div className="position-absolute top-50 start-50 mx-2 translate-middle text-white" style={{ fontSize: "small", fontWeight: "700" }}>
              {cartItems.length}
            </div>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

