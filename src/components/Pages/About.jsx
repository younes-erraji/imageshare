import React from "react";

import "../../assets/styles/about-us.css";

import Younes from "../../assets/images/Younes.jpg";
import Amine from "../../assets/images/amine.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>Developers</h2>
        <div className="front-end">
          <div className="developer">
            <h3 className="name">Younes ERRAJI</h3>
            <h4 className="email">Younes.erraji8@gmail.com</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper.
            </p>
            <div className="social">
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
          <div className="picture">
            <img src={Younes} />
          </div>
        </div>
        <div className="back-end">
          <div className="picture">
            <img src={Amine} />
          </div>
          <div className="developer">
            <h3 className="name">Amine Tissilguit</h3>
            <h4 className="email">amine.tissilguit@gmail.com</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper.
            </p>
            <div className="social">
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
      </div>
    </div>
  );
};

export default About;
