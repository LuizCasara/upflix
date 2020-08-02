import React, { useState, useEffect } from "react";
import PageRoot from "../../../components/PageRoot";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { values, handleChange } = useForm({
        titulo: 'Video Padrão',
        url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg'
    });

    function handleSubmit(event) {
        event.preventDefault();
        const categoriaId = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        }).id;
        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId,
        })
        history.push('/')
    }

    useEffect(() => {
        categoriasRepository.getAll()
            .then((response) => {
                setCategorias(response);
            })
    }, [])

    return (
        <PageRoot>
            <h1>Cadastro de video</h1>

            <form>
                <FormField
                    label="Título do video: "
                    tag="input"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="URL: "
                    tag="input"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria: "
                    tag="input"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categorias.map(({ titulo }) => titulo)}
                />
                <br />
                <Button as="Link" type="submit" onClick={handleSubmit} >Cadastrar</Button>
            </form>

            <Link to="/cadastro/categoria">Cadastro de Categoria</Link>
        </PageRoot>
    );
}

export default CadastroVideo;
