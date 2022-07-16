import React from "react";
// import { useContext } from "react";
import { useStateValue } from "../Apis/reducer/StateContext";
import Styles from "./display.module.css";
const DisplayVehicle = ({ id, name, photos, rent }) => {
  //   const [{ basket }, dispatch] = useContext(StateContext);
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        photos: photos,
        rent: rent,
      },
    });
  };
  return (
    <div>
      <ul key={id}>
        <li>
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            {name}
          </h2>
        </li>
        <li>
          <img
            style={{ height: "300px", width: "300px" }}
            src={photos}
            alt=""
          />
        </li>
        <li>
          <h3>{rent}</h3>
        </li>
        <li>
          {" "}
          <button onClick={addToBasket}>Add to Basket</button>
        </li>
      </ul>
    </div>
  );
};

export default DisplayVehicle;
