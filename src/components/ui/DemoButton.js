import React from "react";

// dependencies
import { Tooltip } from "@material-ui/core";
import { FaPlayCircle } from "react-icons/fa";

const DemoButton = (props) => {
  const { disabled, demoLink, tooltipTtitle } = props;

  if (disabled) {
    return (
      <Tooltip
        title={
          tooltipTtitle ? tooltipTtitle : "Demo not available, is Private."
        }
      >
        <div className="projects__item__box__link__container link__disabled">
          <div target="_blank" rel="noreferrer">
            Demo
          </div>
          <FaPlayCircle />
        </div>
      </Tooltip>
    );
  } else {
    return (
      <div className="projects__item__box__link__container">
        <a href={demoLink} target="_blank" rel="noreferrer">
          Demo
        </a>
        <FaPlayCircle />
      </div>
    );
  }
};

export default DemoButton;
