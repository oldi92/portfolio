import React, { useState } from "react";

import emailjs from "emailjs-com";

import Header from "./components/Header";
import TechnicalStuck from "./components/TechnicalStuck";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const scrollToTop = (px) => {
    window.scrollTo({ top: px, behavior: "smooth" });
  };

  return (
    <div className="container">
      <Alert error={error} success={success} />
      <Header />
      <TechnicalStuck />
      <Projects />
      <Contact submitCallback={submitHandler} loading={loading} />
      <Footer scrollToTopCallBack={scrollToTop} />
    </div>
  );
};

export default App;
