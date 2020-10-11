import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


//context
// import { AuthContext } from "../../context/authContext";

const RightNav = ({ open, setOpen }) => {
  const [ selectedHome, setSelectedHome ] = useState(false);
  const [ selectedAbout, setSelectedAbout ] = useState(false);
  const [ selectedMenu, setSelectedMenu ] = useState(false);
  const [ selectedOffers, setSelectedOffers ] = useState(false);
  const [ selectedContact, setSelectedContact ] = useState(false);
  const [ selectedBook, setSelectedBook ] = useState(false);

  const handleSlectedHome = (e) => {
    e.preventDefault();
    setSelectedHome(true);
    setSelectedAbout(false);
    setSelectedMenu(false);
    setSelectedOffers(false);
    setSelectedContact(false);
    setSelectedBook(false);
  }
  const handleSlectedAbout = (e) => {
    e.preventDefault();
    setSelectedHome(false);
    setSelectedAbout(true);
    setSelectedMenu(false);
    setSelectedOffers(false);
    setSelectedContact(false);
    setSelectedBook(false);
  }
  const handleSlectedMenu = (e) => {
    e.preventDefault();
    setSelectedHome(false);
    setSelectedAbout(false);
    setSelectedMenu(true);
    setSelectedOffers(false);
    setSelectedContact(false);
    setSelectedBook(false);
  }
  const handleSlectedOffers = (e) => {
    e.preventDefault();
    setSelectedHome(false);
    setSelectedAbout(false);
    setSelectedMenu(false);
    setSelectedOffers(true);
    setSelectedContact(false);
    setSelectedBook(false);
  }
  const handleSlectedContact = (e) => {
    e.preventDefault();
    setSelectedHome(false);
    setSelectedAbout(false);
    setSelectedMenu(false);
    setSelectedOffers(false);
    setSelectedContact(true);
    setSelectedBook(false);
  }
  const handleSlectedBook = (e) => {
    e.preventDefault();
    setSelectedHome(false);
    setSelectedAbout(false);
    setSelectedMenu(false);
    setSelectedOffers(false);
    setSelectedContact(false);
    setSelectedBook(true);
  }
  

  // const authContext = useContext(AuthContext);

  // const { isAuthenticated, logout } = authContext;
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <li
        onClick={handleSlectedHome}
        className={
          selectedHome
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
        <Link to='/'>HOME</Link>
      </li>
      <li
        onClick={handleSlectedAbout}
        className={
          selectedAbout
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
        <Link to='/about-us'>ABOUT US</Link>
      </li>
      <li
        onClick={handleSlectedMenu}
        className={
          selectedMenu
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
        <Link to='/service-menu'>SERVICE MENU</Link>
      </li>
      <li
        onClick={handleSlectedOffers}
        className={
          selectedOffers
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
        <Link to='/special-offers'>SPECIAL OFFERS</Link>
      </li>
      <li
        onClick={handleSlectedContact}
        className={
          selectedContact
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
        <Link to='/contact-us'>CONTACT US</Link>
      </li>
      <li
        onClick={handleSlectedBook}
        className={
          selectedBook
            ? "text-blue-700 font-bold"
            : "text-white sm:text-black hover:text-blue-300 font-bold"
        }
      >
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
