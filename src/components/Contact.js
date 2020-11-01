import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">Tittle</div>
      <form className="contact__form">
        <div className="contact__form__name">
          <input
            className="contact__form__input"
            placeholder="first name"
            type="text"
          />
          <input
            className="contact__form__input"
            placeholder="last name"
            type="text"
          />
        </div>
        <input
          className="contact__form__input"
          placeholder="enter your email"
          type="email"
        />

        <textarea
          className="contact__form__textarea"
          placeholder="write your message"
        />
        <div className="contact__form__button__container">
          <button className="contact__form__button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
