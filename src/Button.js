import React from "react";

const Button = (props) => {
  return (
    <button className="amazon_button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
