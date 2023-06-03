import { useContext } from "react";
import { AppContext } from "../context/context.js";

function Step1({ onSubmit }) {
  const {
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    phoneError,
    setPhoneError,
  } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (nameError === "" && emailError === "" && phoneError === "") {
      onSubmit();
    }
  }

  function validateName() {
    if (name.trim() === "") {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
  }

  function validateEmail() {
    const regex = /\S+@[a-z]+.[a-z]+/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  }

  function validatePhone() {
    const regex =
      /^(\+7|8)?[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/;
    if (!regex.test(phone)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  }

  return (
    <div className="info">
      <h2 className="title">Personal info</h2>
      <p className="subtitle">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit} id="info" noValidate>
        <div className="info__field">
          <div className="container-with-error">
            <label className="info__field__label" htmlFor="name">
              Name
            </label>
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <input
            placeholder="e.g. Ivan Ivanov"
            required
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={validateName}
          ></input>
        </div>
        <div className="info__field">
          <div className="container-with-error">
            <label className="info__field__label" htmlFor="email">
              Email Address
            </label>
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <input
            placeholder="e.g. youremail@mail.ru"
            required
            // pattern="\S+@[a-z]+.[a-z]+"
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            onBlur={validateEmail}
          ></input>
        </div>
        <div className="info__field">
          <div className="container-with-error">
            <label className="info__field__label" htmlFor="phone">
              Phone Number
            </label>
            {phoneError && <div className="error-message">{phoneError}</div>}
          </div>
          <input
            placeholder="e.g. +1 234 567 8900"
            required
            type="phone"
            id="phone"
            onChange={(event) => setPhone(event.target.value)}
            onBlur={validatePhone}
          ></input>
        </div>
      </form>
      <div className="btn btn_first-step">
        <button className="btn-forward" type="submit" form="info">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Step1;
