import './../css/componentesCSS/container.css';
import './../css/index.css';

const Container = () => {
  return (
    <>
      {/*Container*/}
      <div className="container">
        {/* SERVIÇOS */}
        <section className="Servicos">
          <div className="div-cards">
            <div className="card-rectangle" style={{ backgroundColor: '#2eaf49' }} id="btn-food">
              <img src="../assets/img/icones/comida.png" alt="" />
              <span>Rações</span>
            </div>
            <div className="card-rectangle" style={{ backgroundColor: '#e0e0e0' }} id="btn-doc">
              <img src="../assets/img/icones/veterinario.png" alt="" />
              <span>Veterinário</span>
            </div>
            <div className="card-rectangle" style={{ backgroundColor: '#4a61a8' }} id="btn-toys">
              <img src="../assets/img/icones/Brinquedos.png" alt="" />
              <span>Brinquedos</span>
            </div>
            <div className="card-rectangle" style={{ backgroundColor: '#ffcc4a' }} id="btn-pet">
              <img src="../assets/img/icones/gatinho.png" alt="" />
              <span>Adote seu Pet</span>
            </div>
          </div>
        </section>

        <div className="div-about-us" id="AboutUs">
          <div className="container-about-us">
            <div className="div-left-about-us">
              <div className="title">
                <span className="span-about-us">Sobre Nós</span>
                <span className="title-about-us">Conheça a nossa história de longa data!</span>
              </div>
              <div className="content-about-us">
                <p>
                  Bem-vindo à nossa pet shop, nascida do sonho de três jovens em Limeira. Nosso compromisso é oferecer o melhor para seu pet, priorizando qualidade, carinho e bem-estar. Estamos aqui para fazer parte da história do seu fiel companheiro
                </p>
              </div>
              <div className="Nossa-Missao-Visao">
                <div className="btn-M-V">
                  <button className=" btn-Missao" id="btn-Missao">Nossa Missão</button>
                  <button className="btn-Visao" id="btn-Visao">Nossa Visão</button>
                </div>
                <div>
                  <p className="text-Missao">
                    Nossa missão é cuidar com carinho e qualidade dos animais de estimação, oferecendo produtos e serviços excepcionais. Priorizamos a satisfação dos clientes e o bem-estar de seus pets, garantindo um ambiente acolhedor e dedicado a cada visitante de quatro patas.
                  </p>
                  <p className="text-Visao">
                    Nossa visão é ser um ponto de referência para os amantes de pets. Queremos oferecer um ambiente acolhedor e produtos de qualidade que atendam às necessidades de cada animal e seu tutor, sendo reconhecidos pelo cuidado e dedicação aos nossos clientes de quatro patas.
                  </p>
                </div>
              </div>
            </div>

            <div className="div-right-about-us"> </div>
            <div className="testeAqui">
              <img src="/assets/img/a.png" alt="" />
            </div>

          </div>
        </div>

        <div className="div-services" id="Services">
          <div className="container-services">
            {/* LADO ESQUERDO */}
            <div className="div-left-services">
              <div className="service-img">
                <img src="../assets/img/DogServico.jpg" alt="cachorrinho" />
              </div>
            </div>
            {/* LADO DIREITO */}
            <div className="div-right-services">
              <div className="title">
                <span className="span-services">Nossos Serviços</span>
                <span className="title-services">Veja nossos serviços que disponibilizamos!</span>
              </div>
              <div className="services-section">
                <div className="services-top">
                  <div className="service-card">
                    <div className="service-div-img">
                      <div className="service-icon">
                        <img src="../assets/img/icones/banheira-de-bebe.png" alt="service icon" />
                      </div>
                    </div>
                    <div className="service-info">
                      <h1>Banho e Tosa</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="service-card">
                    <div className="service-div-img">
                      <div className="service-icon">
                        <img src="../assets/img/icones/Saude.png" alt="service icon" />
                      </div>
                    </div>
                    <div className="service-info">
                      <h1>Serviços Veterinários</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, modi assumenda.</p>
                    </div>
                  </div>
                </div>
                <div className="services-bottom">
                  <div className="service-card">
                    <div className="service-div-img">
                      <div className="service-icon">
                        <img src="../assets/img/icones/loja-de-animais.png" alt="service icon" />
                      </div>
                    </div>
                    <div className="service-info">
                      <h1>Buscamos o seu Pet</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, provident reprehenderit!</p>
                    </div>
                  </div>
                  <div className="service-card">
                    <div className="service-div-img">
                      <div className="service-icon">
                        <img src="../assets/img/icones/pet-transportadora.png" alt="service icon" />
                      </div>
                    </div>
                    <div className="service-info">
                      <h1>Hospedagem</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat ut.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;