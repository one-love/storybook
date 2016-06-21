import React from 'react';


export default function Login() {
  return (
    <div className="login">
      <div className="o-layout o-layout--center">
        <h1>Login</h1>
      </div>
      <form role="form">
        <div className="position--relative">
          <input
            name="email"
            type="input"
            id="email"
            className="input"
            autoFocus
            required
          />
          <label className="label" htmlFor="email">Email</label>
        </div>
        <div className="position--relative">
          <input
            type="password"
            name="password"
            id="password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="button">Login</button>
      </form>
    </div>
  );
}
