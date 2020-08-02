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
    const [videos, setVideos] = useState([]);
    const { values, handleChange } = useForm({
        titulo: '',
        url: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        const categoriaId = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        })?.id;
        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaId ?? 3,
        })
        history.push('/')
    }

    function handleRemove(id) {
        videosRepository.remove(id);
        setVideos([...videos.filter(video => video.id !== id)]);
    }

    useEffect(() => {
        loadCategorias();
        loadVideos();
    }, [])

    function loadCategorias() {
        categoriasRepository.getAll()
            .then((response) => {
                setCategorias(response);
            })
    }

    function loadVideos() {
        videosRepository.getAll()
            .then((response) => {
                setVideos(response);
            })
    }

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

            {videos.length === 0 &&
                <div>
                    Loading...
                </div>
            }
            <ul>
                {videos.map((video, idx) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <li key={`${video.titulo}-${idx}`}>{video.titulo}[{video.categoriaId}] </li>
                            <div style={{ cursor: 'pointer', color: 'red', paddingLeft: '4px' }} onClick={() => handleRemove(video.id)}>{"X"}</div>
                        </div>
                    );
                })}
            </ul>

            <br />
            <Link to="/">Ir para home</Link>
        </PageRoot>
    );
}

export default CadastroVideo;
