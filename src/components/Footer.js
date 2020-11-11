import React from "react";

import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
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
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithubAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__menu">
          <div className="footer__menu__title">Menu</div>
          <div>Intro</div>
          <div>Technical Stuck</div>
          <div>Project</div>
          <div>Send a Message</div>
        </div>
        <div className="footer__contact">
          <div className="footer__contact__title">Contact</div>
          <div>Phone Number</div>
          <div>Email</div>
          <div>Github</div>
        </div>
      </div>
      <div className="copyright">© Copyright Oldi 2020</div>
    </div>
  );
};

export default Footer;
