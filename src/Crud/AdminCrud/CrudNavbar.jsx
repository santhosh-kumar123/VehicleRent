import React from "react";
import { Link } from "react-router-dom";
import Styles from "./crudNavbar.module.css"
const CrudNavbar = () => {
  return (
    <div className={Styles.CrudNavbardiv}>
      <ul className={Styles.CrudNavbarul}>
        <li>
          {" "}
          <Link to="/Create">Create</Link>
        </li>
        <li>
          <Link to="/Delete">Delete</Link>
        </li>
        <li style={{ display: "none" }}>
          <Link to="/Edit/:id">Edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default CrudNavbar;
