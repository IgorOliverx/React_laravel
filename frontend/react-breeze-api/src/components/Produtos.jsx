import { catalogo, catalogoBrinquedos, catalogoVeterinario } from "../js/utilidades.js";
const Produtos = () => {
  return (
    <>
      <div className="title">
        <span className="span-products">Nossos Produtos</span>
        <span className="title-products">Veja nossos produtos mais populares!</span>
      </div>

      {/* Categoria - Rações */}
      <div className="category">
        <span className="category-products" id="cat-food">
          <h2>Rações</h2>
        </span>
      </div>
      {/* Container Card 1 */}
      <div className="container-card1" id="container-card1">
        <button className="prevItem" id="prevItem"><img src="../assets/img/icones/icones_tec/arrows-left.svg" alt="Seta" /></button>
        <div className="slider-container">
          <div className="div-cards-slide" id="card-slide">
            {/* CONTEUDO ESTÁ SENDO GERADO AQUI */}

           {/* Iterando sobre as propriedades do catalogo */}

           {catalogo.map((produto) => (
            <div className="product-card" key={produto.id}>
              <div className="logo-cart">
                <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                <i className='bx bx-shopping-bag'></i>
              </div>
              <div className="main-images">
                <img className="blue active" src={`../assets/img/produtos/${produto.imagem}`} alt="blue" />
                <img className="pink" src={`../assets/img/produtos/${produto.imagemdes}`} alt="pink" />
                <img className="yellow" src={`../assets/img/produtos/${produto.imagemben}`} alt="yellow" />
              </div>
              <div className="shoe-details">
                <span className="shoe_name">{produto.nome}</span>
                <p>{produto.descricao}</p>
                <div className="stars">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bx-star'></i>
                </div>
              </div>
              <div className="color-price">
                <div className="color-option">
                  <span className="color">Disponível</span>
                  <div className="circles">
                    <span className="circle blue active" id="blue"></span>
                    <span className="circle pink" id="pink"></span>
                    <span className="circle yellow" id="yellow"></span>
                  </div>
                </div>
                <div className="price">
                  <span className="price_num">{produto.preco}</span>
                  <span className="price_letter"></span>
                </div>
              </div>
              <div className="button">
                <div className="button-layer"></div>
                <button>Comprar</button>
              </div>
            </div>
          ))}
          </div>
        </div>
        <button className="nextItem" id="nextItem"><img src="../assets/img/icones/icones_tec/arrows-right.svg" alt="Seta" /></button>
      </div>






      {/* Categoria - Veterinário */}
      <div className="category">
        <span className="category-products" id="cat-doc">
          <h2>Veterinário</h2>
        </span>
      </div>

      {/* Container Card 2 */}
      <div className="container-card2">
        <button className="prevItem" id="prevItem2"><img src="../assets/img/icones/icones_tec/arrows-left.svg" alt="Seta" /></button>
        <div className="slider-container">
          <div className="div-cards-slide2" id="card-slide2">
            {/* GERAR CONTEUDO AQUI */}
            {catalogoVeterinario.map((produto) => (
            <div className="product-card" key={produto.id}>
              <div className="logo-cart">
                <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                <i className='bx bx-shopping-bag'></i>
              </div>
              <div className="main-images">
                <img className="blue active" src={`../assets/img/produtos/veterinario/${produto.imagem}`} alt="blue" />
                <img className="pink" src={`../assets/img/produtos/veterinario/${produto.imagemdes}`} alt="pink" />
                <img className="yellow" src={`../assets/img/produtos/veterinario/${produto.imagemben}`} alt="yellow" />
              </div>
              <div className="shoe-details">
                <span className="shoe_name">{produto.nome}</span>
                <p>{produto.descricao}</p>
                <div className="stars">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bx-star'></i>
                </div>
              </div>
              <div className="color-price">
                <div className="color-option">
                  <span className="color">Disponível</span>
                  <div className="circles">
                    <span className="circle blue active" id="blue"></span>
                    <span className="circle pink" id="pink"></span>
                    <span className="circle yellow" id="yellow"></span>
                  </div>
                </div>
                <div className="price">
                  <span className="price_num">{produto.preco}</span>
                  <span className="price_letter"></span>
                </div>
              </div>
              <div className="button">
                <div className="button-layer"></div>
                <button>Comprar</button>
              </div>
            </div>
          ))}
          </div>
        </div>
        <button className="nextItem" id="nextItem2"><img src="../assets/img/icones/icones_tec/arrows-right.svg" alt="Seta" /></button>
      </div>


      {/* Categoria - Brinquedos */}
      <div className="category">
        <span className="category-products" id="cat-toys">
          <h2>Brinquedos</h2>
        </span>
      </div>

      {/* Container Card 3 */}
      <div className="container-card3">
        <button className="prevItem" id="prevItem3"><img src="../assets/img/icones/icones_tec/arrows-left.svg" alt="Seta" /></button>
        <div className="slider-container">
          <div className="div-cards-slide3" id="card-slide3">

            {/* GERANDO CONTEUDO AQUI */}

            {catalogoBrinquedos.map((produto) => (
            <div className="product-card" key={produto.id}>
              <div className="logo-cart">
                <img src="../assets/img/logo/petcandle-logo.png" alt="logo" />
                <i className='bx bx-shopping-bag'></i>
              </div>
              <div className="main-images">
                <img className="blue active" src={`../assets/img/produtos/brinquedos/${produto.imagem}`} alt="blue" />
                <img className="pink" src={`../assets/img/produtos/brinquedos/${produto.imagemdes}`} alt="pink" />
                <img className="yellow" src={`../assets/img/produtos/brinquedos/${produto.imagemben}`} alt="yellow" />
              </div>
              <div className="shoe-details">
                <span className="shoe_name">{produto.nome}</span>
                <p>{produto.descricao}</p>
                <div className="stars">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bx-star'></i>
                </div>
              </div>
              <div className="color-price">
                <div className="color-option">
                  <span className="color">Disponível</span>
                  <div className="circles">
                    <span className="circle blue active" id="blue"></span>
                    <span className="circle pink" id="pink"></span>
                    <span className="circle yellow" id="yellow"></span>
                  </div>
                </div>
                <div className="price">
                  <span className="price_num">{produto.preco}</span>
                  <span className="price_letter"></span>
                </div>
              </div>
              <div className="button">
                <div className="button-layer"></div>
                <button>Comprar</button>
              </div>
            </div>
          ))}
          </div>
        </div>
        <button className="nextItem" id="nextItem3"><img src="../assets/img/icones/icones_tec/arrows-right.svg" alt="Seta" /></button>
      </div>



      {/* Categoria - Adote seu pet */}
      <div className="category">
        <span className="category-products" id="cat-pet">
          <h2>Adote seu pet</h2>
        </span>
      </div>

      {/* Container Card 4 */}
      <div className="container-card4">
        <button className="prevItem" id="prevItem4"><img src="../assets/img/icones/icones_tec/arrows-left.svg" alt="Seta" /></button>
        <div className="slider-container">
          <div className="div-cards-slide4" id="card-slide4">
            {/* VAI GERAR CONTEUDO DINAMICO AQUI?? */}
          </div>
        </div>
        <button className="nextItem" id="nextItem4"><img src="../assets/img/icones/icones_tec/arrows-right.svg" alt="Seta" /></button>
      </div>
    </>
  );
};

export default Produtos;
