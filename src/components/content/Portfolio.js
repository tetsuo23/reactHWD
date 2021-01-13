import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp);

const Portfolio = () => {
  return (
    <div>
      <div className="container-fluid" id="working">
        <div className="col-1 offset-9">
          <div className="btn btn-secondary btn-lg d-flex justify-content-center">
          <Link
                      to="/"
                      target="_top"
                      rel="noreferrer"
                      className="nav-items"
                    >
                     <FontAwesomeIcon
                        icon={["fas", "arrow-up"]}
                        size="lg"
                        style={{ color: "#efefef" }}
                        className="arrow"
                      /> 
                    </Link>
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
            
              <button type="button" className="btn btn-secondary btn-lg">
              <Link to="/contact" target="_blank" rel="noreferrer">
                  Contact
                </Link>
              </button>
            
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

export default Portfolio;
