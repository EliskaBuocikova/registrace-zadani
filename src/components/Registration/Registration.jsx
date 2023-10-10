import React, { useState } from 'react';
import './style.css';
import Icon from './icon.png';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputEmail = (event) => {
    const email = event.target.value;
    setUser({
      ...user,
      email: email,
      username: email.includes('@')
        ? user.username || email.slice(0, email.indexOf('@'))
        : user.username,
    });
  };

  const handleInputUsername = (event) => {
    setUser({
      ...user,
      username: event.target.value,
    });
  };

  const handleInputPassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleInputPasswordConfirm = (event) => {
    setUser({ ...user, passwordConfirm: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ user });
    setUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <>
      <header>
        <h1 className="title">Registration</h1>
        <img src={Icon} />
      </header>
      <form onSubmit={handleSubmit}>
        <input
          id="input__email"
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={handleInputEmail}
        ></input>
        <input
          id="input__user-name"
          type="text"
          placeholder="User Name"
          value={user.username}
          onChange={handleInputUsername}
        ></input>
        <input
          id="input__password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputPassword}
        ></input>
        <input
          id="input__confirm-password"
          type="password"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleInputPasswordConfirm}
        ></input>
        <div
          className={`alert ${
            user.password !== user.passwordConfirm &&
            user.passwordConfirm !== ''
              ? 'visible'
              : ''
          }`}
        >
          Hesla se neshodují!
        </div>
        <button
          id="submit"
          type="submit"
          disabled={
            !user.email ||
            !user.username ||
            !user.password ||
            !user.passwordConfirm ||
            user.password !== user.passwordConfirm
          }
        >
          register
        </button>
      </form>
    </>
  );
};

export default Registration;
