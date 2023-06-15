import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import styles from "./CompleteSignup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/auth";

interface RootState {
  auth : {
    isLoggedIn : boolean
  }
}

const CompleteSignup: FunctionComponent = () => {

  const username : String = String(useState(""));
  const email : String = String(useState(""));
  const password : String = String(useState(""));
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignup = ( ev: React.MouseEvent<HTMLButtonElement> ) => {
    ev.preventDefault();
    
    console.log("Signup");
    dispatch(
      register(
        username,
        email,
        password
      ) as any
    )
      .then(() => {
        navigate("/dashboard");
      })
  }


  return (
    <div className={styles.completeSignup}>
      <div className={styles.completeSignupChild} />
      <div className={styles.frameParent}>
        <button className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign Up</div>
        </button>
        <div className={styles.alreadyHaveAContainer}>
          <span
            className={styles.alreadyHaveA}
          >{`Already have a account? `}</span>
          <b className={styles.logIn}>Log In</b>
        </div>
        <div className={styles.frame}>
          <div className={styles.byClickingSign}>
            By clicking Sign Up, you agree to
          </div>
          <div className={styles.amatFocusIndicator}>
            <div className={styles.spanmatRipple} />
            <b className={styles.termsOfUse}>Terms of Use</b>
          </div>
          <div className={styles.amatFocusIndicator1}>
            <div className={styles.spanmatRipple1} />
            <b className={styles.privacyPolicy}>Privacy Policy</b>
          </div>
          <div className={styles.and}>and</div>
        </div>
        <TextField
          className={styles.frameChild}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="text"
          label="First Name"
          size="medium"
          margin="none"
          value={ username }
        />
        <TextField
          className={styles.frameItem}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="text"
          label="Last Name"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.frameTextfield}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="password"
          label="Create Password"
          size="medium"
          margin="none"
          value={ password }
        />
        <TextField
          className={styles.frameInner}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          size="medium"
          margin="none"
        />
      </div>
      <img className={styles.icon} alt="" src="/17-2@2x.png" />
      <b className={styles.completeSignUp} onClick={userSignup}>
        Complete Sign Up
      </b>
    </div>
  );
};

export default CompleteSignup;
