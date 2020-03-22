import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './NavigationItems';;

const navigationItems = () => (
  <OptionsContainer>
    <OptionLink to='/'>HOME</OptionLink>
    <OptionLink to='/about-us'>ABOUT US</OptionLink>
    <OptionLink to='/service-menu'>SERVICE MENU</OptionLink>
    <OptionLink to='/special-offers'>SPECIAL OFFERS</OptionLink>
    <OptionLink to='/contact-us'>CONTACT US</OptionLink>
    <OptionLink to='/book-online'>BOOK ONLINE 24/7</OptionLink>
  </OptionsContainer>
);

const OptionsContainer = styled.div`
  width: 90%;
  max-width: 990px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 475px) {
    width: 90%;
    margin-top: 1em;
    display: flex-end;
    flex-direction: column;
  }
`;

const OptionLink = styled(Link)`
  color: black;
  text-align: center;
  /* padding: 12px; */
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 672px) {
    font-size: 1rem;
    &:hover {
      background: blue;
    }
  }
  @media screen and (max-width: 475px) {
    margin-top: 0.5em;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    border-bottom-style: solid;
    border-width: 0.1em;
  }
`;




export default navigationItems;
