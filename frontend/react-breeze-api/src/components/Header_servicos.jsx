import { Link } from "react-router-dom";
import Search from "./subcomponents/Search";
import "./../css/componentesCSS/header_services.css";
import "./../css/index.css";
import "./../css/cssSubcomponents/InputSearch.css";
import "./../../assets/img/banner/PetCandleServico.svg"


const Header = () => {
  return (
    <>
      <img
        className="banner"
        src="./../../assets/img/banner/PetCandleServico.svg"
        alt=""
      />
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
                  Sobre nós
                </a>
              </ul>
            </div>
          </div>
          <div className="login-responsive">
            <div className="login-cad-section">
              <Link to="/login" className="...">
                Login
              </Link>{" "}
              |
              <Link to="/cadastro" className="...">
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
              <Link to="/" className="...">
                Home
              </Link>
              <li>
                <a href="#">Produtos</a>
              </li>
              <li>
                <Link to="/servicos" className="...">
                  Serviços
                </Link>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Login/Cadastro</a>
              </li>
            </ul>
          </nav>

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
                    <Link to="/servicos" className="...">
                      Serviços
                    </Link>
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
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
