import React, { useState, useRef, useEffect } from "react";

// dependencies
import emailjs from "emailjs-com";
import smoothscroll from "smoothscroll-polyfill";

// components
import Header from "./components/Header";
import TechnicalStuck from "./components/TechnicalStuck";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

// scroll smooth polyfill!
smoothscroll.polyfill();

const App = () => {
  // const introRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [windowPositions, setWindowPositions] = useState();

  useEffect(() => {
    if (skillsRef && projectRef && messageRef) {
      setWindowPositions({
        intro: 0,
        skills: skillsRef.current.offsetTop + 150,
        projects: projectRef.current.offsetTop + 150,
        message: messageRef.current.offsetTop + 100,
      });
    }
  }, [skillsRef, projectRef, messageRef]);

  const submitHandler = (form) => {
    // initialize spinner
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  const scrollToTop = (trigeredFrom) => {
    let pxToScroll = null;
    if (trigeredFrom === "intro") {
      pxToScroll = windowPositions.intro;
    } else if (trigeredFrom === "technicalStuck") {
      pxToScroll = windowPositions.skills;
    } else if (trigeredFrom === "projects") {
      pxToScroll = windowPositions.projects;
    } else if (trigeredFrom === "message") {
      pxToScroll = windowPositions.message;
    }

    window.scrollTo({ top: pxToScroll, behavior: "smooth" });
  };

  return (
    <div className="container">
      <Alert error={error} success={success} />

      <Header scrollToTopCallBack={scrollToTop} />
      <TechnicalStuck forwardRef={skillsRef} />
      <Projects forwardRef={projectRef} />
      <Contact
        forwardRef={messageRef}
        submitCallback={submitHandler}
        loading={loading}
      />
      <Footer scrollToTopCallBack={scrollToTop} />
    </div>
  );
};

export default App;
