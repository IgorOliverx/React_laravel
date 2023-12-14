import './../css/componentesCSS/footer.css';
import SocialCard from "./subcomponents/SocialIcons.jsx"; 
import './../css/cssSubcomponents/SocialMedia.css'
import ThreeDCard from './subcomponents/CardHover3.jsx';
import './../css/index.css';

const Footer = () => {
  return (
    <><div className="footer-top">
          {/* Redes Sociais */}
         <SocialCard/>
         
          {/* Input de contato */}
          <div className="div-contact-input">
              <input type="text" placeholder="Contato" />
          </div>

          {/* Endereço, Telefone e Email */}
          <div className="div-info">
              {/* Telefone */}
              <div className="phone">
                  <div className="icon-phone">
                      <img src="../assets/img/icones/icones_tec/smartphone-call.png" alt="phone" />
                  </div>
                  <div className="info-text">
                      <h3>Telefone</h3>
                      <p>(19) 99933-1919</p>
                  </div>
              </div>
              {/* Email */}
              <div className="email">
                  <div className="icon-email">
                      <img src="../assets/img/icones/icones_tec/envelope.png" alt="email" />
                  </div>
                  <div className="info-text">
                      <h3>E-mail</h3>
                      <p>PetCandle@gmail.com</p>
                  </div>
              </div>
            
          </div>
      </div><div className="footer-center" id="footer-center">
              <div className="footer-section-1">
                  <div className="about-us-footer">
                      <h3>Sobre Nós</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500
                      </p>
                  </div>
              </div>

              <div className="footer-section-2">
                  <div className="home-link">
                      <h3>Home</h3>
                      <ul>
                          <li><a href="#">Início</a></li>
                          <li><a href="#AboutUs">Sobre Nós</a></li>
                          <li><a href="#Services">Serviços</a></li>
                          <li><a href="#Products">Produtos</a></li>
                          <li><a href="#Promotions">Promoções</a></li>
                      </ul>
                  </div>
              </div>

              <div className="footer-section-app">
              <ThreeDCard/>
              </div>
          </div><div className="footer-bottom">
              <h5>Copyright ©2024 PetCandle. Design by: Eduardo Sinico & Davi Pedrosa.</h5>
          </div></>
  );
};

export default Footer;
