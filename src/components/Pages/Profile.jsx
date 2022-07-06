import React from "react";

import "../../assets/styles/profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div className="container">
        <section className="card">
          <div className="option">
            <i className="fa fa-three-dots"></i>
          </div>
          <img src="./assets/images/user.png" />
          <h2>@amine_tissiliguit</h2>
          <form>
            <button>follow</button>
          </form>
          <h3>bio</h3>
          <p className="bio">to know and not to do, is not yet to know.</p>
          <hr />
          <div className="followers">
            <span>followers</span>
            <strong>12K</strong>
          </div>
          <div className="following">
            <span>following</span>
            <strong>609</strong>
          </div>
          <div className="posts">
            <span>posts</span>
            <strong>6</strong>
          </div>
        </section>
        <form className="publications">
          <h2>
            images posted by <strong>Amine Tissilguit</strong>
          </h2>
          <ul>
            <li>
              <section>
                <img src="./assets/images/studio/00.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/1.webp" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/06.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/09.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/B.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/1.webp" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/07.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/09.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
            <li>
              <section>
                <img src="./assets/images/studio/06.jpg" />
              </section>
              <div className="react">
                <div className="likes">
                  <button className="like">
                    <i className="fa fa-heart"></i>
                  </button>
                  <span>468</span>
                </div>
                <div className="downloads">
                  <button className="download">
                    <i className="fa fa-download"></i>
                  </button>
                  <span>78K</span>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Profile;
