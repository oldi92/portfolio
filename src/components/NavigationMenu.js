import React, { useState } from "react";

// dependencies
import {
  FaProjectDiagram,
  FaTools,
  FaCommentDots,
  FaIdBadge,
} from "react-icons/fa";

import {
  Menu,
  MenuItem,
  createStyles,
  makeStyles,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@material-ui/core";

import { FaArrowDown } from "react-icons/fa";

const useStyles = makeStyles(() =>
  createStyles({
    menudrop: {
      "& .MuiPaper-rounded": {
        backgroundColor: "#595959",
        color: "#fff",
        top: "100px !important",
      },
    },
    accordion: {
      border: "none",
      boxShadow: "none",
      width: "100%",

      "& .MuiButtonBase-root": {
        paddingLeft: "0",
      },

      "& .MuiAccordionDetails-root": {
        paddingLeft: "1.8rem",
        backgroundColor: "#808080",
      },
    },
  })
);

const NavigationMenu = (props) => {
  const { scrollToTopCallBack, onSelectMenuItem, header } = props;
  const classes = useStyles();

  // state
  const [intro] = useState("intro");
  const [technicalStuck] = useState("technicalStuck");
  const [projects] = useState("projects");
  const [message] = useState("message");

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
      <nav className={header ? "navigation" : "navigation__drawer"}>
        <ul
          className={header ? "navigation__list" : "navigation__list__drawer"}
        >
          {!header && (
            <li className="navigation__item__drawer">
              <div onClick={() => scrtollToTopHanlder(intro)}>Logo</div>
            </li>
          )}
          <li
            className={header ? "navigation__item" : "navigation__item__drawer"}
          >
            <FaTools className="navigation__item__icon" />
            <div onClick={() => scrtollToTopHanlder(technicalStuck)}>
              Technical Stuck
            </div>
          </li>
          <li
            className={header ? "navigation__item" : "navigation__item__drawer"}
          >
            <FaProjectDiagram className="navigation__item__icon" />
            <div onClick={() => scrtollToTopHanlder(projects)}>Projects</div>
          </li>
          <li
            className={header ? "navigation__item" : "navigation__item__drawer"}
          >
            <FaCommentDots className="navigation__item__icon" />
            <div onClick={() => scrtollToTopHanlder(message)}>Contact</div>
          </li>
          {header ? (
            <li
              className={
                header ? "navigation__item" : "navigation__item__drawer"
              }
            >
              <FaIdBadge className="navigation__item__icon" />
              <div onClick={handleClick}>Info</div>
            </li>
          ) : (
            <li
              style={{ width: "100%" }}
              className={
                header ? "navigation__item" : "navigation__item__drawer"
              }
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<FaArrowDown style={{ color: "#fff" }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <FaIdBadge className="navigation__item__icon" />
                  <div onClick={handleClick}>Info</div>
                </AccordionSummary>
                <AccordionDetails>Profile</AccordionDetails>
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
