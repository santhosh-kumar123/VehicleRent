import React from "react";
import Styles from "./footer.module.css";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineMail, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <div className={Styles.footerdiv}>
        <div className={Styles.footerdiv1}>
          <div className={Styles.footerdiv2}>
            <h2>Drive Safelly</h2>
            <ul>
              <li href="#">
                {" "}
                <a>
                  <AiOutlineMail />
                  support@drivesafelly.com
                </a>
              </li>
              <li href="#">
                <a>
                  <GiRotaryPhone />
                  08061933715
                </a>
              </li>
              <li>
                <img
                  src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566636252_appstore.svg"
                  alt=""
                />
                <img
                  style={{ paddingLeft: "10px" }}
                  src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1566636252_appstore.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className={Styles.footerdiv3}>
            <div className={Styles.footerdiv3a}>
              <h1>COMPANY</h1>
              <ul>
                <li href="#">
                  <a>Careers</a>
                </li>
                <li href="#">
                  <a>Blog</a>
                </li>
                <li href="#">
                  <a>About Us</a>
                </li>
                <li href="#">
                  <a>Contact Us</a>
                </li>
                <li href="#">
                  <a>Be a part of Justcontent</a>
                </li>
                <li href="#">
                  <a>Become a Franchise Partner</a>
                </li>
              </ul>
            </div>
            <div className={Styles.footerdiv3a}>
              <h1>POLICIES</h1>
              <ul>
                <li href="#">
                  <a>Privacy Plices</a>
                </li>
                <li href="#">
                  <a>Rental agreement</a>
                </li>
                <li href="#">
                  <a>Rfund And cancwllation</a>
                </li>
                <li href="#">
                  <a>Going outstation?</a>
                </li>
                <li href="#">
                  <a>Terms & conditions</a>
                </li>
                <li href="#">
                  <a>Damage charges</a>
                </li>
              </ul>
            </div>
            <div className={Styles.footerdiv3c}>
              <h1>QUICK LINKS</h1>
              <ul>
                <li href="#">
                  <a>Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.footerdiv5}>
          <div className={Styles.footerdiv4}>
            <div className={Styles.footerdiv4a}>
              <p>© 2020 Drivezy, Inc. All rights reserved.</p>
            </div>
            <div className={Styles.footerdiv4b}>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <ImInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
