import React, { useState, useEffect } from "react";
import PageRoot from "../../../components/PageRoot";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

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
        if (values.name != null && values.name !== "") {
            setCategories([...categories, values]);
            setNewCategory(init);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const URL = 'https://upflix.herokuapp.com/categorias';
            fetch(URL)
                .then(async (response) => {
                    const loaded = await response.json();
                    setCategories([...loaded]);
                });
        }, 2 * 1000)
    }, []);

    return (
        <PageRoot>
            <h1>Cadastro de categoria: {values.name}</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Nome: "
                    tag="input"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição: "
                    tag="textarea"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor: "
                    tag="input"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />
                <br />
                <Button as="Link">Cadastrar</Button>
            </form>

            {categories.length === 0 &&
                <div>
                    Loading...
                </div>
            }

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
