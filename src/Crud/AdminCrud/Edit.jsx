import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../Apis/Axios";

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
    <form onSubmit={UpdateUser}>
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

export default Edit;
