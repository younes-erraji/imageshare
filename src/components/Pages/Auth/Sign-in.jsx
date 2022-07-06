import React from "react";

import "../../../assets/styles/sign-in.css";

import Facebook from "../../../assets/icons/facebook.jpg";
import Google from "../../../assets/icons/google.jpg";

const Sign_in = () => {
  return (
    <form className="main">
      <h2>
        sign in to your <strong>images</strong>hare account
      </h2>
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
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="sign in" />
      <a href="./reset-password.html">Forgot password?</a>
      <hr />
      <span>
        not a member yet? <a href="./sign-up.html">sign up</a>
      </span>
    </form>
  );
};

export default Sign_in;
