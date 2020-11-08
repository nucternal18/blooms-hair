import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RightNav = ({ open, setOpen }) => {

  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/' className='nav-link'>
          HOME
        </Link>
      </li>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/about-us'>ABOUT US</Link>
      </li>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/service-menu'>SERVICE MENU</Link>
      </li>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/gallery'>GALLERY</Link>
      </li>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/contact-us'>CONTACT US</Link>
      </li>
      <li className='text-white sm:text-black hover:text-blue-300 font-bold'>
        <Link to='/book-online'>BOOK ONLINE 24/7</Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 40;

  li {
    padding: 18px 10px;
    text-align: justify;
    color: #fff;
  }

  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    justify-content: start;
    align-items: flex-start;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
  }
`;

export default RightNav;
