import React, { useState } from 'react';

// dependencies
import {
  FaProjectDiagram,
  FaTools,
  FaCommentDots,
  FaIdBadge,
} from 'react-icons/fa';

import {
  Menu,
  MenuItem,
  createStyles,
  makeStyles,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from '@material-ui/core';

import { FaArrowDown } from 'react-icons/fa';

import Logo from './Logo';

const useStyles = makeStyles(() =>
  createStyles({
    menudrop: {
      '& .MuiPaper-rounded': {
        color: '#fff',
        top: '100px !important',
      },
    },
    accordion: {
      border: 'none',
      boxShadow: 'none',
      width: '100%',
      fontSize: '1rem',
      backgroundColor: 'unset',

      '& .MuiButtonBase-root': {
        paddingLeft: '0',
        color: '#fff',
      },

      '& .MuiAccordionDetails-root': {
        paddingLeft: '1.5rem',
        borderTop: '1.5px solid #808080',
      },
    },
    accordionDetail: {
      position: 'relative',
      color: '#595959',
      backgroundColor: '#fff',
    },
    accordionTringle: {
      position: 'absolute',
      top: '-9px',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #fff',
    },
    accordionArrowDown: {
      fontSize: '0.8rem',
      color: '#fff',
    },
  }),
);

const NavigationMenu = (props) => {
  const { scrollToTopCallBack, onSelectMenuItem, header } = props;
  const classes = useStyles();

  // state
  const [intro] = useState('intro');
  const [technicalStuck] = useState('technicalStuck');
  const [projects] = useState('projects');
  const [message] = useState('message');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrtollToTopHanlder = (trigeredFrom) => {
    scrollToTopCallBack(trigeredFrom);
    if (!header) onSelectMenuItem();
  };

  return (
    <>
      <nav className={header ? 'navigation' : 'navigation__drawer'}>
        <ul
          className={header ? 'navigation__list' : 'navigation__list__drawer'}
        >
          {!header && (
            <li className='navigation__item__drawer'>
              <div onClick={() => scrtollToTopHanlder(intro)}>
                <Logo />
              </div>
            </li>
          )}
          <li
            className={header ? 'navigation__item' : 'navigation__item__drawer'}
          >
            <FaTools className='navigation__item__icon' />
            <div onClick={() => scrtollToTopHanlder(technicalStuck)}>
              Technical Stack
            </div>
          </li>
          <li
            className={header ? 'navigation__item' : 'navigation__item__drawer'}
          >
            <FaProjectDiagram className='navigation__item__icon' />
            <div onClick={() => scrtollToTopHanlder(projects)}>Projects</div>
          </li>
          <li
            className={header ? 'navigation__item' : 'navigation__item__drawer'}
          >
            <FaCommentDots className='navigation__item__icon' />
            <div onClick={() => scrtollToTopHanlder(message)}>Contact</div>
          </li>
          {header ? (
            <li
              className={
                header ? 'navigation__item' : 'navigation__item__drawer'
              }
            >
              <FaIdBadge className='navigation__item__icon' />
              <div onClick={handleClick}>Info</div>
            </li>
          ) : (
            <li
              style={{ width: '100%' }}
              className={
                header ? 'navigation__item' : 'navigation__item__drawer'
              }
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={
                    <FaArrowDown className={classes.accordionArrowDown} />
                  }
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <FaIdBadge className='navigation__item__icon' />
                  <div onClick={handleClick}>Info</div>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <div className={classes.accordionTringle}></div>
                  Profile
                </AccordionDetails>
              </Accordion>
            </li>
          )}
        </ul>
      </nav>
      {header && (
        <Menu
          className={classes.menudrop}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default NavigationMenu;
