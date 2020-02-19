import React from "react";
import { Link } from "react-router-dom";

import "../styles/navBar.css";
import logo from "../assets/n-logo.png";

import DrawerToggle from "./DrawerToggle";

const NavBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div id="three-stripes">
          <DrawerToggle clicking={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_items">
          <Link to="/">HOME</Link>

          <Link to="/google-maps">MAPS</Link>

          <Link to="/image-flip">IMG-FLIP</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
