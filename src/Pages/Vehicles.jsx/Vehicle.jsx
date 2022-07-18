import React from 'react'
import Styles from "./vehicle.module.css"
import { AiFillCar } from "react-icons/ai"
import {RiMotorbikeFill} from "react-icons/ri"
const Vehicle = () => {
  return (
    <section className={Styles.vehiclesection}>
      <article>
        <div className={Styles.vehiclediv1}>
          <h4>I want to rent </h4>
          <div className={Styles.vehiclediv1a}>
            <h2>
              <AiFillCar />
            </h2>
            <h3>
              <RiMotorbikeFill />
            </h3>
          </div>
        </div>
        <div className={Styles.vehiclediv2}>
          <h4>I need my vehicle near</h4>
          <input type="text" list="h2" />
          <datalist id="h2">
            <option value="Banashankari">Banashankari</option>
            <option value="Basavanagudi">Basavanagudi</option>
          </datalist>
        </div>
        <div className={Styles.vehiclediv3}>
          <h4>Select your pickup date & time</h4>
          <input type="date" placeholder="Tue,jul 05 07:30 AM" />
        </div>
        <div className={Styles.vehiclediv4}>
          <h4>Select your drop date & time</h4>
          <input type="date" placeholder="Tue,jul 15 06:30 AM" />
        </div>
        <div className={Styles.vehiclediv5}>
          <button>SEARCH</button>
        </div>
      </article>
    </section>
  );
}

export default Vehicle