import { Link } from "react-router-dom";



const Header = () => {
    return (
        <><img className="banner" src="../assets/img/banner/PetCandle.svg" alt="" /><header className="header">
            {/* Navbar e Botão */}
            <nav className="navbar">
                <div className="logo-img">
                    <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                </div>
                <div className="links">
                    <ul>
                        <a href="index.html" className="...">Home</a>
                        <a href="#" className="...">Produtos</a>
                        <Link to="/servicos" className="...">   </Link>
                        <a href="#AboutUs" className="About-Us-Link">Sobre nós</a>
                    </ul>
                </div>
                <div className="login-cad-section">
                    <a href="">Login</a> |
                    <a href="">Cadastro</a>
                </div>
                <form className="search-box">
                    <input type="text" placeholder="Pesquisar..." />
                    <button type="submit">
                        <img src="../assets/img/icones/icones_tec/search-icon.png" alt="Pesquisa" />
                    </button>
                </form>
            </nav>
            <div id="navbar-scroll">
                <nav className="navbar">
                    <div className="logo-img">
                        <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                    </div>
                    <div className="links">
                        <ul>
                            <a href="index.html">Home</a>
                            <a href="#">Produtos</a>
                            <a href="#">Serviços</a>
                            <a href="#AboutUs" className="About-Us-Link">Sobre nós</a>
                        </ul>
                    </div>
                    <div className="login-cad-section">
                        <a href="">Login</a> |
                        <a href="">Cadastro</a>
                    </div>
                    <form className="search-box">
                        <input type="text" placeholder="Pesquisar..." />
                        <button type="submit">
                            <img src="../assets/img/icones/icones_tec/search-icon.png" alt="Pesquisa" />
                        </button>
                    </form>
                </nav>
            </div>
            <div className="btn-banner">
                <button href="">Saiba Mais!</button>
            </div>
        </header></>
    );
};

export default Header;