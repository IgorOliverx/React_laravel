import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import './../../css/componentesCSS/header.css';

const HeaderLogin = () =>{
    return (
        <>
      <header className="headerLogin">
        {/* Navbar e Botão */}

        <nav className="navbar">
          
          <div className="logo-img">
            <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
          </div>
          <div className="links-responsive">
            <div className="links">
              <ul>
                <a href="/" className="...">
                  Home
                </a>
                <a href="#" className="...">
                  Produtos
                </a>
                <Link to="/servicos" className="...">
                  Serviços
                </Link>
                <a href="#AboutUs" className="About-Us-Link">
                  Sobre nós
                </a>
              </ul>
            </div>
          </div>
          <div className="login-responsive">
            <div className="login-cad-section">
              <a href="">Login</a> |<a href="">Cadastro</a>
            </div>
          </div>
          <Search />

          <div className="menu-hamburguer">
            <input type="checkbox" name="" id="faketrigger" />
            <div className="linhas">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className="navbar-responsiva">
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Produtos</li>
                <li><a href="#"></a>Serviços</li>
                <li><a href="#"></a>Sobre Nós</li>
                <li><a href="#"></a>Login/Cadastro</li>
            </ul>
          </div>

          {/* <img src="../assets/img/icones/icones_tec/menu-aberto.png" alt="menu-hamburguer" /> */}
        </nav>

        <div className="navbar-container">
          <div id="navbar-scroll">
            <nav className="navbar">
              <div className="logo-img">
                <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
              </div>
              <div className="links-responsive">
                <div className="links">
                  <ul>
                    <a href="index.html">Home</a>
                    <a href="#">Produtos</a>
                    <a href="#">Serviços</a>
                    <a href="#AboutUs" className="About-Us-Link">
                      Sobre nós
                    </a>
                  </ul>
                </div>
              </div>
              <div className="login-cad-section">
                <a href="">Login</a> |<a href="">Cadastro</a>
              </div>
              <Search />
            </nav>
          </div>
        </div>
      </header>
    </>

    )
}

export default HeaderLogin;