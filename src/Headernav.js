import React from "react";
import { Link, useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const HeaderNav = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  console.log("basket", basket);
  console.log("user", user);

  const login = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "EMPTY_BASKET",
      });
    }
  };

  return (
    <div className="header__nav">
      <Link className="header__link" to={!user && "/login"}>
        <div className="header__options" onClick={login}>
          <span className="header__optionOne">Hello {user?.email}</span>
          <span className="header__optionTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__options">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__options">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
      </Link>
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket ">
          <ShoppingCartIcon />
          <span className="header__optionTwo header__optionBasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderNav;
