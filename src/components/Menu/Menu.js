// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import Cross from "./../../assets/cross.png";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {/* <Link to="/" rel="noreferrer">
        <img
          className="img-fluid Icone"
          src={Cross}
          alt="croix de fermeture"
        ></img>
      </Link> */}
      <Link to="/">Accueil</Link>
      <Link to="/apropos" rel="noreferrer">
        Nous connaitre
      </Link>
      <Link to="/competences" rel="noreferrer">
        Nos compétences
      </Link>
      <Link to="/tarif" rel="noreferrer">
        Nos tarifs
      </Link>
      <Link to="/portfolio" rel="noreferrer">
        Portfolio
      </Link>
      <a href="https://www.horizonwebdesign.blog/" rel="noreferrer">
        Blog
      </a>

      <Link to="/footer" rel="noreferrer">
        Mentions légales
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
