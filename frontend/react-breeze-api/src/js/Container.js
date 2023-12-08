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
  