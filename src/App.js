import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

import logo from './images/logo.webp';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';



function BasicNav() {

  const cart = useSelector((state)=> state.cart )

  let moveLinks = document.querySelectorAll(".link_nav");
  
  moveLinks.forEach((link)=>{
    link.addEventListener("click", removeActive)
  })

  function removeActive(){
    moveLinks.forEach((link)=>{
      link.classList.remove("active");
      this.classList.add("active");
      console.log(this);
    })
  }


  return (
  <>
    <Navbar className='bg_nav' expand="lg">
      <Container className='Navbar'>
        <Navbar.Brand href="/" className='logo-page'>
          <img src={logo} alt='logo-page' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-collapse'>
            <Nav className="mx-auto my-2">
              <Link className="mx-4 link_nav active" to="/">HOME</Link>
              <Link className="mx-4 link_nav" to="/shop">SHOP</Link>
              <Link className="mx-4 link_nav" to="/about">ABOUT</Link>
              <Link className="mx-4 link_nav" to="/blog">BLOG</Link>
              <Link className="mx-4 link_nav" to="/contact">CONTACT</Link>
              <Link className="mx-4 link_nav" to="/cartPage">
                <FontAwesomeIcon icon={faBasketShopping} shake size="lg" /> - <span className='cart_num'>{cart.length}</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default BasicNav;


