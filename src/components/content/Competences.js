import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp);

const Comp = () => {
  return (
    <div>
      <div className="container-fluid conteneur" id="comp">
        <div className="container-fluid align-items-center d-none d-lg-block contenu">
          <div className="col-1 offset-9">
            <div className="btn btn-secondary btn-lg d-flex justify-content-center">
              <a href="/#working">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                  className="arrow"
                />{" "}
              </a>
            </div>
          </div>
          <div className="row h2" id="">
            <h2 className="text-center">&lt;&gt; Notre expertise &lt;/&gt;</h2>
          </div>
          <div className="row barre d-flex align-items-center">
            <div className=" d-none d-lg-block col-lg-4 services d-flex justify-content-center align-items-center">
              <h3>Webdesign</h3>
            </div>
            <div className="  d-none d-lg-block col-lg-7 offset-lg-1 d-flex align-items-center justify-content-end">
              <div
                data-aos="fade-down-right"
                data-aos-delay="20"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p>
                  Votre identité de marque (logo, design de tous supports web)
                  est créée sur mesure pour répondre aux besoins de votre cible.
                  <li>Design de site internet</li>
                  <li>Application web & mobile</li>
                  <li>Mise en page de contenu</li>
                </p>
              </div>
            </div>

            {/* <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className="progress col-lg-8">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  id="barre1"
                  data-aos=" fade-left"
                  data-aos-delay="10"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div> */}
          </div>

          <div className="row barre d-flex align-items-center">
            <div className=" d-none d-lg-block col-lg-7 d-flex align-items-center justify-content-end">
            <div className="col-1 offset-9">
          </div>
          
              <div
                data-aos="fade-down-right"
                data-aos-delay="25"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p>
                  Nous prenons en charge le projet de refonte ou de création du
                  site vitrine de votre entreprise, de sa conception graphique à
                  son référencement. Nous faisons de votre site internet plus
                  qu’un simple site de présentation, un outil de communication
                  vous permettant de valoriser votre image, de gagner en
                  visibilité et de trouver de nouveaux clients. De plus, nous
                  vous assurons une formation à la gestion de votre site dont le
                  développement est réalisé avec soin et répond aux standards
                  web du W3C.
                  <li>HTML5 & CSS3</li>
                  <li>
                    Design responsive (adaptable ordinateur, tablette,
                    smartphone)
                  </li>
                </p>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 services d-flex justify-content-center align-items-center">
              <h3> Developpement Web </h3>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center"></div>
          </div>
          <div className="row barre d-flex align-items-center">
            <div className="col-lg-3 services d-flex justify-content-center align-items-center">
              <h3>Référencement naturel</h3>
            </div>
            <div className="  d-none d-lg-block col-lg-7 offset-lg-1 d-flex align-items-center justify-content-end">
              <div
                data-aos="fade-down-right"
                data-aos-delay="20"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p>
                  Votre site internet est développé avec pour objectif
                  d’apparaître dans les premières pages sur les moteurs de
                  recherche.
                  <li>Temps de chargement des pages optimisés</li>
                  <li>Indexation automatique des pages</li>
                  <li>Intégration des différents réseaux sociaux</li>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center  justify-content-center"></div>
          </div>
          <div className="row barre d-flex align-items-center">
            <div className="  d-none d-lg-block col-lg-7 d-flex align-items-center justify-content-end">
              <div
                data-aos="fade-down-right"
                data-aos-delay="15"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p>
                  {" "}
                  Aujourd’hui, plus de la moitié du trafic sur le web est
                  réalisé via un périphérique mobile (smartphone, tablette). Le
                  développement d’une application mobile pour votre entreprise
                  est donc un service devenu incontournable.
                  <li>Développement d’application iOS (iPhone, iPad)</li>
                  <li>
                    Développement d’application Android (Asus, Samsung, Sony, …)
                  </li>
                </p>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 services d-flex justify-content-center align-items-center">
              <h3>Application mobile</h3>
            </div>
            <div className="col-lg-5 d-flex align-items-center  justify-content-center"></div>
          </div>
          <div className="row barre d-flex align-items-center">
            <div className="col-lg-3 services d-flex justify-content-center align-items-center">
              <h3>Refonte de site internet</h3>
            </div>
            <div className="  d-none d-lg-block col-lg-7 offset-lg-1 d-flex align-items-center justify-content-end">
              <div
                data-aos="fade-down-right"
                data-aos-delay="10"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
              >
                <p>
                  Un site internet est un produit que vous vous devez de
                  maintenir à jour sous peine de perdre votre audience, votre
                  clientèle et votre référencement sur google. La refonte site
                  internet peut être un levier puissant pour donner un boost à
                  votre business en ligne.
                </p>
                <p>
                  L’enjeu principal de la refonte de site web est de conserver
                  votre image de marque tout en la mettant au goût du jour.
                  Améliorer un site c’est aussi améliorer ses leviers de
                  référencement et l’expérience utilisateur sur son site, ce qui
                  représente aussi deux très bonnes raisons de réaliser une
                  refonte de site.
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center  justify-content-center"></div>
          </div>
        </div>

        {/* ------------------------------ smart ----------------------------------------------- */}
        <div className="container-fluid d-block d-lg-none">
          <div className="container-fluid align-items-center contenu">
          <div className="col-1 offset-9">
            <div className="btn btn-secondary btn-lg d-flex justify-content-center">
              <a href="/#working">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  size="lg"
                  style={{ color: "#efefef" }}
                  className="arrow"
                />{" "}
              </a>
            </div>
          </div>
          <div className="row h2" id="">
            <h2 className="text-center">&lt;&gt; Notre expertise &lt;/&gt;</h2>
          </div>
            <div className="row barre d-flex align-items-center">
              <div className="col-12 services d-flex justify-content-center align-items-center">
                <h3>Webdesign</h3>
              </div>
              <div className="col-12  d-flex align-items-center justify-content-end">
                <div
                  data-aos="fade-down-right"
                  data-aos-delay="20"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <p>
                    Votre identité de marque (logo, design de tous supports web)
                    est créée sur mesure pour répondre aux besoins de votre
                    cible.
                    <li>Design de site internet</li>
                    <li>Application web & mobile</li>
                    <li>Mise en page de contenu</li>
                  </p>
                </div>
              </div>
            </div>
            <div className="row barre d-flex align-items-center">
              <div className="col-12 services d-flex justify-content-center align-items-center">
                <h3> Developpement Web </h3>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end">
                <div
                  data-aos="fade-down-right"
                  data-aos-delay="25"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <p>
                    Nous prenons en charge le projet de refonte ou de création
                    du site vitrine de votre entreprise, de sa conception
                    graphique à son référencement. Nous faisons de votre site
                    internet plus qu’un simple site de présentation, un outil de
                    communication vous permettant de valoriser votre image, de
                    gagner en visibilité et de trouver de nouveaux clients. De
                    plus, nous vous assurons une formation à la gestion de votre
                    site dont le développement est réalisé avec soin et répond
                    aux standards web du W3C.
                    <li>HTML5 & CSS3</li>
                    <li>
                      Design responsive (adaptable ordinateur, tablette,
                      smartphone)
                    </li>
                  </p>
                </div>
              </div>
            </div>
            <div className="row barre d-flex align-items-center">
              <div className="col-12 services d-flex justify-content-center align-items-center">
                <h3>Référencement naturel</h3>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end">
                <div
                  data-aos="fade-down-right"
                  data-aos-delay="20"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <p>
                    Votre site internet est développé avec pour objectif
                    d’apparaître dans les premières pages sur les moteurs de
                    recherche.
                    <li>Temps de chargement des pages optimisés</li>
                    <li>Indexation automatique des pages</li>
                    <li>Intégration des différents réseaux sociaux</li>
                  </p>
                </div>
              </div>

              <div className="col-5 d-flex align-items-center  justify-content-center"></div>
            </div>
            <div className="row barre d-flex align-items-center">
              <div className="col-12 services d-flex justify-content-center align-items-center">
                <h3>Application mobile</h3>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end">
                <div
                  data-aos="fade-down-right"
                  data-aos-delay="15"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <p>
                    {" "}
                    Aujourd’hui, plus de la moitié du trafic sur le web est
                    réalisé via un périphérique mobile (smartphone, tablette).
                    Le développement d’une application mobile pour votre
                    entreprise est donc un service devenu incontournable.
                    <li>Développement d’application iOS (iPhone, iPad)</li>
                    <li>
                      Développement d’application Android (Asus, Samsung, Sony,
                      …)
                    </li>
                  </p>
                </div>
              </div>

              <div className="col-5 d-flex align-items-center  justify-content-center"></div>
            </div>
            <div className="row barre d-flex align-items-center">
              <div className="col-12 services d-flex justify-content-center align-items-center">
                <h3>Refonte de site internet</h3>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end">
                <div
                  data-aos="fade-down-right"
                  data-aos-delay="10"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <p>
                    Un site internet est un produit que vous vous devez de
                    maintenir à jour sous peine de perdre votre audience, votre
                    clientèle et votre référencement sur google. La refonte site
                    internet peut être un levier puissant pour donner un boost à
                    votre business en ligne.
                  </p>
                  <p>
                    L’enjeu principal de la refonte de site web est de conserver
                    votre image de marque tout en la mettant au goût du jour.
                    Améliorer un site c’est aussi améliorer ses leviers de
                    référencement et l’expérience utilisateur sur son site, ce
                    qui représente aussi deux très bonnes raisons de réaliser
                    une refonte de site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
