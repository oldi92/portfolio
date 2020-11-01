import React from "react";

import Image from "../assets/images/working.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__navigation">
        <h2>Logo</h2>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">Projects</li>
            <li className="navigation__item">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header__content">
        <div className="header__box">
          <div className="box__title">Hello, i am Oldi</div>
          <p>
            I am a self tought junior web developer with passion a bout web
            developing. My goal is to be the best web developer in the world.
            And the rest is just a random text that i have to write only for the
            paragraph.
          </p>
        </div>
        <div className="header__box">
          <img className="box__image" src={Image} alt="working" />
        </div>
      </div>
    </div>
  );
};

export default Header;
