import React from "react";

// dependencies
import { SwipeableDrawer, makeStyles, createStyles } from "@material-ui/core";

import NavigationMenu from "./NavigationMenu";

const useStyles = makeStyles(() =>
  createStyles({
    sideDrawer: {
      backgroundColor: "rgba(255,255,255,0.8)",

      "& .MuiBackdrop-root": {
        background: "transparent",
      },

      "& .MuiPaper-root": {
        backgroundColor: "#595959",
        color: "#fff",
      },
    },
  })
);

const SideDrawer = (props) => {
  const { scrollToTopCallBack, toggle, setToggle } = props;
  const classes = useStyles();

  return (
    <div className="navigation__drawer">
      <SwipeableDrawer
        className={classes.sideDrawer}
        anchor="left"
        open={toggle}
        onClose={() => setToggle(false)}
        onOpen={() => setToggle(true)}
      >
        <NavigationMenu
          onSelectMenuItem={() => setToggle(false)}
          scrollToTopCallBack={scrollToTopCallBack}
        />
      </SwipeableDrawer>
    </div>
  );
};

export default SideDrawer;
