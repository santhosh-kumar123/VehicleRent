import React from "react";
import Styles from "./myprofile.module.css";
const MyProfile = () => {
  return (
    <section className={Styles.MyProfilesection}>
      <article className={Styles.MyProfilearticle}>
        <div className={Styles.signupFrm}>
          <form action="" className={Styles.form}>
            <h1 className={Styles.title}>Sign up</h1>

            <div className={Styles.inputContainer}>
              <input type="text" className={Styles.input} placeholder="a" />
              <label for="" className={Styles.label}>
                Email
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input type="text" className={Styles.input} placeholder="a" />
              <label for="" className={Styles.label}>
                Username
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input type="text" className={Styles.input} placeholder="a" />
              <label for="" className={Styles.label}>
                Password
              </label>
            </div>

            <div className={Styles.inputContainer}>
              <input type="text" className={Styles.input} placeholder="a" />
              <label for="" className={Styles.label}>
                Confirm Password
              </label>
            </div>

            <input type="submit" className={Styles.submitBtn} value="Sign up" />
          </form>
        </div>
      </article>
    </section>
  );
};
export default MyProfile;
