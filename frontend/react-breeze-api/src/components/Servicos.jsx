import './../css/componentesCSS/services.css';
import Footer from './Footer.jsx';
import './../css/index.css';
import Header_servicos from './Header_servicos.jsx';

const Servicos = () => {
  return (
    <>
      <Header_servicos />
      <div className="container-service-page">
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
              <div className="services-card">

                <div className="service-icon">
                  <img src="../assets/img/icones/banheira-de-bebe.png" alt="service icon" />
                </div>

                <div className="service-info">
                  <h4 className="service-text">Banho e Tosa</h4>                            </div>
              </div>

              <div className="services-card">
                <div className="service-icon">
                  <img src="../assets/img/icones/Saude.png"
                    alt="service icon"></img>
                </div>

                <div className="service-info">
                  <h4 lassName="service-text">Serviços Veterinários</h4>                            </div>
              </div>

              <div className="services-card">
                <div className="service-icon">
                  <img
                    src="../assets/img/icones/loja-de-animais.png"
                    alt="service icon"></img>
                </div>
                <div className="service-info">
                  <h4 lassName="service-text">Buscamos o seu Pet</h4>                            </div>
              </div>


              <div className="services-card">
                <div className="service-icon">
                  <img
                    src="../assets/img/icones/pet-transportadora.png"
                    alt="service icon"></img>
                </div>
                <div className="service-info">
                  <h4 lassName="service-text">Hospedagem</h4></div>
              </div>
            </div>
          </div>
          <div className="div-left-services-page">
            <img src="../assets/img/CardCachorro2.jpg" alt="dog" />
          </div>
        </div>

        <div className="container-agendamento">
          <div className="img-agendamento">
            <img src="" alt="gatinho" />
          </div>
          <div className="agenda-info">
            <div className="agenda-title">
              <h1>Faça já o seu Agendamento!</h1>
              <p className="agendar-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit placeat eligendi incidunt minus?
              </p>
              <div className="agenda-btn">
                <button>Agendar</button>
              </div>
            </div>
          </div>
        </div>
      </div><footer className="footer" id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Servicos;