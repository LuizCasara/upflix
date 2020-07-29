import React from "react";
import PageRoot from "../../../components/PageRoot";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  return (
    <PageRoot>
      <h1>Cadastro de categoria</h1>
      <Link to="/">Home</Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
