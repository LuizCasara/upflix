import React, { useState } from "react";
import PageRoot from "../../../components/PageRoot";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const init = {
    name: "",
    description: "",
    color: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setNewCategory] = useState(init);

  function setValues(value, field) {
    setNewCategory({ ...values, [field]: value });
  }

  function handleChange(event) {
    const { target } = event;
    const { value } = event.target;
    setValues(value, target.getAttribute("name"));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (values.name != null && values.name != "") {
      setCategories([...categories, values]);
      setNewCategory(init);
    }
  }

  return (
    <PageRoot>
      <h1>Cadastro de categoria: {values.name}</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome: "
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="area"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <br />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((categoria, idx) => {
          return <li key={`${categoria.name}-${idx}`}>{categoria.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
