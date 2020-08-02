import React, { useState, useEffect } from "react";
import PageRoot from "../../../components/PageRoot";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import URL_BACKEND from "../../../config";
import categoriesRepository from "../../../repositories/categorias";
import videosRepository from '../../../repositories/videos'

function CadastroCategoria() {
    const history = useHistory();
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
            categoriesRepository.create({
                titulo: values.titulo,
                description: values.description,
                color: values.color,
            })
            clearForm(init);
            history.push('/')
        }
    }

    async function handleRemove(id) {
        const hasVideo = await videosRepository.getByCategoryId(id);
        if (hasVideo.length === 0) {
            categoriesRepository.remove(id);
            setCategories([...categories.filter(categoria => categoria.id !== id)]);
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
                    return (
                        <div style={{ display: 'flex' }}>
                            <li key={`${categoria.titulo}-${idx}`}>{categoria.titulo}</li>
                            <div style={{ cursor: 'pointer', color: 'red', paddingLeft: '4px' }} onClick={() => handleRemove(categoria.id)}>{"X"}</div>
                        </div>
                    );
                })}
            </ul>

            <br />
            <Link to="/">Ir para home</Link>
        </PageRoot>
    );
}

export default CadastroCategoria;
