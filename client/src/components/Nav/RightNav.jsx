import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


//context
// import { AuthContext } from "../../context/authContext";

const RightNav = ({ open, setOpen }) => {
  // const authContext = useContext(AuthContext);

  // const { isAuthenticated, logout } = authContext;
  return (
    <Ul open={ open } onClick={ () => setOpen(!open) }>
      <li>
        <Link to='/'>HOME</Link>
      </li>
      <li>
        <Link to='/about-us'>ABOUT US</Link>
      </li>
      <li>
        <Link to='/service-menu'>SERVICE MENU</Link>
      </li>
      <li>
        <Link to='/special-offers'>SPECIAL OFFERS</Link>
      </li>
      <li>
        <Link to='/contact-us'>CONTACT US</Link>
      </li>
      <li>
        <Link to='/book-online'>BOOK ONLINE 24/7</Link>
      </li>
      {/* { isAuthenticated && (
        <li onClick={() => logout()}>ESCI</li>
      )} */}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  z-index: 40;

  li {
    padding: 18px 10px;
    color: #333;

    &:hover {
      color: #60baf7;
    }
  }

  Link {
    color: #333;
  }

  @media (max-width: 650px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
    li {
      color: #fff;
    }
  }
`;

export default RightNav;
