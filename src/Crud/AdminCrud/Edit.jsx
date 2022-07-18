import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../Apis/Axios";
import Styles from "./create.module.css";

const Edit = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [model, setModel] = useState("");
  let [rent, setRent] = useState("");
  let [photos, setPhotos] = useState("");

  let { id } = useParams();
  let fetchUsers = async () => {
    let { data } = await Axios.get(`users/${id}`);
    let { name, type, model, rent, photos } = data;
    setName(name);
    setType(type);
    setModel(model);
    setRent(rent);
    setPhotos(photos);
  };
  let UpdateUser = async e => {
    e.preventDefault();
    try {
      let payload = { name, type, model, rent, photos };
      await Axios.put(`users/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
    navigate("/Delete");
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className={Styles.CreateDiv1}>
      <form onSubmit={UpdateUser}>
        <div className={Styles.CreateDiv1a}>
          <table>
            <caption
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              Add the NEW CAR Details
            </caption>
            <tr>
              {" "}
              <td>
                {" "}
                <label>Car Name :</label>
              </td>{" "}
              <td>
                <input
                  type="text"
                  // id="idname"
                  value={name}
                  placeholder="add name"
                  onChange={e => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                {" "}
                <label>Car Type:</label>
              </td>{" "}
              <td>
                <input
                  type="text"
                  // id="idname"
                  value={type}
                  placeholder="add type"
                  onChange={e => setType(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                <label>Car Model :</label>
              </td>{" "}
              <td>
                <input
                  type="text"
                  id="idname"
                  value={model}
                  placeholder="add model"
                  onChange={e => setModel(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                {" "}
                <label>Car Rent Price :</label>
              </td>{" "}
              <td>
                <input
                  type="text"
                  id="idname"
                  value={rent}
                  placeholder="add rent"
                  onChange={e => setRent(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                <label>Car Photos :</label>
              </td>{" "}
              <td>
                <input
                  type="text"
                  id="idname"
                  value={photos}
                  placeholder="add photos"
                  onChange={e => setPhotos(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className={Styles.CreateDiv1b}>
                  <button type="submit">submit</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Edit;
