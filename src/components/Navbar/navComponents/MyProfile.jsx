import React, { useState } from "react";
import Styles from "./myprofile.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {auth} from "../../../Apis/firebase/Firbase"
const MyProfile = () => {
  let [name, setName] = useState("")
    let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();
  let handleClick = async(e) => {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        toast("password is not matched")
      }
      else {
        await signInWithEmailAndPassword(auth, email, password)
        toast("successfully user sign up")
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
    // setName("")
    // setEmail("")
    // setPassword("");
    // setConfirmPassword("")
    
  }
  return (
    <section className={Styles.MyProfilesection}>
      <article className={Styles.MyProfilearticle}>
        <div className={Styles.signupFrm}>
          <form action="" className={Styles.form}>
            <h1 className={Styles.title}>Sign up</h1>

            <div className={Styles.inputContainer}>
              <input
              name="name"
                type="text"
                className={Styles.input}
                placeholder="username"
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
                placeholder="email"
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
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <label for="" className={Styles.label}>
                Confirm Password
              </label>
            </div>

            <input
              type="submit"
              onClick={handleClick}
              className={Styles.submitBtn}
              value="Sign up"
            />
            <ToastContainer />
          </form>
        </div>
      </article>
    </section>
  );
};
export default MyProfile;
