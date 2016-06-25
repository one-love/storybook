import React from 'react';

export default function ForgotPassword() {
  return (
    <div className="forgot-password">
      <div className="o-layout o-layout--center">
        <h1>Forgot Password</h1>
      </div>
      <form role="form">
        <div className="position--relative">
          <input
            name="email"
            type="input"
            id="email"
            autoFocus
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <button className="button">Send</button>
      </form>
    </div>
  );
}
