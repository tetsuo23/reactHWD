import React from "react";
import "./../css/Footer.css";
import { Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container-fluid">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h4 className="text-uppercase mb-4 font-weight-bold d-flex justify-content-center">
                Informations légales
              </h4>
              <p>
                <Link to="/mentions" target="_top" rel="noreferrer">
                  Mentions légales
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
              <h4 className="text-uppercase mb-4 font-weight-bold d-flex justify-content-center">
                Plan de site
              </h4>
              <div className="row">
                <div className="col-6">
                  <p>
                    <Link to="/" target="_top" rel="noreferrer">
                      Accueil
                    </Link>
                  </p>
                  <p>
                    <Link to="/Apropos" target="_top" rel="noreferrer">
                      A propos
                    </Link>
                  </p>
                  <p>
                    <Link to="/tarif" target="_top" rel="noreferrer">
                      Nos tarifs
                    </Link>
                  </p>
                  <p>
                    <Link to="/Competences" target="_top" rel="noreferrer">
                      Nos compétences
                    </Link>
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <Link to="/contact" target="_top" rel="noreferrer">
                      Nous contacter
                    </Link>
                  </p>
                  <p>
                    <Link to="/portfolio" target="_top" rel="noreferrer">
                      Portfolio
                    </Link>
                  </p>
                  <p>
                    <Link to="/blog" target="_top" rel="noreferrer">
                      Blog
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h4 className="text-uppercase mb-4 font-weight-bold d-flex justify-content-center">
                Nos prestations
              </h4>
              <div className="row">
                <div className="col-6">
                  <p>
                    <Link to="/Competences" target="_top" rel="noreferrer">
                      Developpement de site
                      <br />
                      sur mesure
                    </Link>
                  </p>
                  <p>
                    <Link to="/Competences" target="_top" rel="noreferrer">
                      Référencement naturel
                    </Link>
                  </p>
                  <p>
                    <Link to="/Competences" target="_top" rel="noreferrer">
                      E-commerce
                    </Link>
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <Link to="/competences" target="_top" rel="noreferrer">
                      Application mobile
                    </Link>
                  </p>
                  <p>
                    <Link to="/competences" target="_top" rel="noreferrer">
                      Web design
                    </Link>
                  </p>
                  <p>
                    <Link to="/competences" target="_top"  rel="noreferrer">
                      Site vitrine
                    </Link>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
              <h4 className="text-uppercase mb-4 font-weight-bold">Contact</h4>
              <p>06.45.84.64.03</p>
              <p>06.30.92.95.33</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
