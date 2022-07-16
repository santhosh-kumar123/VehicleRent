import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Axios } from "../../Apis/Axios";

const Delete = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    let fetchUser = async () => {
      let { data } = await Axios.get("users");
      setUser(data);
      console.log(data);
    };
    fetchUser();
  }, []);
  let handleEdit = id => {
    window.location.assign(`/Edit/${id}`);
  };
  let handleclick = id => {
    try {
      Axios.delete(`users/${id}`);
    } catch (error) {
      console.log(error);
    }
    window.location.assign("/Delete");
  };
  return (
    <div>
      <table
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "25px",
          color: "#777",
          flexFlow:"wrap",
          
        }}
        border={1}
        cellPadding="10px"
        cellSpacing="0px"
      >
        <thead
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "25px",
            color: "#777",
          }}
        >
          <th>Car Name :</th>
          <th>Car Type </th>
          <th>Car Model</th>
          <th>Car Rent Price :</th>
          <th>Car Photos </th>
        </thead>
        <tbody>
          {user.map(val => {
            let { id, name, type, model, rent, photos } = val;
            return (
              <tr
                style={{
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontSize: "25px",
                  color: "#777",
                }}
                key={id}
              >
                <td>{name}</td>
                <td>{type}</td>
                <td>{model}</td>
                <td>{rent}</td>
                <td>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src={photos}
                    alt=""
                  />
                </td>
                <td onClick={() => handleEdit(id)}>
                  {" "}
                  <button
                    style={{
                      margin: "10px",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Edit
                  </button>{" "}
                </td>
                <td onClick={() => handleclick(id)}>
                  <button
                    style={{
                      margin: "10px",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;
