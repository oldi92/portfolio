import React, { useState } from 'react';

import Image from '../assets/images/working.png';

import NavigationMenu from './NavigationMenu';
import SideDrawer from './SideDrawer';

import { FaBars } from 'react-icons/fa';

import Logo from './Logo';

const Header = (props) => {
  const { scrollToTopCallBack } = props;

  const [sideDrawertoggle, setSideDrawertoggle] = useState(false);

  return (
    <div className='header'>
      <div className='header__navigation'>
        <Logo />

        <NavigationMenu
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
          className='drawer__bars'
        />
      </div>
      <div className='header__content'>
        <div className='header__box'>
          <div className='box__title'>Hello, i am Oldi</div>
          <p className='box__paragraph'>
            a self-taught full stack developer based in London. I have a passion
            for programming and love to learn new technologies and new things. I
            have proficient knowledge in javascript and special love to its
            unique functionality which have changed the rules in software
            development. Finally, i want to add my tech stack is web and mobile
            applications.
          </p>
        </div>
        <div className='header__box'>
          <img className='box__image' src={Image} alt='working' />
        </div>
      </div>
    </div>
  );
};

export default Header;
