import React from "react";
import PageRoot from "../../../components/PageRoot";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <PageRoot>
      <h1>Cadastro de video</h1>
      <Link to="/cadastro/categoria">Cadastro de Categoria</Link>
    </PageRoot>
  );
}

export default CadastroVideo;
