// @ts-nocheck
import React from 'react';
import './ToolBar.css';
import logo from '../../../logo.svg';
import NavigationalItems from '../NavigationItems/NavigationItems';
import ToggleHandler from '../SideDrawer/ToggleHandler/ToggleHandler'


const ToolBar = (props) => (

    <header className="ToolBar">
        <ToggleHandler clicked={props.toggle} className="logoMenu"/>
        <div className="logo-container">
            <img src={logo} alt="blooms hair logo"/>
        </div>
        <nav>
            <NavigationalItems />
        </nav>
    </header>
)



export default ToolBar;