import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import ToolBar from './Navigation/ToolBar/ToolBar';

const Header = () => {

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
    
    const closeSideDrawerHandler = () => {
        setSideDrawerIsVisible(false)
    }

    

    const ToggleSideDrawer = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
  return (
    <HeaderContainer>
      <ToolBar  toggle={ToggleSideDrawer} />
      <SideDrawer
        open={!sideDrawerIsVisible}
        closed={closeSideDrawerHandler}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1em;
  font-size: 1rem;

`;
// const LogoContainer = styled(Link)`
//   width: 50%;
//   margin: 0 auto;
//   /* padding: 5px 25px 25px 25px; */

//   @media screen and (max-width: 800px) {
//     width: 50%;
//   }
// `;
// const Logo = styled.img`
//     width: 80%;
// `;
// const OptionsContainer = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media screen and (max-width: 800px) {
//     width: 90%;
//   }
// `;

// const OptionLink = styled(Link)`
//     color: black;
//     text-align: center;
//     /* padding: 12px; */
//     text-decoration: none;
//     font-size: 1rem; 
//     line-height: 25px;
//     @media screen and (max-width: 800px) {
//         font-size: 0.5rem; 
//         font-weight: bold;
        
//   }
// `;
// // const OptionDiv = styled.div`
// //     ${OptionContainerStyles}
// // `;

export default Header;