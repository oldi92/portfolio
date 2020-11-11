import React from "react";

import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Alert = ({ error, success }) => {
  if (!error && !success) return null;
  return (
    <div
      className={
        success ? "alert__container__success" : "alert__container__error"
      }
    >
      {success ? (
        <FaCheckCircle className="alert__icon__success" />
      ) : (
        <FaExclamationCircle className="alert__icon__error" />
      )}
      <span className="alert__text">
        {success ? "Email sent successfully." : "Something went wrong."}
      </span>
    </div>
  );
};

export default Alert;
