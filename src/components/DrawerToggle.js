import React from "react";

import "../styles/drawerToggle.css";

const drawerToggle = props => {
  return (
    <button className="toggle-button" onClick={props.clicking}>
      <div className="tb-line" />
      <div className="tb-line" />
      <div className="tb-line" />
    </button>
  );
};

export default drawerToggle;
