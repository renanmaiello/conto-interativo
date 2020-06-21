var jogador = {
  apelido: ''
}

var valorIteracaoExibicaoTexto = 0;
var intervaloExibicaoTexto;
var textoParaExibir;
var elementoHTML_Texto;
var elementoHTML_ListaDeAcoes;
var roteiroSelecionado;
var idCenaSelecionada = 1;
var listaDeAcoes = [];

function carregar() {
  roteiroSelecionado = roteiro;
  elementoHTML_Texto = document.getElementById('texto');
  elementoHTML_ListaDeAcoes = document.getElementById('lista-de-acoes');
  exibeHistoria();
}

function exibeHistoria() {
  limparCenaAnterior();
  selecionaTextoParaExibir();
  intervaloExibicaoTexto = setInterval(exibeTextoPorCaracter, 4);
}

function exibeTextoPorCaracter() {
  elementoHTML_Texto.innerHTML += textoParaExibir.split('')[valorIteracaoExibicaoTexto];
  valorIteracaoExibicaoTexto++;
  if (valorIteracaoExibicaoTexto === textoParaExibir.length) {
      paraExibicao();
  }
}

function paraExibicao() {
  clearInterval(intervaloExibicaoTexto);
  exibeAcoes();
}

function proximaCena(proximaCena) {
  idCenaSelecionada = proximaCena;
  exibeHistoria();
}

function limparCenaAnterior() {
  valorIteracaoExibicaoTexto = 0;
  textoParaExibir = '';
  elementoHTML_ListaDeAcoes.innerHTML = '';
  elementoHTML_Texto.innerHTML = '';
  listaDeAcoes.length = 0;
}

function selecionaTextoParaExibir() {
  for (let i = 0; i < roteiroSelecionado.cenas.length; i++) {
      if (roteiroSelecionado.cenas[i].cena.id === idCenaSelecionada) {
          textoParaExibir = roteiroSelecionado.cenas[i].cena.texto;
          listaAcoes(roteiroSelecionado.cenas[i].cena.acoes);
      }
  }
}

function listaAcoes(acoes) {
  for (let i = 0; i < acoes.length; i++) {
      var embalagemAcao = document.createElement("div");
      var acao = document.createElement("button");

      embalagemAcao.classList.add('embalagem-acao');
      acao.classList.add('acao');
      acao.innerHTML = acoes[i].texto;
      acao.onclick = function() {
          proximaCena(acoes[i].idProximaCena);
      }

      embalagemAcao.appendChild(acao);
      listaDeAcoes.push(embalagemAcao);
  }
}

function exibeAcoes() {
  for (let i = 0; i < listaDeAcoes.length; i++) {
      elementoHTML_ListaDeAcoes.appendChild(listaDeAcoes[i]);
  }
}