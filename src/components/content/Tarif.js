import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp);

const Tarif = () => {
  return (
    <div>
      <div className="container-fluid" id="working">
        <div className="col-1 offset-9">
          <div className="btn btn-secondary btn-lg d-flex justify-content-center">
            <Link to="/" target="_top" rel="noreferrer" className="nav-items">
              <FontAwesomeIcon
                icon={["fas", "arrow-up"]}
                size="lg"
                style={{ color: "#efefef" }}
                className="arrow"
              />
            </Link>
          </div>
        </div>
        {/* <div className="row block_text">
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
            <div className="col-5 offset-1">
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
        </div> */}

        <h2 className="text-left">
          &lt;&gt; &nbsp; Nos tarifs &nbsp; &lt;/&gt;
        </h2>
        <div className="row d-flex justify-content-around">
          <div className=" tarifs">
            <div className="row d-flex justify-content-center">
              <div className=" titre_tarifs">
                <h3>Pack création</h3>
              </div>
              <div className="prix col-10 d-flex align-items-center justify-content-center">
                <p className="dixmille">10000</p> <p> € HT</p>
              </div>
              <h5>
                Slogaaaaaaaaan !!!!
              </h5>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non lobortis enim. Donec mollis cursus rhoncus. Cras
              orci odio, pretium euismod est in, cursus hendrerit ex. Donec
              sagittis consectetur semper. Vestibulum congue quam augue, eget
              suscipit nunc consequat a.
            </p>
          </div>
          <div className=" tarifs">
            <div className="row d-flex justify-content-center">
              <div className=" titre_tarifs">
                <h3>Pack sur-mesure</h3>
              </div>
              <div className="prix col-10 d-flex align-items-center justify-content-center">
                <p className="dixmille">10000</p> <p> € HT</p>
              </div>
              <h5>
                Slogaaaaaaaaan !!!!
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non lobortis enim. Donec mollis cursus rhoncus. Cras
              orci odio, pretium euismod est in, cursus hendrerit ex. Donec
              sagittis consectetur semper. Vestibulum congue quam augue, eget
              suscipit nunc consequat a.
            </p>
          </div>
          <div className=" tarifs">
            <div className="row d-flex justify-content-center">
              <div className=" titre_tarifs">
                <h3>Pack e-commerce</h3>
              </div>
              <div className="prix col-10 d-flex align-items-center justify-content-center">
                <p className="dixmille">10000</p> <p> € HT</p>
              </div>
              <h5>
                Slogaaaaaaaaan !!!!
              </h5>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non lobortis enim. Donec mollis cursus rhoncus. Cras
              orci odio, pretium euismod est in, cursus hendrerit ex. Donec
              sagittis consectetur semper. Vestibulum congue quam augue, eget
              suscipit nunc consequat a.
            </p>
          </div>
          <div className=" tarifs">
            <div className="row d-flex justify-content-center">
              <div className=" titre_tarifs">
                <h3>Pack référencement</h3>
              </div>
              <div className="prix col-10 d-flex align-items-center justify-content-center">
                <p className="dixmille">10000</p> <p> € HT</p>
              </div>
              <h5>
                Slogaaaaaaaaan !!!!
              </h5>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non lobortis enim. Donec mollis cursus rhoncus. Cras
              orci odio, pretium euismod est in, cursus hendrerit ex. Donec
              sagittis consectetur semper. Vestibulum congue quam augue, eget
              suscipit nunc consequat a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
