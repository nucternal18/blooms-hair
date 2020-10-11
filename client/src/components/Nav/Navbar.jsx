import React from "react";
import Burger from "./Burger";
import logo from '../../logo.svg'

import styled from "styled-components";



const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="container mx-auto py-2 px-2">
        <nav className="w-full flex flex-row sm:flex-col justify-between md:justify-center sm:items-center">
          <div className="w-48 p-0 m-0 ">
            <img src={logo} alt="via roma non solo pizza logo" />
          </div>
          <Burger />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
