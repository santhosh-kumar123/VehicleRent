import React, { useState } from "react";
import Styles from "./myprofile.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
import {auth} from "../../../Apis/firebase/Firbase"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { async } from "@firebase/util";
const RegisterForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();
  let handleClick = async e => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast("password is not matched");
      } else {
        await createUserWithEmailAndPassword(auth,email, password);
        toast("successfully user sign up");
      }
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/");
  };
  return (
    <section className={Styles.MyProfilesection}>
      <article className={Styles.MyProfilearticle}>
        <div className={Styles.signupFrm}>
          <form action="" className={Styles.form}>
            <h1 className={Styles.title}>Register Form</h1>

            <div className={Styles.inputContainer}>
              <input
                name="name"
                type="text"
                className={Styles.input}
                placeholder="a"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
              <label for="" className={Styles.label}>
                Username
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input
                name="name"
                type="email"
                className={Styles.input}
                placeholder="a"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
              <label for="" className={Styles.label}>
                Email
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input
                name="name"
                type="text"
                className={Styles.input}
                placeholder="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
              <label for="" className={Styles.label}>
                Password
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input
                name="name"
                type="text"
                className={Styles.input}
                placeholder="a"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <label for="" className={Styles.label}>
                Confirm Password
              </label>
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className={Styles.submitBtn}
              value="RegisterForm"
            >submit</button>
            <ToastContainer />
          </form>
        </div>
      </article>
    </section>
  );
};
export default RegisterForm;
