import React from "react";
import logo from "../../asseets/img/logo.png";
import "./Menu.css";
import Button from "../Button"

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" alt="Upflix logo" src={logo} />
      </a>
      <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
