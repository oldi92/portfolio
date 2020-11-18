import React, { useState } from "react";

import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = (props) => {
  const [intro] = useState("intro");
  const [technicalStuck] = useState("technicalStuck");
  const [projects] = useState("projects");
  const [message] = useState("message");
  const { scrollToTopCallBack } = props;

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__widget">
          <div className="footer__title">Logo</div>
          <p className="footer__widget__paragraph">
            Nulla fugiat sint labore est ea tempor adipisicing ex laboris ex id
            nisi amet ullamco.
          </p>
          <div>
            <ul className="footer__widget__social">
              <li>
                <a
                  href="https://www.linkedin.com/in/oldi-prillo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/oldi92"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__menu">
          <div className="footer__menu__title">Menu</div>
          <div onClick={() => scrollToTopCallBack(intro)}>Intro</div>
          <div onClick={() => scrollToTopCallBack(technicalStuck)}>
            Technical Stuck
          </div>
          <div onClick={() => scrollToTopCallBack(projects)}>Projects</div>
          <div onClick={() => scrollToTopCallBack(message)}>Send a Message</div>
        </div>
        <div className="footer__contact">
          <div className="footer__contact__title">Contact</div>
          <a href="tel:00447507588611">+44 7507588611</a>
          <a href="mailto:oldi.prillo@gmail.com">oldi.prillo@gmail.com</a>
        </div>
      </div>
      <div className="copyright">© Copyright Oldi 2020</div>
    </div>
  );
};

export default Footer;
