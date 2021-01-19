import React from "react";
import { useStateValue } from "./StateProvider";
import Button from "./Button";

const Product = ({ id, title, rating, image, price }) => {
  const [_, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(parseInt(rating, 10))
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="product 1" />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
};

export default Product;
