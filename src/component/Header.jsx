import { useState } from 'react';
import logo from '../assets/image/mortalLogo.png';
import cart from '../assets/image/flowbite_cart-solid.png';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleLinkClick = () => {
    if (!collapsed) {
      toggleNavbar();
    }
  };

  const navigate = useNavigate()
  const gotoHome = () =>{
  navigate('/')
}

  return (
    <div>
      <Navbar expand="lg" id="wrap">
        <NavbarBrand className="me-auto d-flex justify-content-safe" onClick={gotoHome}>
          <div className="logo user-select-none">        
            <img src={logo} alt='logo' width="52.59px" height="55.56px" />   
             
          </div>
          <div className="align-self-center user-select-none logoTitle">
            MORTAL WEB
          </div>
        </NavbarBrand>
        <div className="d-flex gap-3">
          <Link to="/cart" className='nav-link cart text-center d-lg-none'>
            <img src={cart} alt="cart" className="cartImg" />
          </Link>
          <NavbarToggler onClick={toggleNavbar} className="p-2 pt-1 pb-1 navbarToggler" />
        </div>
        <Collapse isOpen={!collapsed} navbar className='justify-content-end' id="navbar">
          <ul className='navbar-nav pe-lg-4 pe-0 mt-4'>
            <NavItem className='nav-item'>
              <Link to="/" className='nav-link link text-center' onClick={handleLinkClick}>Home</Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to="/register" className='nav-link sign text-center' onClick={handleLinkClick}>Sign Up</Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to="/login" className='nav-link log text-white text-center' onClick={handleLinkClick}>Login</Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to="/cart" className='nav-link cart text-center d-lg-block d-none'>
                <img src={cart} alt="cart" width="24px" height="24px" />
              </Link>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </div>
  );
}