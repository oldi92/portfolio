import React from "react";

// dependencies
import { Tooltip } from "@material-ui/core";
import { FaCode } from "react-icons/fa";

const CodeButton = (props) => {
  const { disabled, codeLink, tooltipTtitle } = props;

  if (disabled) {
    return (
      <Tooltip
        title={
          tooltipTtitle ? tooltipTtitle : "Code not available, is Private."
        }
      >
        <div className="projects__item__box__link__container link__disabled">
          <div>Code source</div>
          <FaCode />
        </div>
      </Tooltip>
    );
  } else {
    return (
      <div className="projects__item__box__link__container">
        <a href={codeLink} target="_blank" rel="noreferrer">
          Code source
        </a>
        <FaCode />
      </div>
    );
  }
};

export default CodeButton;
