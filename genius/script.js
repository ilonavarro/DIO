let order = [];
let clickedOrder = [];
let score = 0;

/* 0 = verde | 1 = vermelho | 2 = amarelo | 3 = azul */

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//pisca a próxima cor do genius
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//verifica se os botões estão na mesma ordem gerada
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
    //inserir aqui um jeito de ficar mais rápido
    nextLevel();
  }
};

//função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

//função que retorna a cor
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
      break;
    case 1:
      return red;
      break;
    case 2:
      return yellow;
      break;
    case 3:
      return blue;
      break;
  }
};

//função para próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
};

//função para game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu\nClique em Ok para iniciar um novo`);
  order = [];
  clickedOrder = [];
  playGame();
};

//função de início do jogo
let playGame = () => {
  alert("Bem vindo ao Gênesis!\nIniciando um novo jogo...");
  score = 0;
  nextLevel();
};

//eventos de clique para as cores
/* 0 = verde | 1 = vermelho | 2 = amarelo | 3 = azul */
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia o jogo
playGame();
