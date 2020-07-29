import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" alt="Upflix logo" src={logo} />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
