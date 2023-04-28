//Para ligar um item HTML ao JS (Salvando em uma função)//
var Bloco1 = window.document.getElementById('Bloco1');
var descricaoInicial1 = Bloco1.innerHTML;

var Bloco2 = window.document.getElementById ('Bloco2');
var descricaoInicial2 = Bloco2.innerHTML;

var Bloco3 = window.document.getElementById ('Bloco3');
var descricaoInicial3 = Bloco3.innerHTML;

//Para Criar uma Função em Uma Variável//
function clicar1() {
  Bloco1.innerText = 'Se você já ouviu histórias na família que algum antepassado veio da Itália, você pode ter direito a cidadania italiana, para isso uma pesquisa genealógica pode ser feita pela nossa equipe';
}
function desclicar1 () {
  Bloco1.innerHTML = descricaoInicial1
}

function clicar2() {
  Bloco2.innerHTML = 'É necessário que a linha de transmissão do italiano até você não tenha sido rompida, nós conseguimos analisar seu caso e verificar a elegibilidade'
} 
function desclicar2 () {
  Bloco2.innerHTML = descricaoInicial2
}

function clicar3 () {
  Bloco3.innerHTML = 'É necessário juntar uma certa documentação, como certidões em inteiro teor, do italiano até você. Existem alguns erros nas certidões, como nomes ou datas que podemos auxilixar.'}
function desclicar3 () {
  Bloco3.innerHTML = descricaoInicial3
}

//Para Dar Ação a Uma Função//
Bloco1.addEventListener ('mouseover', clicar1);
Bloco1.addEventListener ('mouseout', desclicar1);

Bloco2.addEventListener ('mouseover', clicar2);
Bloco2.addEventListener ('mouseout', desclicar2);

Bloco3.addEventListener ('mouseover', clicar3);
Bloco3.addEventListener ('mouseout', desclicar3);


function Orçar() {
  var Orçamento = window.document.getElementById('Campo').value;
  var year = new Date().getFullYear();
  var Resposta = document.getElementById('Resposta');

  if (Orçamento <= 1300 || Orçamento > year) {
    Resposta.innerHTML = '[ERRO] Digite um ano válido!'
  } else if (Orçamento >= 1948 && Orçamento <= year) {
    Resposta.innerHTML = 'Sua cidadania pode ser feita via administrativa (Consulado ou na Itália).';
  } else if (Orçamento >= 1860 && Orçamento < 1948) {
    Resposta.innerHTML = 'Sua cidadania pode ser feita judicialmente (via materna)';
  } else {
    Resposta.innerHTML = 'Você não tem direito a cidadania pois seu antepassado nasceu antes da unificação da Itália';
  }
}

