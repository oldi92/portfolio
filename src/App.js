import React, { useState, useEffect } from "react";

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
        "service_5hotebh",
        "template_wv0wrkb",
        form,
        "user_sHO6RSaT3gOeVEgdyVCKi"
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

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      console.log(window.pageYOffset)
    );
  });

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
