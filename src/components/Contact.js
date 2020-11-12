import React, { useState } from "react";

import Spinner from "./Spinner";

const Contact = ({ submitCallback, loading }) => {
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const formValidation = (event) => {
    event.preventDefault();
    setErrorFirstName(false);
    setErrorEmail(false);
    setErrorMessage(false);

    if (form.firstName < 1) {
      setErrorFirstName(true);
    } else if (form.email < 4) {
      setErrorEmail(true);
    } else if (form.message < 2) {
      setErrorMessage(true);
    } else {
      submitCallback(form);
    }
  };

  return (
    <div className="contact">
      <div className="contact__title">Drop a Message</div>

      <form onSubmit={formValidation} className="contact__form">
        <div className="contact__form__name">
          <div className="form__box">
            <input
              className={
                errorFirstName
                  ? "form__input__error"
                  : form.firstName.length > 0
                  ? "form__input form__input__active"
                  : "form__input"
              }
              onChange={(event) =>
                setForm({
                  ...form,
                  firstName: event.target.value,
                })
              }
            />
            <label
              className={
                errorFirstName
                  ? form.firstName.length > 0
                    ? "form__label__error form__label__active__error "
                    : "form__label__error"
                  : form.firstName.length > 0
                  ? "form__label form__label__active "
                  : "form__label"
              }
            >
              First Name
            </label>
          </div>
          <div className="form__box">
            <input
              className={
                form.lastName.length > 0
                  ? "form__input form__input__active"
                  : "form__input"
              }
              onChange={(event) =>
                setForm({
                  ...form,
                  lastName: event.target.value,
                })
              }
            />
            <label
              className={
                form.lastName.length > 0
                  ? "form__label form__label__active "
                  : "form__label"
              }
            >
              Last Name
            </label>
          </div>
        </div>
        <div className="form__box">
          <input
            className={
              errorEmail
                ? "form__input__error"
                : form.email.length > 0
                ? "form__input form__input__active"
                : "form__input"
            }
            onChange={(event) =>
              setForm({
                ...form,
                email: event.target.value,
              })
            }
          />
          <label
            className={
              errorEmail
                ? form.email.length > 0
                  ? "form__label__error form__label__active__error "
                  : "form__label__error"
                : form.email.length > 0
                ? "form__label form__label__active "
                : "form__label"
            }
          >
            Email
          </label>
        </div>

        <div className="form__box">
          <textarea
            className={
              errorMessage
                ? "form__textarea__error"
                : form.message.length > 0
                ? "form__textarea form__input__active"
                : "form__textarea"
            }
            onChange={(event) =>
              setForm({
                ...form,
                message: event.target.value,
              })
            }
          />
          <label
            className={
              errorMessage
                ? form.message.length > 0
                  ? "form__label__error form__label__active__error "
                  : "form__label__error"
                : form.message.length > 0
                ? "form__label form__label__active "
                : "form__label"
            }
          >
            Write your message
          </label>
        </div>

        <div className="contact__form__button__container">
          <button
            disabled={loading}
            type="submit"
            className="contact__form__button"
          >
            {loading ? <Spinner /> : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
