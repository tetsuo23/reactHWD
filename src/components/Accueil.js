import React from "react";
import Competences from "./content/Competences";
import Apropos from "./content/Apropos";
import Footer from './Footer';
import Typical from "react-typical";
import Nav from './Nav';


const accueil = () => {
  return (
    <div>
      <Nav />
      <div className="container-fluid" id="working">
      <div className="row">
            <div className="titre col-lg-12 col-xl-6 offset-xl-3 d-flex justify-content-center align-items-center">
              <h1>Horizon Web Design</h1>
            </div>
          </div>
        <div className="text-animation">
          
          
            <Typical
              steps={["Développement de site web___", 1000, "refonte de site___", 1000, "Référencement naturel___", 1000, "e-commerce___", 1000, "Web design___", 1000, "Application mobile___", 1000]}
              loop={Infinity}
              wrapper="h2"
            />
          
        </div>
      </div>
      <Competences />
      <Apropos />
      <Footer />
    </div>
  );
};

export default accueil;
