import React from "react";

import "../../../../assets/styles/new-password.css";

const New_password = () => {
  return (
    <form className="main">
      <div className="fields">
        <h2>
          reset your <strong>images</strong>hare password
        </h2>
        <label htmlFor="new-password">new password</label>
        <input type="password" id="new-password" />
        <span>minimum 8 characters</span>
        <label htmlFor="password">verify New password</label>
        <input type="password" id="verify-password" />
        <input type="submit" value="Reset" />
      </div>
    </form>
  );
};

export default New_password;
