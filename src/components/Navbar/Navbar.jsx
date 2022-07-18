import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
import {AiOutlineMenu} from "react-icons/ai"
import { SiReactos } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import {BsCartPlus} from "react-icons/bs"
import Collapsible from "react-collapsible";
const Navbar = () => {
  return (
    <section className={Styles.navbarsection}>
      <article>
        <ul className={Styles.navul}>
          <div  style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            {" "}
            <li>
              <AiOutlineMenu style={{fontSize:"22px"}}/>
              <Link to="/sidenavbar" style={{marginLeft:"20px"}}> 
                SAFAR
              </Link>
            </li>
            {/* <li>
              <Link to="/india">
                <input type="text" placeholder="India" list="h" />
                <datalist id="h">
                  <option value="India">India</option>
                  <option value="Pakisthan">Pakisthan</option>
                </datalist>
              </Link>
            </li>
            <li>
              <Link to="/location">
                <select name="" id="">
                  <option value="">Bengaluru</option>
                  <option value="">Mysore</option>
                  <option value="">Mangalore</option>
                  <option value="">Mandaya</option>
                </select>
              </Link>
            </li>
          </div>
          <div className={Styles.navdiv2}>
            <li>
              <Link to="/listofvehicles">
                <input type="text" placeholder="Vehicles" list="h1" />
                <datalist id="h1">
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                </datalist>
              </Link>
            </li> */}
            {/* <li>
              <Link style={{fontSize:"22px"}} to="/myoffers">MyOffers</Link>
            </li> */}
            {/* <li>
              <Link to="/myplans">
                <BsCartPlus/>0
              </Link>
            </li> */}
            <li>
              <Link className={Styles.myprofileLink} to="/myprofile">
                <CgProfile />
              </Link>
            </li>
          </div>
        </ul>
      </article>
    </section>
  );
};

export default Navbar;
