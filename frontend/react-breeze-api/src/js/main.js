// --------====EVENTO NAVBAR====-------
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar-scroll');
  const yPos = window.scrollY;
  
  // Ajuste a posição Y desejada para ativar a navbar fixa
  const triggerPos = 250;
  
  if (yPos > triggerPos) {
    navbar.style.display = 'block';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
  } else {
    navbar.style.display = 'none';
    navbar.style.position = 'relative';
    navbar.style.top = 'initial';
  }
});

// --------====EVENTO BOTAO NOSSA MISSAO E NOSSA VISAO====-------
const BtnMissao = document.getElementById('btn-Missao');
const BtnVisao = document.getElementById('btn-Visao');
const textMissao = document.querySelector('.text-Missao');
const textVisao = document.querySelector('.text-Visao');
const DivNossoAlvo = document.querySelector('.Nossa-Missao-Visao');

BtnMissao.addEventListener("click", () => {
  
  DivNossoAlvo.style.backgroundColor = '#d6740a';
  
  BtnMissao.style.backgroundColor = 'rgb(22, 157, 22)';
  BtnMissao.style.padding = '10px 40px 10px 40px';
  BtnMissao.style.fontSize = '12px';
  
  BtnVisao.style.padding = '7px';
  BtnVisao.style.fontSize = '10px';
  
  textVisao.style.display = 'none';
  textMissao.style.display = 'block';
  
})

BtnVisao.addEventListener("click", () => {
  
  DivNossoAlvo.style.backgroundColor = 'rgb(18, 78, 41)'
  
  BtnVisao.style.backgroundColor = '#ff8e15';
  BtnVisao.style.padding = '10px 40px 10px 40px';
  BtnVisao.style.fontSize = '12px';
  
  BtnMissao.style.padding = '7px';
  BtnMissao.style.fontSize = '10px';

  textVisao.style.display = 'block';
  textMissao.style.display = 'none';
})
  
  //----------=========CARROSSEL 1===========--------
  var prevBtn = document.getElementById('prevItem');
  var nextBtn = document.getElementById('nextItem');
  var slide = document.getElementById('card-slide');
  let currentPosition = 0;
  const cardWidth = 380;
  function moveSlide(direction) {
    currentPosition += direction * cardWidth;
    slide.style.transform = `translateX(${-currentPosition}px)`;

    const totalCards = 5; //Aqui é pra ser definido o número total de cards -> mas observe que estou pegando em pixels o seu tamanho e colocando como constante.
    //Como isso vai ficar na responsividade?

    //verificação para saber se chegou ou nao no ultimo card

    if(currentPosition >= (totalCards - 1) * cardWidth){
      currentPosition = (totalCards - 1) * cardWidth;
      nextBtn.disabled = true;
    }else {
      nextBtn.disabled = false;
    }
  }

  if(currentPosition > 0 ) {
    prevBtn.disabled = false;
  }else {
    prevBtn.disabled = true;
  }
  
  prevBtn.addEventListener('click', () => {
    moveSlide(-1); 
  });
  nextBtn.addEventListener('click', () => {
  moveSlide(1); 
});

//----------=========CARROSSEL 2===========--------
var prevBtn2 = document.getElementById('prevItem2');
var nextBtn2 = document.getElementById('nextItem2');
var slide2 = document.getElementById('card-slide2');
function moveSlide2(direction) {
  
  var cardWidth = 200; // 200px card width
  currentPosition += direction * cardWidth;
  slide2.style.transform = `translateX(${-currentPosition}px)`;
}

prevBtn2.addEventListener('click', () => {
  moveSlide2(-1); 
  
});

nextBtn2.addEventListener('click', () => {
  moveSlide2(1); 
});

//----------=========CARROSSEL 3===========--------
var prevBtn3 = document.getElementById('prevItem3');
var nextBtn3 = document.getElementById('nextItem3');
var slide3 = document.getElementById('card-slide3');
function moveSlide3(direction) {
  
  var cardWidth = 240; // 200px card width
  currentPosition += direction * cardWidth;
  slide3.style.transform = `translateX(${-currentPosition}px)`;
}

prevBtn3.addEventListener('click', () => {
  moveSlide3(-1); 
  
});

nextBtn3.addEventListener('click', () => {
  moveSlide3(1); 
});

//----------=========CARROSSEL 4===========--------
var prevBtn4 = document.getElementById('prevItem4');
var nextBtn4 = document.getElementById('nextItem4');
var slide4 = document.getElementById('card-slide4');
function moveSlide4(direction) {
  
  var cardWidth = 240; // 200px card width
  currentPosition += direction * cardWidth;
  slide4.style.transform = `translateX(${-currentPosition}px)`;
}

prevBtn4.addEventListener('click', () => {
  moveSlide4(-1); 
  
});

nextBtn4.addEventListener('click', () => {
  moveSlide4(1); 
});


//----------=========Efeito de Acesso Rápido===========--------
document.getElementById('btn-food').addEventListener('click', function () {
  scrollToSection('cat-food');
});

document.getElementById('btn-doc').addEventListener('click', function () {
  scrollToSection('cat-doc');
});

document.getElementById('btn-toys').addEventListener('click', function () {
  scrollToSection('cat-toys');
});

document.getElementById('btn-pet').addEventListener('click', function () {
  scrollToSection('cat-pet');
});

// Define a função de transição.
function scrollToSection(sectionId) {
  // pega o id do alvo, exemplo: 'cat-pet' e atribui numa contante.
  const section = document.getElementById(sectionId);
  // Cria o efeito de transição suave.
  section.scrollIntoView({ behavior: 'smooth' });
}

//----------=========Efeito de Acesso Rápido para a seção de About Us===========--------
document.querySelectorAll('.About-Us-Link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    
    const targetId = this.getAttribute('href'); // Obtém o ID do alvo a ser rolado
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o elemento alvo
    }
  });
});

  //  console.log("Inicializando configurações de card teste")

    let circle = document.querySelector(".color-option");
    circle.addEventListener("click", (e)=>{
    let target = e.target;
    if(target.classList.contains("circle")){
      circle.querySelector(".active").classList.remove("active");
      target.classList.add("active");
      document.querySelector(".main-images .active").classList.remove("active");
      document.querySelector(`.main-images .${target.id}`).classList.add("active");
    }
    });



