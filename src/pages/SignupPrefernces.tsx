import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPrefernces.module.css";
const SignupPrefernces: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLogInClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signupPrefernces}>
      <div className={styles.signupPreferncesChild} />
      <div className={styles.joinAsAnOrganisationOrVolParent}>
        <div className={styles.joinAsAnContainer}>
          <span>{`Join as an `}</span>
          <span className={styles.organisation}>Organisation</span>
          <span>{` or `}</span>
          <span className={styles.organisation}>Volunteer</span>
        </div>
        <button className={styles.imAnLookingForVolunteersParent}>
          <div className={styles.imAnLookingContainer}>
            <p className={styles.imAn}>{`I’m an  `}</p>
            <p className={styles.imAn}>looking for Volunteers</p>
          </div>
          <img className={styles.iconS1} alt="" src="/icon-s-1@2x.png" />
          <div className={styles.organisationWrapper}>
            <div className={styles.organisation1}>Organisation</div>
          </div>
        </button>
        <button
          className={styles.imALookingForAssignmentsParent}
          onClick={onFrameButton1Click}
        >
          <div className={styles.imALooking}>I’m a looking for Assignments</div>
          <img className={styles.iconT1} alt="" src="/icon-t-1@2x.png" />
          <div className={styles.volunteerWrapper}>
            <div className={styles.volunteer1}>Volunteer</div>
          </div>
        </button>
        <div className={styles.alreadyHaveA}>{`Already have a account? `}</div>
        <button className={styles.logIn} onClick={onLogInClick}>
          <span className={styles.span}>{` `}</span>
          <b className={styles.logIn1}>Log In</b>
        </button>
      </div>
      <img className={styles.icon} alt="" src="/17-2@2x.png" />
    </div>
  );
};

export default SignupPrefernces;
