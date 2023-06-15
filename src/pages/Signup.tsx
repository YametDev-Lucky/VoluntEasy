import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
const Signup: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/complete-signup");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <div className={styles.signupChild} />
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
        <div className={styles.frame}>
          <div className={styles.matDividermatDivider} />
          <div className={styles.span}>
            <div className={styles.or}>or</div>
          </div>
        </div>
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
        <button className={styles.continueWrapper} onClick={onFrameButtonClick}>
          <div className={styles.continue}>Continue</div>
        </button>
        <div className={styles.alreadyHaveAContainer}>
          <span
            className={styles.alreadyHaveA}
          >{`Already have a account? `}</span>
          <b className={styles.logIn}>Log In</b>
        </div>
        <b className={styles.createFreeAccount}>Create Free account</b>
      </div>
      <button className={styles.continueWithGoogleParent}>
        <b className={styles.continueWithGoogle}>Continue with Google</b>
        <img className={styles.svgIcon} alt="" src="/svg.svg" />
      </button>
      <img className={styles.icon} alt="" src="/17-2@2x.png" />
    </div>
  );
};

export default Signup;
