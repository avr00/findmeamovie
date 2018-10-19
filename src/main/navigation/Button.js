import React from "react";
import "./Button.scss";

const Button = props => (
  <div className="search-button">
    <button onClick={props.onClick}>{props.children}</button>
  </div>
);

export default Button;
