import React from "react";
import react from "./../../assets/react.png";
import angular from "./../../assets/angular.png";
import jquery from "./../../assets/jquery.png";
import git from "./../../assets/git.png";
import nodejs from "./../../assets/nodejs.png";
import django from "./../../assets/django.png";
import css from "./../../assets/css.png";
import js from "./../../assets/js.png";
import bootstrap from "./../../assets/bootstrap.png";
import python from "./../../assets/python.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp);

const about = () => {
  return (
    <div>
      <div className="container-fluid conteneur">
        <div className="container-fluid d-none d-xl-block align-items-center contenu">
          <div className="row">
            <div className="col-3 h2" id="">
              <h2 className="text-center">&lt;&gt; Nous connaitre &lt;/&gt;</h2>
            </div>
            <div className="col-1 offset-7">
              <div className="btn btn-secondary btn-lg d-flex justify-content-center">
                <a href="/#working">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-up"]}
                    size="lg"
                    style={{ color: "#efefef" }}
                    className="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
          <p>
            Développeurs fullstack, nous sommes fraichement diplomés et
            passionnés par les dernières technos, spécialisés dans les languages
            python, typescript, javascript, nodeJS. Nos frameworks de
            prédilection : Angular, React et Django. Nous offrons des solutions
            spécialisées aux entreprises, artisans et associations à travers la
            refonte ou la création de leur site, de leur blog professionnel ou
            la réalisation de leur solution e-commerce. La création de votre
            site est accompagnée d’une prestation en optimisation pour le
            référencement et de formations au SEO et à la gestion de site.
          </p>
          <div className="d-none d-md-block">
            <h3>Nos technos</h3>
          </div>
          <div className="row icones d-flex justify-content-between">
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={react} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={angular} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={js} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={nodejs} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={jquery} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="850"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={git} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1000"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={django} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1150"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={python} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1300"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={bootstrap} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1450"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={css} alt="" className="icone img-fluid col-1" />
            </div>
          </div>
        </div>
        <div className="container-fluid d-none d-md-block d-xl-none contenu">
          <div className="row">
            <div className="col-5 h2" id="">
              <h2 className="text-center">&lt;&gt; A propos &lt;/&gt;</h2>
            </div>
            <div className="col-2 offset-4">
              <div className="btn btn-secondary btn-lg d-flex justify-content-center">
                <a href="/#working">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-up"]}
                    size="lg"
                    style={{ color: "#efefef" }}
                    className="arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <p>
                Développeurs fullstack, nous sommes fraichement diplomés et
                passionnés par les dernières technos, spécialisés dans les
                languages python, typescript, javascript, nodeJS. Nos frameworks
                de prédilection : Angular, React et Django. Nous offrons des
                solutions spécialisées aux entreprises, artisans et associations
                à travers la refonte ou la création de leur site, de leur blog
                professionnel ou la réalisation de leur solution e-commerce. La
                création de votre site est accompagnée d’une prestation en
                optimisation pour le référencement, de formations au SEO et à la
                gestion de site.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <h3>Nos technos</h3>
            </div>
          </div>

          <div className="row  d-flex justify-content-around ">
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={react} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={angular} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={js} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={nodejs} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={jquery} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="850"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={git} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1000"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={django} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1150"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={python} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1300"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={bootstrap} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1450"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={css} alt="" className="icone img-fluid col-1" />
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="container-fluid d-block d-sm-none contenu">
          <div className="row">
            <div className="col-2 offset-9">
              <div className="btn btn-secondary btn-lg d-flex justify-content-center">
                <a href="/#working">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-up"]}
                    size="lg"
                    style={{ color: "#efefef" }}
                    className="arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-12 h2" id="">
              <h2 className="text-center">&lt;&gt; A propos &lt;/&gt;</h2>
            </div>

            <div className="col-12">
              <p>
                Développeurs fullstack, nous sommes fraichement diplomés et
                passionnés par les dernières technos, spécialisés dans les
                languages python, typescript, javascript, nodeJS. Nos frameworks
                de prédilection : Angular, React et Django. Nous offrons des
                solutions spécialisées aux entreprises, artisans et associations
                à travers la refonte ou la création de leur site, de leur blog
                professionnel ou la réalisation de leur solution e-commerce. La
                création de votre site est accompagnée d’une prestation en
                optimisation pour le référencement et de formations au SEO et à
                la gestion de site.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <h3>Nos technos</h3>
            </div>
          </div>

          <div className="row  d-flex justify-content-around">
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={react} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={angular} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={js} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={nodejs} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={jquery} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="850"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={git} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1000"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={django} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1150"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={python} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1300"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={bootstrap} alt="" className="icone img-fluid col-1" />
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="1450"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={css} alt="" className="icone img-fluid col-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
