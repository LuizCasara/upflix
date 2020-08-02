import React, { useState, useEffect } from "react";
import PageRoot from "../../../components/PageRoot";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import URL_BACKEND from "../../../config";
import categoriesRepository from "../../../repositories/categorias";

function CadastroCategoria() {
    const init = {
        titulo: "",
        description: "",
        color: "",
    };
    const { handleChange, values, clearForm } = useForm(init);
    const [categories, setCategories] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        if (values.titulo != null && values.titulo !== "") {
            setCategories([...categories, values]);
            clearForm(init);
        }
    }

    useEffect(() => {
        categoriesRepository.getAllWithVideos()
            .then((response) => {
                setCategories(response);
            });
    }, []);

    return (
        <PageRoot>
            <h1>Cadastro de categoria: {values.titulo}</h1>
            <form>
                <FormField
                    label="Nome: "
                    tag="input"
                    type="text"
                    name="titulo"
                    value={values.titulo}
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
                <Button as="Link" onClick={handleSubmit}>Cadastrar</Button>
            </form>

            {categories.length === 0 &&
                <div>
                    Loading...
                </div>
            }

            <ul>
                {categories.map((categoria, idx) => {
                    return <li key={`${categoria.titulo}-${idx}`}>{categoria.titulo}</li>;
                })}
            </ul>

            <Link to="/">Ir para home</Link>
        </PageRoot>
    );
}

export default CadastroCategoria;
