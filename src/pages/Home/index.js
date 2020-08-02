import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import BannerMain from "../../components/BannerMain";
import PageRoot from "../../components/PageRoot";
import categoriesRepository from '../../repositories/categorias'

function Home() {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const response = categoriesRepository.getAllWithVideos()
            .then((categorias) => {
                setCategorias(categorias)
                console.log('>>',categorias);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }, []);

    return (
        <PageRoot paddingAll={0}>
            {categorias.length === 0 && <div>loading...</div>}
            {categorias.length >= 1 &&
                categorias.map((categoria, index) => {
                if (index === 0) {
                    const titulo = categoria.videos[0]?.titulo;
                    const url = categoria.videos[0]?.url;
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoDescription="Iai? será que é? ou nem?"
                                videoTitle={titulo}
                                url={url}
                            />
                            <Carousel ignoreFirstVideo={false} category={categoria} />
                        </div>
                    )
                }
                return <Carousel key={categoria.id} ignoreFirstVideo={false} category={categoria} />;
            })}

        </PageRoot>
    );
}

export default Home;
