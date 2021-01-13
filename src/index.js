import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/css/Nav.css";
import "./css/Accueil.css";
import "./css/Competences.css";
import "./css/Apropos.css";
import "./css/tarifs.css"

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Mentions from "./components/content/footer/Mentions";
import Apropos from "./components/content/Apropos";
import Competences from "./components/content/Competences";
import Tarif from "./components/content/Tarif";
import Portfolio from "./components/content/Portfolio";
import Blog from "./components/content/Blog";
import Accueil from "./components/Accueil";
import { Route,  BrowserRouter as Router } from "react-router-dom";
import ContactForm from './components/content/ContactForm';
import Footer from './components/Footer';
import App from './App'






const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/accueil" component={Accueil} />
      <Route exact path="/mentions" component={Mentions} />
      <Route exact path="/apropos" component={Apropos} />
      <Route exact path="/competences" component={Competences} />
      <Route exact path="/tarif" component={Tarif} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/footer" component={Footer} />

    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
