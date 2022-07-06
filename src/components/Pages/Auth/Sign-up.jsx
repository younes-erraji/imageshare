import React from "react";

import "../../../assets/styles/sign-up.css";

import Facebook from "../../../assets/icons/facebook.jpg";
import Google from "../../../assets/icons/google.jpg";

const Sign_up = () => {
  return (
    <form className="main" method="post" action="/">
      <h2>create a new account</h2>
      <button>
        <img src={Facebook} alt="facebook" />
        continue with <strong>Facebook</strong>
      </button>
      <button>
        <img src={Google} alt="google" />
        continue with <strong>Google</strong>
      </button>
      <hr />
      <span>Or</span>
      <div className="name">
        <input type="text" name="first_name" placeholder="first name" />
        <input type="text" name="last_name" placeholder="last name" />
      </div>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <span>password must be at least 8 characters long.</span>
      <input type="submit" value="sign up" />
      <span>
        already a member? <a href="./sign-in.html">sign in</a>
      </span>
      <hr />
    </form>
  );
};

export default Sign_up;
