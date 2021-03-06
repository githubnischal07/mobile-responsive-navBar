import React from "react";
import { Link } from "react-router-dom";
import "../styles/sideDrawer.css";

const SideDrawer = props => {
  //USing this so that if props=show in app.js is true
  //then, the class changes from "side-drawer" to
  // side-drawer open.... But in .css its
  //.side-drawer.open
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Roman</Link>
        </li>
        <li>
          <Link to="/google-maps">Google</Link>
        </li>
        <li>
          <Link to="/image-flip">Image</Link>
        </li>
        <li>
          <Link to="/noPage">Something</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
