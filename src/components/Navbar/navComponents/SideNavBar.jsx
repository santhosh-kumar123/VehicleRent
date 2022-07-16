import React from "react";
import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Collapsible from "react-collapsible";
const SideNavBar = () => {
  return (
    <section className={Styles.sidebarSection}>
      <li>
        <Link to="#">
          <GiHamburgerMenu />
          MyStore
        </Link>
      </li>
      <div className={Styles.sidediv1}>
        <ul className={Styles.sideul}>
          <li>
            <ul>
              <li></li>
              <li>
                <Link to="/myoffers">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/myoffers">
                  <a>Admin</a>
                </Link>
              </li>
              <li>
                <Link to="/myoffers">
                  <a>User</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideNavBar;
