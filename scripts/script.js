//Para ligar um item HTML ao JS (Salvando em uma função)//
var bloco1 = window.document.getElementById('bloco1');
var descricaoInicial1 = bloco1.innerHTML;

var bloco2 = window.document.getElementById('bloco2');
var descricaoInicial2 = bloco2.innerHTML;

var bloco3 = window.document.getElementById('bloco3');
var descricaoInicial3 = bloco3.innerHTML;

//Para Criar uma Função em Uma Variável
function clicar1() {
  bloco1.innerText = 'Se você já ouviu histórias na família que algum antepassado veio da Itália, você pode ter direito a cidadania italiana, para isso uma pesquisa genealógica pode ser feita pela nossa equipe';
  if (window.matchMedia("(max-width: 600px)").matches) {
    bloco1.style.fontSize = '8px'

  } else {
    bloco1.style.fontSize = '20px'
  }
}

function desclicar1() {
  bloco1.innerHTML = descricaoInicial1;
  bloco1.style.fontSize = '';
}

function clicar2() {
  bloco2.innerHTML = 'É necessário que a linha de transmissão do italiano até você não tenha sido rompida, nós conseguimos analisar seu caso e verificar a elegibilidade';
  if (window.matchMedia("(max-width: 600px)").matches) {
    bloco2.style.fontSize = '8px';
  } else {
    bloco2.style.fontSize = '20px';
  }
}

function desclicar2() {
  bloco2.innerHTML = descricaoInicial2;
  bloco2.style.fontSize = '';
}

function clicar3() {
  bloco3.innerHTML = 'É necessário juntar uma certa documentação, como certidões em inteiro teor do italiano até você. Existem alguns erros nas certidões, como nomes ou datas que podemos auxilixar.';
  if (window.matchMedia("(max-width:600px)").matches) {
    bloco3.style.fontSize = '8px'
  } else {
    bloco3.style.fontSize = '20px';
  }
}

function desclicar3() {
  bloco3.innerHTML = descricaoInicial3;
  bloco3.style.fontSize = '';
}

//Para Dar Ação a Uma Função//
bloco1.addEventListener('mouseover', clicar1);
bloco1.addEventListener('mouseout', desclicar1);

bloco2.addEventListener('mouseover', clicar2);
bloco2.addEventListener('mouseout', desclicar2);

bloco3.addEventListener('mouseover', clicar3);
bloco3.addEventListener('mouseout', desclicar3);



function orcar() {
  var orcamento = window.document.getElementById('campo').value;
  var year = new Date().getFullYear();
  var resposta = document.getElementById('resposta');

  if (orcamento <= 1300 || orcamento > year) {
    resposta.innerHTML = '[ERRO] Digite um ano válido!'
  } else if (orcamento >= 1948 && orcamento <= year) {
    resposta.innerHTML = 'Sua cidadania pode ser feita via administrativa (Consulado), presencialmente na Itália) ou judicialmente (ação contra-filas).';
  } else if (orcamento >= 1860 && orcamento < 1948) {
    resposta.innerHTML = 'Sua cidadania pode ser feita somente judicialmente (via materna)';
  } else {
    resposta.innerHTML = 'Você não tem direito a cidadania pois seu antepassado nasceu antes da unificação da Itália';
  }
}
