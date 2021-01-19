import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import HeaderNav from "./Headernav";
const Header = () => (
  <div className="header">
    <Logo />
    <SearchBox />
    <HeaderNav />
  </div>
);

export default Header;
