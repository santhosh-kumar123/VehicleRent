import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Apis/Axios";
const Create = () => {
  let navigate=useNavigate()
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [model, setModel] = useState("");
  let [rent, setRent] = useState("");
  let [photos, setPhotos] = useState("");
  let fetchUser = async e => {
    e.preventDefault();
    try {
      let payload = { name, type,model,rent,photos };
      await Axios.post("users", payload);
    } catch (error) {
      console.log(error);
    }
    navigate("/Delete")
  };
  return (
    <form onSubmit={fetchUser}>
      <div>
        <label htmlFor="">Car Name :</label>
        <input
          type="text"
          id="idname"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Car Type:</label>
        <input
          type="text"
          id="idname"
          value={type}
          onChange={e => setType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Car Model :</label>
        <input
          type="text"
          id="idname"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Car Rent Price :</label>
        <input
          type="text"
          id="idname"
          value={rent}
          onChange={e => setRent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Car Photos :</label>
        <input
          type="text"
          id="idname"
          value={photos}
          onChange={e => setPhotos(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Create;
