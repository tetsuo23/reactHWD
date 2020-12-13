import React from "react";

import { Link } from "react-router-dom";

const Tarif = () => {
  return (
    <div>
      <div className="container-fluid" id="working">
        <div className="col-1 offset-9">
          <div className="btn btn-secondary btn-lg d-flex justify-content-center">
            <Link to="/">Retour</Link>
          </div>
        </div>
        <div className="row block_text">
          <div
            className="col-12 col-md-8 col-lg-12 d-flex align-items-end"
            id="titre"
          >
            <h2>Work in progress...</h2>
          </div>
          <h5>site en construction</h5>
          <div className="col-4 offset-sm-0 d-flex align-items-center">
            <a href="#page1">
              <button type="button" className="btn btn-secondary btn-lg">
                <Link to="/contact" target="_blank" rel="noreferrer">
                  <p className=" d-md-inline d-none">Contactez-nous</p>
                </Link>
              </button>
            </a>
          </div>
          <div className="row d-flex justify-content-center d-block d-sm-none">
            <div className="col-6 offset-1">
              <div className="block5_2 d-flex align-items-end">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center d-none d-sm-block">
          <div className="col-3 offset-9">
            <div className="block5 d-flex align-items-end">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
