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
    if(target.classList.contains("circle"))
    
      circle.querySelector(".active").classList.remove("active");
      target.classList.add("active");
      document.querySelector(".main-images .active").classList.remove("active");
      document.querySelector(`.main-images .${target.id}`).classList.add("active");
    }
    });



