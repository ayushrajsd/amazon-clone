import React from "react";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

const SubTotal = () => {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const checkout = () => {
    if (!user) {
      history.push("/login");
    }
  };
  const totalPrice = basket.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <small>₹</small>
        {totalPrice}
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={checkout}>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
