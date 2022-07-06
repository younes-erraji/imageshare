import React from "react";

import "../../../../assets/styles/reset-password.css";

const Reset_password = () => {
  return (
    <form className="main">
      <div className="fields">
        <p>
          We'll send password reset instructions to the email address associated
          with your account
        </p>
        <label htmlFor="email">enter email address</label>
        <input type="email" id="email" />
        <input type="submit" value="reset password" />
      </div>
    </form>
  );
};

export default Reset_password;
