import React from 'react';

const Footer = () => {
  return (
    <><div className="footer-top">
          {/* Redes Sociais */}
          <div className="div-social-midias">
              <div className="social-midia-top">
                  <h5>Acesse nossas redes-sociais!</h5>
              </div>
              <div className="social-midia-bottom">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src="../assets/img/icones/icones_redes_sociais/instagram.png" alt="Instagram" />
                  </a>
                  <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                      <img src="../assets/img/icones/icones_redes_sociais/facebook.png" alt="Facebook" />
                  </a>
                  <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank" rel="noopener noreferrer">
                      <img src="../assets/img/icones/icones_redes_sociais/twitter.png" alt="Twitter" />
                  </a>
              </div>
          </div>

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
                  <div>
                      <h3>Telefone</h3>
                      <p>(19) 99933-1919</p>
                  </div>
              </div>
              {/* Email */}
              <div className="email">
                  <div className="icon-email">
                      <img src="../assets/img/icones/icones_tec/envelope.png" alt="email" />
                  </div>
                  <div>
                      <h3>E-mail</h3>
                      <p>PetCandle@gmail.com</p>
                  </div>
              </div>
              {/* Endereço */}
              <div className="address">
                  <div className="icon-address">
                      <img src="../assets/img/icones/icones_tec/pin.png" alt="address" />
                  </div>
                  <div>
                      <h3>Endereço</h3>
                      <p>Rua Av. Maria Thereza Silveira de Barros Camargo, 510 - Jardim Aquarius</p>
                  </div>
              </div>
          </div>
      </div><div className="footer-center" id="footer-center">
              <div className="footer-section">
                  <div className="about-us-footer">
                      <h3>Sobre Nós</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                      </p>
                  </div>
              </div>

              <div className="footer-section">
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

              <div className="footer-section">
                  <div className="app-download">
                      <h3>Baixe nosso aplicativo!</h3>
                      <div className="download-qr-code">
                          <img src="../assets/img/qrcode.png" alt="App" />
                      </div>
                  </div>
              </div>
          </div><div className="footer-bottom">
              <h5>Copyright ©2024 PetCandle. Design by: Eduardo Sinico & Davi Pedrosa.</h5>
          </div></>
  );
};

export default Footer;
