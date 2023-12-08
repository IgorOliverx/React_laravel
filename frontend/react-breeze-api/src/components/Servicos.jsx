import './../css/componentesCSS/services.css';
import Footer from './Footer.jsx';
import './../css/index.css';
import Header_servicos from './Header_servicos.jsx';

const Servicos = () => {
  return (
    <>
      <Header_servicos/>
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
      </div><footer className="footer" id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Servicos;