import { adicionarCarrinho } from "./carrinho.js";
import { catalogo, catalogoBrinquedos, catalogoVeterinario } from "./utilidades.js";

export function renderizacao() {
for(const Produtocatalogo of catalogo ){
    const cardProduto = ` 
    
    <div class="product-card">
    <div class="logo-cart">
      <img src="../assets/img/logo/petcandle-logo.png" alt="logo">
      <i class='bx bx-shopping-bag'></i>
    </div>
    <div class="main-images">
      <img id="blue" class="blue active" src="../assets/img/produtos/${Produtocatalogo.imagem}" alt="blue">
      <img id="pink" class="pink" src="../assets/img/produtos/${Produtocatalogo.imagemdes}" alt="blue">
      <img id="yellow" class="yellow" src="../assets/img/produtos/${Produtocatalogo.imagemben}" alt="blue">
    </div>
    <div class="shoe-details">
      <span class="shoe_name">${Produtocatalogo.nome}</span>
      <p>${Produtocatalogo.descricao}</p>
      <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bx-star'></i>
      </div>
    </div>
    <div class="color-price">
      <div class="color-option">
        <span class="color">Disponível</span>
        <div class="circles">
          <span class="circle blue active"  id="blue"></span>
          <span class="circle pink " id="pink"></span>
          <span class="circle yellow " id="yellow"></span>
        </div>
      </div>
      <div class="price">
        <span class="price_num">${Produtocatalogo.preco}</span>
        <span class="price_letter">Nine dollar only</span>
      </div>
    </div>
    <div class="button">
      <div class="button-layer"></div>
      <button>Add To Cart</button>
    </div>
  </div>
`;
  
 
  document.getElementById('card-slide').innerHTML += cardProduto;
  //console.log(Produtocatalogo.imagem)

  }


  for(const Produtocatalogo of catalogoBrinquedos){
    const cardProduto = `
    
    <div class="product-card">
    <div class="logo-cart">
      <img src="../assets/img/logo/petcandle-logo.png" alt="logo">
      <i class='bx bx-shopping-bag'></i>
    </div>
    <div class="main-images">
      <img id="blue" class="blue active" src="../assets/img/produtos/brinquedos/${Produtocatalogo.imagem}" alt="blue">
    </div>
    <div class="shoe-details">
      <span class="shoe_name">${Produtocatalogo.nome}</span>
      <p>${Produtocatalogo.descricao}</p>
      <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bx-star'></i>
      </div>
    </div>
    <div class="color-price">
      <div class="color-option">
        <span class="color">Disponível</span>
        <div class="circles">
          <span class="circle blue active"  id="blue"></span>
          <span class="circle pink " id="pink"></span>
          <span class="circle yellow " id="yellow"></span>
        </div>
      </div>
      <div class="price">
        <span class="price_num">${Produtocatalogo.preco}</span>
        <span class="price_letter">Nine dollar only</span>
      </div>
    </div>
    <div class="button">
      <div class="button-layer"></div>
      <button>Add To Cart</button>
    </div>
  </div>
  `;

  document.getElementById('card-slide3').innerHTML += cardProduto;
  }

  for(const Produtocatalogo of catalogoBrinquedos){
    const cardProduto = `
    
    <div class="product-card">
    <div class="logo-cart">
      <img src="../assets/img/logo/petcandle-logo.png" alt="logo">
      <i class='bx bx-shopping-bag'></i>
    </div>
    <div class="main-images">
      <img id="blue" class="blue active" src="../assets/img/produtos/veterinario/${Produtocatalogo.imagem}" alt="blue">
    </div>
    <div class="shoe-details">
      <span class="shoe_name">${Produtocatalogo.nome}</span>
      <p>${Produtocatalogo.descricao}</p>
      <div class="stars">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bx-star'></i>
      </div>
    </div>
    <div class="color-price">
      <div class="color-option">
        <span class="color">Disponível</span>
        <div class="circles">
          <span class="circle blue active"  id="blue"></span>
          <span class="circle pink " id="pink"></span>
          <span class="circle yellow " id="yellow"></span>
        </div>
      </div>
      <div class="price">
        <span class="price_num">${Produtocatalogo.preco}</span>
        <span class="price_letter">Nine dollar only</span>
      </div>
    </div>
    <div class="button">
      <div class="button-layer"></div>
      <button>Add To Cart</button>
    </div>
  </div>
  `;

  document.getElementById('card-slide2').innerHTML += cardProduto;
  }

  //Função para adicionar ao carrinho - terminar isso urgente
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarCarrinho(produtoCatalogo.id));
  }



  
  const prevBtn = document.getElementById('prevItem');
  const nextBtn = document.getElementById('nextItem');
  const slide = document.getElementById('card-slide');
  let currentPosition = 0;
  const cardWidth = 380; // Largura do card

  prevBtn.addEventListener('click', () => {
    moveSlide(-1); // Move para a direita
  });

  nextBtn.addEventListener('click', () => {
    moveSlide(1); // Move para a esquerda
  });

  function moveSlide(direction) {
    currentPosition += direction * cardWidth;

    // Lógica para lidar com o carrossel infinito
    const totalWidth = cardWidth * catalogo.length;
    if (currentPosition < -totalWidth) {
      currentPosition = 0;
    } else if (currentPosition > 0) {
      currentPosition = -totalWidth;
    }

    slide.style.transform = `translateX(${currentPosition}px)`;
  }
}