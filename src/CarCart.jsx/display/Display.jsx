import React from "react";
import { useState } from "react";
import json from "./store.json";
import Styles from "./display.module.css";
import DisplayVehicle from "./DisplayVehicle";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useStateValue } from "../../Apis/reducer/StateContext";
const Display = () => {
  let [state, setState] = useState(json);
  let [search, setSearch] = useState("");
  console.log(state);
   const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <div className={Styles.displaydiv1}>
        <Link style={{ textDecoration: "none" }} to="/check">
          <h1>Store</h1>
        </Link>
        <input
          type="text"
          value={search}
          placeholder="search cars"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <h3
            style={{
              fontSize: "32px",
              color: "black",
              position: "relative",
              top: "10px",
            }}
          >
            <AiOutlineShoppingCart />
            <sup
              style={{
                color: "black",
                position: "absolute",
                top: "-20px",
                fontSize: "22px",
                left: "10px",
              }}
            >
              {basket?.length}
            </sup>
          </h3>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <div className={Styles.Displaydiv1a}>
          <h3>choose car color</h3>
          <table>
            <tr>
              <td>
                <input
                  type="radio"
                  name="vehicle"
                  value="RED"
                  onChange={e => setSearch(e.target.value)}
                  id="color"
                />
              </td>
              <td>
                {" "}
                <h3>Red</h3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  name="vehicle"
                  value="BLUE"
                  onChange={e => setSearch(e.target.value)}
                  id="color"
                />
              </td>
              <td>
                {" "}
                <h3>Blue</h3>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="radio"
                  name="vehicle"
                  value="WHITE"
                  onChange={e => setSearch(e.target.value)}
                  id="color"
                />
              </td>
              <td>
                <h3>White</h3>
              </td>
            </tr>
          </table>
        </div>

        {/* *********************************************************************************** */}
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <div className={Styles.Displaydiv1a}>
            <h3>Choose Vehicle</h3>
            <table>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="vehicle"
                    value="CAR"
                    onChange={e => setSearch(e.target.value)}
                    id="color"
                  />
                </td>
                <td>
                  {" "}
                  <h3>Car</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="vehicle"
                    value="BIKE"
                    onChange={e => setSearch(e.target.value)}
                    id="color"
                  />
                </td>
                <td>
                  {" "}
                  <h3>Bike</h3>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="radio"
                    name="vehicle"
                    value="FLIGHT"
                    onChange={e => setSearch(e.target.value)}
                    id="color"
                  />
                </td>
                <td>
                  <h3>Flight</h3>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        className={Styles.displaydiv2}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          // paddingLeft: "350px",
        }}
      >
        {state
          .filter(val => {
            if (search == "") {
              return val;
            } else if (
              val.name.toLowerCase().startsWith(search.toLowerCase()) ||
              val.color.toLowerCase().includes(search.toLowerCase())||val.vehicle.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map(val => {
            let { photos, name, rent, id } = val;
            return (
              <DisplayVehicle photos={photos} name={name} rent={rent} id={id} />
              // <ul>
              //   <li>
              //     <h2
              //       style={{
              //         textAlign: "center",
              //         // fontFamily: "sans-serif",
              //         fontSize: "25px",
              //       }}
              //     >
              //       {name}
              //     </h2>
              //   </li>
              //   <li>
              //     <img
              //       style={{ height: "300px", width: "300px" }}
              //       src={photos}
              //       alt=""
              //     />
              //   </li>
              //   <li>
              //     <h3>{rent}</h3>
              //   </li>
              //   <li></li>
              // </ul>
            );
          })}
      </div>
    </div>
  );
};

export default Display;
