import './../css/componentesCSS/services.css';
import Footer from './Footer';
import './../css/index.css';

const Servicos = () => {
    return (

  
        <div>
          <img className="banner" src="../assets/img/banner/PetCandleServico.svg" alt="" />
          <header className="header">
            <nav className="navbar">
              <div className="logo-img">
                <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
              </div>
              <div className="links">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Produtos</a></li>
                  <li><a href="/services">Serviços</a></li>
                  <li><a href="#AboutUs" className="About-Us-Link">Sobre nós</a></li>
                </ul>
              </div>
              <div className="login-cad-section">
                <a href="#">Login</a> |
                <a href="#">Cadastro</a>
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="services.html">Serviços</a></li>
                    <li><a href="#AboutUs" className="About-Us-Link">Sobre nós</a></li>
                  </ul>
                </div>
                <div className="login-cad-section">
                  <a href="#">Login</a> |
                  <a href="#">Cadastro</a>
                </div>
                <form className="search-box">
                  <input type="text" placeholder="Pesquisar..." />
                  <button type="submit">
                    <img src="../assets/img/icones/icones_tec/search-icon.png" alt="Pesquisa" />
                  </button>
                </form>
              </nav>
            </div>
          </header>
    
          <div className="container-service">
            <div className="div-services-page">
              <div className="div-right-services-page">
                <div className="title">
                  <span className="span-services">Nossos Serviços</span>
                  <span className="title-services">Conheça um pouco sobre nossos serviços!</span>
                </div>
                <div className="services-page-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat quos explicabo ipsum
                    impedit
                    nulla
                    deleniti, ipsa veniam, iusto quibusdam eaque mollitia ex optio blanditiis reprehenderit quam
                    quia,
                    consequatur fugiat.
                  </p>
                </div>
                <div className="services-category">
                  <div className="service-card">
                    <div className="services-icon">
                      <img src="../assets/img/icones/banheira-de-bebe.png" alt="service icon" />
                    </div>
                    <div className="services-info">
                      <h2>Banho e Tosa</h2>
                    </div>
                  </div>
                  {/* ... (restante dos cards) */}
                </div>
              </div>
              <div className="div-left-services-page">
                <img src="../assets/img/CardCachorro2.jpg" alt="dog" />
              </div>
            </div>
          </div>
    
          <footer className="footer" id="footer">
            <Footer/>
          </footer>
        </div>
      );
    };
  
  export default Servicos;