import React from "react";

import Header from "./components/Header";
import TechnicalStuck from "./components/TechnicalStuck";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <TechnicalStuck />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
