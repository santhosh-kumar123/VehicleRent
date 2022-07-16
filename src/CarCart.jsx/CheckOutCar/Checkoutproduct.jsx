import React from "react";
// import "./Checkoutproduct.css";
import { useStateValue } from "../../Apis/reducer/StateContext";

function CheckoutProduct({ id, photos, name, rent, color, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div>
      <p>{id}</p>
      <img src={photos} alt="img" />

      <div>{name}</div>

      <strong>{rent}</strong>
      {/* {!hideButton && ( */}
        <button onClick={removeFromBasket}>Remove from cart</button>
      {/* )} */}
    </div>
  );
}

export default CheckoutProduct;
