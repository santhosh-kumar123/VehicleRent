import React from "react";
import Styles from "./landing.module.css";

const Landingpage = () => {
  return (
      <section className={Styles.landingsec}>
      <article className={Styles.landart}>
              <div className={Styles.rightcon}>
          <h1>BENGALURU AIRPORT RIDES</h1>
          <br />

          <img src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566567805_Ridesat449.svg"></img>
          <p>
            Bengaluru airport rides made easy with Drivezy. No need to book an{" "}
            expensive cab to or from Bengaluru airport. Hire a one-way car to{" "}
            from Bengaluru airport and drive yourself at half the price.
          </p>
                  <button className={Styles.btnclass}>Know More</button>
        </div>

              <div className={Styles.landsec2}>
          <img src="	https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1565086561_iPhoneXTemplate%402x.png"></img>
        </div>
      </article>
    </section>
  );
};

export default Landingpage;
