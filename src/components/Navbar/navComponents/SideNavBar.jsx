import React from "react";
import { Link } from "react-router-dom";
import Styles from "./sidebar.module.css";
import { FaHome } from "react-icons/fa"
import { RiAdminLine } from "react-icons/ri"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
const SideNavBar = () => {
  return (
    <section className={Styles.sidebarSection}>
      
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"120px"}} className={Styles.sidediv1}>
        <ul className={Styles.sideul}>
          <li>
            <ul>
              <li>
                <Link to="/myoffers">
                  <FaHome />
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  <RiAdminLine />
                  <a>Admin</a>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <AiOutlineUsergroupAdd />
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
