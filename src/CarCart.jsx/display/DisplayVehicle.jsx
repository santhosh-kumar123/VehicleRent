import React from "react";
// import { useContext } from "react";
import { useStateValue } from "../../Apis/reducer/StateContext";
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
    <div className={Styles.displayVehiclediv1}>
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
            style={{ height: "270px", width: "270px",border:"none" }}
            src={photos}
            alt=""
          />
        </li>
        <li>
          <h3 style={{ float: "left", marginTop: "10px" }}>₹{rent}</h3>
        </li>
        <li>
          {" "}
          <button
            style={{ float: "right", marginTop: "0px" }}
            onClick={addToBasket}
          >
            Select Vehicle
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DisplayVehicle;
