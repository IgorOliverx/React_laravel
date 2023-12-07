import { Link } from "react-router-dom";
import Search from "./subcomponents/Search";
import './../css/componentesCSS/header.css';
import './../css/index.css';
import './../css/cssSubcomponents/InputSearch.css';



const Header = () => {
    return (
        <><img className="banner" src="../assets/img/banner/PetCandle.svg" alt="" />
            <header className="header">
                {/* Navbar e Botão */}
                <nav className="navbar">

                    {/* --==HAMBURGUER==--
                <div className="menu-hamburguer">
                    <img className="hamburguer-img" src="../assets/img/icones/icones_tec/menu.png" alt="menu-hamburguer" />
                </div>
                <div className="div-menu-hamburguer">
                    <div className="container-menu-hamburguer">
                        <div className="cancelar-menu">
                            <img className="cancelar-img" src="../assets/img/icones/icones_tec/cancelar.png" alt="menu-hamburguer" />
                        </div>
                        <div className="links-hamburguer">
                            <ul>
                                <a href="/" className="...">Home</a>
                                <a href="#" className="...">Produtos</a>
                                <Link to="/servicos" className="...">Serviços</Link>
                                <a href="#AboutUs" className="About-Us-Link">Sobre nós</a>
                            </ul>
                        </div>
                    </div>
                </div> */}

                    <div className="logo-img">
                        <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                    </div>
                    <div className="links-responsive">
                        <div className="links">
                            <ul>
                                <a href="/" className="...">Home</a>
                                <a href="#" className="...">Produtos</a>
                                <Link to="/servicos" className="...">Serviços</Link>
                                <a href="#AboutUs" className="About-Us-Link">Sobre nós</a>
                            </ul>
                        </div>
                    </div>
                    <div className="login-responsive">
                        <div className="login-cad-section">
                            <a href="">Login</a> |
                            <a href="">Cadastro</a>
                        </div>
                    </div>
                    <Search />
                </nav>
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
                                    <a href="#AboutUs" className="About-Us-Link">Sobre nós</a>
                                </ul>
                            </div>
                        </div>
                        <div className="login-cad-section">
                            <a href="">Login</a> |
                            <a href="">Cadastro</a>
                        </div>
                        <Search />
                    </nav>
                </div>
                <div className="btn-banner">
                    <button href="">Saiba Mais!</button>
                </div>
            </header></>
    );
};

export default Header;