import React, { Fragment } from "react";
import logo from "./../assets/logo_bleu_propre.png";


import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faPhone, faGithub, faEnvelope, faFacebook, faTwitter, faArrowRight);
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNavbar] = useState(false);

  const backNav = () => {
    let logo = document.querySelector(".logo_top");
    let logo2 = document.querySelector(".logo_pad");
    let logo3 = document.querySelector(".logo_smart");

    if (window.scrollY >= 40) {
      logo.classList.add("logo_nav");
      logo2.classList.add("logo_hide");
      logo3.classList.add("logo_hide");
      setNavbar(true);
    } else {
      logo.classList.remove("logo_nav");
      logo2.classList.remove("logo_hide");
      logo3.classList.remove("logo_hide");
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", backNav);

  return (
    <Fragment>
      <div className="container-fluid" id="page1">
        {/* --------------- format LG ---------------------------------  */}

        <div className="d-none d-xl-block">
          <div className="logo">
            <a href="/">
              <img src={logo} className="img-fluid logo_top" alt="logo" />
            </a>
          </div>
          <nav className={nav ? "nav_scroll" : "nav"}>
            <div className="row nav  d-flex align-items-center">
              {/* <div className="col-xl-3 d-flex align-items-end">
                <div className="row d-flex align-items-center">
                  <div className="col-2 d-flex align-items-end">
                    <a href="/" target="" rel="noreferrer">
                      <img src={tel} alt="./../" className="img-fluid" />
                    </a>netlify.app

                  <div className="col-10 d-flex align-items-center">
                    <p>06 45 84 64 03 / 06 30 92 95 33</p>
                  </div>
                  <div className="icon col-10 offset-2">
                    <p></p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 d-flex align-items-center d-inline">
                <Link to="/contact" target="_blank" rel="noreferrer">
                  <img src={mail} alt="./../" className="img-fluid d-inline" />
                  <p className=" d-inline">horizon.w.design@gmail.com</p>
                </Link>
              </div> */}
              <div className="col-lg-8">
                <div className="row services">
                  <div className="col-3 d-flex align-items-center justify-content-start">
                    <Link
                      to="/competences"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      />
                      &nbsp; <p className="d-inline">Compétences</p>
                    </Link>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-start">
                    <Link
                      to="/contact"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      />
                      &nbsp; <p className="d-inline">Devis</p>
                    </Link>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-start">
                    <Link
                      to="/portfolio"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      />
                      &nbsp; <p className="d-inline">Portfolio</p>
                    </Link>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-start">
                    <a
                      href="https://www.horizonwebdesign.blog/"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      />
                      &nbsp; <p className="d-inline">Blog</p>
                    </a>
                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-start">
                    <Link
                      to="/apropos"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "arrow-right"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      />
                      &nbsp; <p className="d-inline">A propos</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" col-lg-3 offset-lg-1 d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/contact" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={["fas", "envelope"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/contact" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={["fas", "phone"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="https://www.facebook.com/Tom.H.W.Design/?view_public_for=101320798478211"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                      />
                      {/* <img src={face} alt="./../" className="img-fluid" /> */}
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="https://twitter.com/Horizon_WDesign"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                      />
                      {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="https://github.com/tetsuo23"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                      />
                      {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
                    </a>
                  </div>

                  {/* <div className="col-lg-3 d-flex align-items-center">
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                  </div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* --------------- fin format LG --------------------------------- 

   --------------- format MD ---------------------------------  */}

        <div className="d-none d-md-block d-xl-none">
          <nav
            className={
              nav
                ? "nav_scroll d-flex align-items-center"
                : "nav d-flex align-items-center"
            }
          >
            <div className="col-md-1 offset-md-6">
              <Link to="/contact" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                />
              </Link>
            </div>
            <div className="col-md-1">
              <Link to="/contact" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                />
              </Link>
            </div>
            <div className="col-md-1">
              <a
                href="https://www.facebook.com/Tom.H.W.Design/?view_public_for=101320798478211"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={face} alt="./../" className="img-fluid" /> */}
              </a>
            </div>
            <div className="col-md-1">
              <a
                href="https://twitter.com/Horizon_WDesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
              </a>
            </div>
            <div className="col-md-1">
              <a
                href="https://github.com/tetsuo23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
              </a>
            </div>

            <div className="col-1">
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>

            <div className="logo">
              <a href="/">
                <img src={logo} className="img-fluid logo_pad" alt="logo" />
              </a>
            </div>
          </nav>
        </div>

        {/* --------------- fin format MD ---------------------------------  */}
        <div className="d-block d-md-none">
          <nav
            className={
              nav
                ? "nav_scroll d-flex align-items-center"
                : "nav d-flex align-items-center"
            }
          >
            <div className="col-1 offset-5">
              <Link to="/contact" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  size="md"
                  style={{ color: "#efefef" }}
                />
              </Link>
            </div>
            <div className="col-1">
              <Link to="/contact" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  size="md"
                  style={{ color: "#efefef" }}
                />
              </Link>
            </div>
            <div className="col-1">
              <a
                href="https://www.facebook.com/Tom.H.W.Design/?view_public_for=101320798478211"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="md"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={face} alt="./../" className="img-fluid" /> */}
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://twitter.com/Horizon_WDesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="md"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://github.com/tetsuo23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="md"
                  style={{ color: "#efefef" }}
                />
                {/* <img src={tweet} alt="./../" className="img-fluid" /> */}
              </a>
            </div>

            <div className="col-1">
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>

            <div className="logo">
              <a href="/">
                <img src={logo} className="img-fluid logo_smart" alt="logo" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
