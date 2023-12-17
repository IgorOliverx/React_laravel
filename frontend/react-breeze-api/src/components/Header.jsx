import { Link } from "react-router-dom";
import Search from "./subcomponents/Search";
import "./../css/componentesCSS/header.css";
import "./../css/index.css";
import "./../css/cssSubcomponents/InputSearch.css";

const Header = () => {
  return (
    <>
      <img className="banner" src="../assets/img/banner/PetCandle.svg" alt="" />
      <header className="header">
        {/* Navbar e Botão */}

        <nav className="navbar">

          <div className="logo-img">
            <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
          </div>
          <div className="links-responsive">
            <div className="links">
              <ul>
                <Link to="/" className="...">
                  Home
                </Link>
                <a href="#" className="...">
                  Produtos
                </a>
                <Link to="/servicos" className="...">
                  Serviços
                </Link>
                <a href="#AboutUs" className="About-Us-Link">
                  Sobre Nós
                </a>
              </ul>
            </div>
          </div>
          <div className="login-responsive">
            <div className="login-cad-section">
              <Link to="/login" className="...">
                Login
              </Link> |<Link to="/cadastro" className="...">
                Cadastro
              </Link>
            </div>
          </div>
          <Search />


          <nav class="menu-hamburger">

            <input id="menu-hamburguer" type="checkbox" />
            <label for="menu-hamburguer">
              <div class="menu">
                <span class="hamburguer"></span>
              </div>
            </label>

            <ul class="menu-hamburguer-elements show">
              <li>
                <Link to="/" className="...">
                  Home
                </Link>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <Link to="/login" className="...">
                  Login
                </Link> |<Link to="/cadastro" className="...">
                  Cadastro
                </Link>
              </li>
            </ul>
          </nav>

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
                    <Link to="/" className="...">
                      Home
                    </Link>
                    <a href="#">Produtos</a>
                    <Link to="/servicos" className="...">
                      Serviços
                    </Link>
                    <a href="#AboutUs" className="About-Us-Link">
                      Sobre Nós
                    </a>
                  </ul>
                </div>
              </div>
              <div className="login-cad-section">
                <Link to="/login" className="...">
                  Login
                </Link> |<Link to="/cadastro" className="...">
                  Cadastro
                </Link>
              </div>
              <Search />


              <nav class="menu-hamburger">

                <input id="menu-hamburguer" type="checkbox" />
                <label for="menu-hamburguer">
                  <div class="menu">
                    <span class="hamburguer"></span>
                  </div>
                </label>

                <ul class="menu-hamburguer-elements show">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Produtos</a>
                  </li>
                  <li>
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <a href="#">Sobre Nós</a>
                  </li>
                  <li>
                    <a href="#">Login/Cadastro</a>
                  </li>
                </ul>
              </nav>
            </nav>
          </div>
        </div>
        <div className="btn-banner">
          <button href="">Saiba Mais!</button>
        </div>
      </header>
    </>
  );
};

export default Header;
