import React from "react";
import { useStateValue } from "./StateProvider";
import Button from "./Button";

const CheckoutProduct = ({ item }) => {
  const { title, id, image, price, rating } = item;
  const [_, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: { id },
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(parseInt(rating, 10))
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
        <Button onClick={removefromBasket}>Remove from Basket</Button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
