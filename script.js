let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let setaDireita = document.getElementById('seta-direita');
let setaEsquerda = document.getElementById('seta-esquerda');

function rolarParaDireita ( ) {
  card1.style = 'display: none';
  card3.style = 'display: flex';
  setaDireita.style = 'display: none';
  setaEsquerda.style = 'display: flex';
}

function rolarParaEsquerda ( ) {
  card1.style = 'display: flex';
  card3.style = 'display: none';
  setaDireita.style = 'display: flex';
  setaEsquerda.style = 'display: none';
}
