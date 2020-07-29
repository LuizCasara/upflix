import React from "react";
import Menu from "../../components/Menu";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import BannerMain from "../../components/BannerMain";
import dadosIniciais from "../../data/dados_iniciais.json";
import PageRoot from "../../components/PageRoot";

function Home() {
  return (
    <PageRoot>
      <BannerMain
        videoDescription="Iai? será é ou nem?"
        videoTitle={dadosIniciais.categorias[2].videos[0].titulo}
        url={dadosIniciais.categorias[2].videos[0].url}
      />
      {dadosIniciais.categorias.map((categoria) => {
        return <Carousel ignoreFirstVideo={false} category={categoria} />;
      })}
    </PageRoot>
  );
}

export default Home;
