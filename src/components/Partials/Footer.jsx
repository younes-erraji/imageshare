import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <form className="contact">
          <h3>contact us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
            dignissimos eos similique quia!
          </p>
          <input type="text" name="name" placeholder="Full name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <input type="submit" name="message" value="Submit" />
        </form>
        <ul className="sitemap">
          <h3>sitemap</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
            dignissimos eos similique quia!
          </p>
          <li>
            <a href="#">- Home</a>
          </li>
          <li>
            <a href="#">- about us</a>
          </li>
          <li>
            <a href="#">- sign in</a>
          </li>
          <li>
            <a href="#">- sign up</a>
          </li>
        </ul>
        <ul className="imageshare">
          <h3>
            <strong>images</strong>hare
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rem
            dignissimos eos similique quia!
          </p>
          <li>
            <i className="fa fa-phone"></i>+212 632 82 34 84
          </li>
          <li>
            <i className="fa fa-phone"></i>+212 632 82 34 84
          </li>
          <li>
            <i className="fa fa-gmail"></i>Younes.erraji8@gmail.com
          </li>
          <li>
            <i className="fa fa-gmail"></i>amine.tissiliguit@gmail.com
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
      <div className="copyright">
        <div className="container">
          <span className="copy">
            Copyright &copy; 2021 <strong>images</strong>hare.
            <br />
            All Rights Reserved.
          </span>
          <div className="socials">
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
