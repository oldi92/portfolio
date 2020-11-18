import React, { useState } from "react";

import Image from "../assets/images/working.png";

import NavigationMenu from "./NavigationMenu";
import SideDrawer from "./SideDrawer";

import { FaBars } from "react-icons/fa";

const Header = (props) => {
  const { scrollToTopCallBack } = props;

  const [sideDrawertoggle, setSideDrawertoggle] = useState(false);

  return (
    <div className="header">
      <div className="header__navigation">
        <h2>Logo</h2>

        <NavigationMenu
          // onSelectMenuItem={() => setSideDrawertoggle(false)}
          scrollToTopCallBack={scrollToTopCallBack}
          header={true}
        />
        <SideDrawer
          scrollToTopCallBack={scrollToTopCallBack}
          setToggle={(toggle) => setSideDrawertoggle(toggle)}
          toggle={sideDrawertoggle}
        />
        <FaBars
          onClick={() => setSideDrawertoggle(true)}
          className="drawer__bars"
        />
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
