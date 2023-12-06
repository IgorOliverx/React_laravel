import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import Produtos from "./Produtos";

const Home = () => {
  return (
    <>
      <div id="header">
        <Header/>
      </div>
      <Container/>
      <div id="carrinho" className="carrinho right-hidden">
        <div id="produtos-carrinho" className="produtos-carrinho">
          {/* Os produtos adicionados ao carrinho aparecerão aqui */}
        </div>
      </div>
      <div className="slider">
        {/* Conteúdo do carrosel de produtos */}
        <Produtos/>
      </div>
      <footer className="footer" id="footer">
       <Footer  />
      </footer>
    </>
  );
};

export default Home;
