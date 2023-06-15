import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVolunteerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOrganizationClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='organsationsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/signup-prefernces");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/signup-prefernces");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/signup-prefernces");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <img className={styles.icon} alt="" src="/5-2@2x.png" />
        <button className={styles.volunteer} onClick={onVolunteerClick}>
          Volunteer
        </button>
        <button className={styles.organization} onClick={onOrganizationClick}>
          Organization
        </button>
        <button className={styles.about} onClick={onAboutClick}>
          About
        </button>
        <button className={styles.signUpWrapper} onClick={onFrameButtonClick}>
          <div className={styles.signUp}>Sign Up</div>
        </button>
        <button className={styles.loginWrapper} onClick={onFrameButton1Click}>
          <div className={styles.login}>Login</div>
        </button>
      </div>
      <div className={styles.homeChild} />
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.voluntParent}>
              <div className={styles.volunt}>
                <b>V</b>
                <span>olunt</span>
              </div>
              <div className={styles.text}>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
            </div>
            <div className={styles.eering}>eering</div>
            <div className={styles.made}>made</div>
            <div className={styles.unlockYourFullContainer}>
              <span className={styles.unlockYourFullPotentialAnd}>
                <span>
                  <span
                    className={styles.unlockYourFull}
                  >{`Unlock your full `}</span>
                  <span className={styles.potential}>potential</span>
                  <span>{` and make a real           difference in the world by `}</span>
                  <span className={styles.potential}>{`volunteering `}</span>
                </span>
                <span className={styles.yourSkills}>your skills</span>
              </span>
              <span className={styles.yourSkills}>
                <span>{` `}</span>
              </span>
            </div>
            <button
              className={styles.joinNowWrapper}
              onClick={onFrameButton2Click}
            >
              <div className={styles.joinNow}>Join now</div>
            </button>
            <div className={styles.asyParent}>
              <div className={styles.asy}>asy</div>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.iconA1Wrapper}>
          <img className={styles.iconA1} alt="" src="/icon-a-1@2x.png" />
        </div>
      </div>
      <div className={styles.volunteersParent} data-scroll-to="frameContainer1">
        <div className={styles.volunteers}>Volunteers</div>
        <div className={styles.growYourselfAndContainer}>
          <p
            className={styles.blankLine}
          >{`Grow yourself and access to a wide range volunteering   `}</p>
          <p className={styles.blankLine}>
            {" "}
            opportunities that match your interest and schedule
          </p>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.recognitionParent}>
            <div className={styles.recognition}>Recognition</div>
            <div
              className={styles.receiveFeedbackFrom}
            >{`Receive feedback from organisations and share your achievements `}</div>
          </div>
          <img className={styles.iconD1} alt="" src="/icon-d-1@2x.png" />
          <div className={styles.employabilityParent}>
            <div className={styles.employability}>Employability</div>
            <div
              className={styles.gainValuableExperience}
            >{`Gain valuable experience in meaningful assignments `}</div>
          </div>
          <img className={styles.iconD2} alt="" src="/icon-d-2@2x.png" />
          <div className={styles.developmentParent}>
            <div className={styles.development}>Development</div>
            <div
              className={styles.gainGrowthIn}
            >{`Gain growth in personal and professional development `}</div>
          </div>
          <img className={styles.iconC1} alt="" src="/icon-c-1@2x.png" />
          <div className={styles.opportunityParent}>
            <div className={styles.recognition}>Opportunity</div>
            <div className={styles.accessAWideContainer}>
              <p className={styles.blankLine}>
                Access a wide range of opportunities to suit
              </p>
              <p className={styles.blankLine}>{` your skills and interest `}</p>
            </div>
          </div>
          <img className={styles.iconB1} alt="" src="/icon-b-1@2x.png" />
        </div>
        <img className={styles.iconN1} alt="" src="/icon-n-1@2x.png" />
      </div>
      <div className={styles.findSkillsVolunteers}>
        Find skills volunteers for any assignments
      </div>
      <div className={styles.organsations} data-scroll-to="organsationsText">
        Organsations
      </div>
      <button
        className={styles.getStartedWrapper}
        onClick={onFrameButton3Click}
      >
        <div className={styles.getStarted}>Get Started</div>
      </button>
      <div className={styles.frameParent2}>
        <div className={styles.recognitionParent}>
          <div className={styles.reviewVolunteerPerformance}>
            Review Volunteer Performance
          </div>
          <div className={styles.reviewTheVolunteer}>
            Review the volunteer performance for others to view
          </div>
        </div>
        <div className={styles.employabilityParent}>
          <div className={styles.communicateWithVolunteers}>
            Communicate with Volunteers
          </div>
          <div className={styles.connectAndChat}>
            Connect and chat with your volunteers
          </div>
        </div>
        <div className={styles.developmentParent}>
          <div className={styles.receiveVolunteer}>Receive Volunteer</div>
          <div className={styles.reviewVolunteerProfiles}>
            Review volunteer profiles to enhance your team
          </div>
        </div>
        <div className={styles.opportunityParent}>
          <div className={styles.postVolunteerAssignments}>
            Post Volunteer Assignments
          </div>
          <div className={styles.shareYourAssignmentContainer}>
            <p className={styles.blankLine}>
              Share your assignment with volunteer community
            </p>
          </div>
        </div>
        <img className={styles.iconM1} alt="" src="/icon-m-1@2x.png" />
        <img className={styles.iconL1} alt="" src="/icon-l-1@2x.png" />
        <img className={styles.iconK1} alt="" src="/icon-k-1@2x.png" />
        <img className={styles.iconJ1} alt="" src="/icon-j-1@2x.png" />
      </div>
      <div className={styles.aboutParent} data-scroll-to="frameContainer">
        <div className={styles.about1}>About</div>
        <div className={styles.welcomeToOurContainer}>
          <p className={styles.blankLine}>
            Welcome to our platform, a company that was founded with the goal of
            making the world a better place by increasing volunteerism. Our
            mission is to connect volunteers with organisations that are making
            a positive impact in their communities and beyond.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            We believe that volunteering is one of the most powerful ways to
            make a positive impact in the world. It allows individuals to give
            back to their communities, gairl new skills, and build meaningful
            relationships with others who share their passion for creating
            positive change.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Our platform is designed to make volunteering easier and more
            accessible than ever before. We work with a wide range of
            organisations, from large charities to small grassroots initiatives,
            to help them find the volunteers they need to achieve their goals.
            We also offer a range of tools and resources to help volunteers find
            opportunities that match their interests and skills, and to make the
            most of their volunteering experience.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            At the heart of everything we do is our commitment to making a
            difference in the world. We believe that by connecting volunteers
            with organisations that are working to create positive change, we
            can we can help to build stronger, more resilient communities and
            make a lasting impact on the world around us.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Thank you for joining us on this journey, and for your commitment to
            making the world a better place through Volunteasy, volunteering
            made easy!
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.iconO1Parent}>
          <button className={styles.iconO1} />
          <button className={styles.iconP1} />
          <button className={styles.iconQ1} />
          <img className={styles.iconR1} alt="" src="/icon-r-1@2x.png" />
          <div className={styles.volunteasytermsAndCondition}>
            2023 Volunteasy|Terms and conditions |Privacy policy
          </div>
        </div>
        <img className={styles.icon1} alt="" src="/6-1@2x.png" />
      </div>
    </div>
  );
};

export default Home;
