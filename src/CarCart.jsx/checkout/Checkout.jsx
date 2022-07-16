import React from "react";
// import "./Checkout.css";
// import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../Apis/reducer/StateContext";
import CheckoutProduct from "../CheckOutCar/Checkoutproduct";

function Checkout() {
   const [{ basket, user }, dispatch] = useStateValue();
console .log(basket)
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello,</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.name}
              image={item.photos}
              price={item.rent}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">{/* <Subtotal /> */}</div>
    </div>
  );
}

export default Checkout;
