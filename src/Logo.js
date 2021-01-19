import React from "react";
import { Link } from "react-router-dom";
const Logo = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo"
      src="../public/img/amazon_transparent.png"
    />
  </Link>
);

export default Logo;
