import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.frameParent}>
        <TextField
          className={styles.frameChild}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="email"
          label="Enter your Email"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.frameItem}
          sx={{ width: 543 }}
          color="secondary"
          variant="outlined"
          type="password"
          label="Password"
          size="medium"
          margin="none"
        />
        <div className={styles.frame}>
          <div className={styles.matDividermatDivider} />
          <div className={styles.span}>
            <div className={styles.or}>or</div>
          </div>
        </div>
        <div className={styles.logInWrapper}>
          <div className={styles.logIn}>Log In</div>
        </div>
        <b className={styles.newUser}>{`New User ? `}</b>
        <button className={styles.signUp} onClick={onSignUpClick}>
          <span className={styles.signUpTxtContainer}>
            <span className={styles.span1}>{` `}</span>
            <span className={styles.signUp1}>Sign Up</span>
          </span>
        </button>
        <b className={styles.forgetPassword}>Forget Password ?</b>
        <button className={styles.frame1}>
          <button className={styles.spansnButtonContent}>
            <img
              className={styles.matIconmatIcon}
              alt=""
              src="/maticonmaticon.svg"
            />
            <b className={styles.continueWithLinkedin}>
              Continue with LinkedIn
            </b>
          </button>
          <div className={styles.spanmatRipple} />
        </button>
      </div>
      <button className={styles.continueWithGoogleParent}>
        <b className={styles.continueWithGoogle}>Continue with Google</b>
        <img className={styles.svgIcon} alt="" src="/svg.svg" />
      </button>
      <img className={styles.icon} alt="" src="/17-2@2x.png" />
    </div>
  );
};

export default Login;
