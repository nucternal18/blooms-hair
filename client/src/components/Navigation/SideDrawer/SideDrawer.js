// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import  './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';


const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (!props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <div>
            <BackDrop show={!props.open} click={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <LogoContainer to='/'>
                <Logo src={logo} alt='logo' />
            </LogoContainer>
                
            <NavigationItems />
            </div>
        </div>
    );
}

const LogoContainer = styled(Link)`
  width: 50%;
  /* padding: 5px 25px 25px 25px; */
`;

const Logo = styled.img`
    width: 70%;
`;


export default sideDrawer;
