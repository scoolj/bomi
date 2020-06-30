import React from "react";

const navigationTop = () => {
  return (
    <div className="navigation-top">
      <div className="d-sm-flex justify-content-between text-center">
        <p className="like-info">
          <span className="align-middle">
            <i className="fa fa-heart"></i>
          </span>{" "}
          Lily and 4 people like this
        </p>
        <div className="col-sm-4 text-center my-2 my-sm-0">
          {/* <p className="comment-count"><span className="align-middle"><i className="fa fa-comment"></i></span> 06 Comments</p> --> */}
        </div>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-area">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="/assets/img/post/preview.png" alt="" />
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white ti-arrow-left"></span>
              </a>
            </div>
            <div className="detials">
              <p>Prev Post</p>
              <a href="#">
                <h4>Space The Final Frontier</h4>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
            <div className="detials">
              <p>Next Post</p>
              <a href="#">
                <h4>Telescopes 101</h4>
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white ti-arrow-right"></span>
              </a>
            </div>
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="/assets/img/post/next.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navigationTop;
