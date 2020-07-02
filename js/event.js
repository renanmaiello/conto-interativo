var jogador = {
  apelido: ''
}

const TEMPO_INTERVALO_EXIBICAO_TEXTO = 0.0035;
var valorIteracaoExibicaoTexto = 0;
var intervaloExibicaoTexto;
var textoParaExibir;
var textoExibido = false;
var elementoHTML_Texto;
var elementoHTML_ListaDeAcoes;
var elementoHTML_ListaDeInimigos;
var roteiroSelecionado;
var idCenaSelecionada = 1;
var listaDeAcoes = [];
var telaRolagemDados;
var acaoImediata;
var cenaParaExibir;
var inimigos;
var listaDeInimigos = [];

function carregar() {
  roteiroSelecionado = roteiro;
  elementoHTML_Texto = document.getElementById('texto');
  elementoHTML_ListaDeAcoes = document.getElementById('lista-de-acoes');
  elementoHTML_ListaDeInimigos = document.getElementById('lista-de-inimigos');
  telaRolagemDados = document.getElementById('tela-rolagem-dados');
  exibeHistoria();
}

async function exibeHistoria() {

  limparCenaAnterior();
  selecionaCenaParaExibir();
  selecionaTextoParaExibir();
  await exibeTextoCena();
  selecionaTipoAcao();
  
}

function limparCenaAnterior() {
  valorIteracaoExibicaoTexto = 0;
  textoParaExibir = '';
  elementoHTML_ListaDeAcoes.innerHTML = '';
  elementoHTML_Texto.innerHTML = '';
  listaDeAcoes.length = 0;
}

function selecionaCenaParaExibir() {
  for (let i = 0; i < roteiroSelecionado.cenas.length; i++) {
    if (roteiroSelecionado.cenas[i].cena.id === idCenaSelecionada) {
      cenaParaExibir = roteiroSelecionado.cenas[i].cena;  
    }
  }
}

function selecionaTextoParaExibir() {
  textoParaExibir = cenaParaExibir.texto;
}

async function exibeTextoCena() {
  let tamanhoTexto = textoParaExibir.split('').length;
  let texto = textoParaExibir.split('');
  for (let i = 0; i < tamanhoTexto; i++) {
    let caracter = texto[i];
    await exibeCaracter(caracter);
  }

  return 0;
}

async function exibeCaracter(char) {  
  return new Promise(resolve => {
		setTimeout(() => {
			resolve(elementoHTML_Texto.innerHTML += char);
		}, TEMPO_INTERVALO_EXIBICAO_TEXTO);
	});
}

function selecionaTipoAcao() {
  acaoImediata = cenaParaExibir.acaoImediata;
  if (acaoImediata === null) {
    carregaAcoesCena();
    exibeAcoes();
  } else {
    if (acaoImediata.tipoAcao === 'COMBATE') {
      iniciaCombate();
    }
  }
}

function carregaAcoesCena() {
  for (let i = 0; i < cenaParaExibir.acoes.length; i++) {
    var embalagemAcao = document.createElement("div");
    var acao = document.createElement("button");
    embalagemAcao.classList.add('embalagem-acao');
    acao.classList.add('acao');
    acao.innerHTML = cenaParaExibir.acoes[i].texto;
    acao.onclick = function() {
      proximaCena(cenaParaExibir.acoes[i].idProximaCena);
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

function proximaCena(proximaCena) {
  idCenaSelecionada = proximaCena;
  exibeHistoria();
}

function iniciaCombate() {
    carregaInimigos();
    exibeInimigos();
}

function carregaInimigos() {
  inimigos = acaoImediata.inimigos;
  for (let i = 0; i < inimigos.length; i++) {
    var divInimigo = document.createElement("div");
    divInimigo.classList.add('inimigo');

    var vida = document.createElement("label");
    vida.innerHTML = inimigos[i].vida;
    divInimigo.appendChild(vida);

    var dano = document.createElement("label");
    dano.innerHTML = inimigos[i].dano;
    divInimigo.appendChild(dano);

    var acao = document.createElement("button");
    acao.innerHTML = 'Atacar';
    acao.onclick = function() {
      exibeTelaRolagemDado();
    }
    divInimigo.appendChild(acao);
    listaDeInimigos.push(divInimigo);
  }
}

function exibeInimigos() {
  for (let i = 0; i < listaDeInimigos.length; i++) {
    elementoHTML_ListaDeInimigos.appendChild(listaDeInimigos[i]);
  }  
}

function exibeTelaRolagemDado() {
  telaRolagemDados.style.display = 'flex';
}

function escondeTelaRolagemDado() {
  telaRolagemDados.style.display = 'none';
}












///////////TODO REMOVER

/*function exibeAcoes() {
  for (let i = 0; i < listaDeAcoes.length; i++) {
    elementoHTML_ListaDeAcoes.appendChild(listaDeAcoes[i]);
  }
}*/

/*function exibeTextoCena() {
  intervaloExibicaoTexto = setInterval(exibeTextoPorCaracter, TEMPO_INTERVALO_EXIBICAO_TEXTO);
}*/

/*
function acaoImediata() {
  if (cenaParaExibir.acaoImediata) {
    return true;
  } else {
    return false;
  }
}*/

/*function exibeTextoPorCaracter() {
  elementoHTML_Texto.innerHTML += textoParaExibir.split('')[valorIteracaoExibicaoTexto];
  valorIteracaoExibicaoTexto++;
  if (valorIteracaoExibicaoTexto === textoParaExibir.length) {
    paraExibicao();
  }
}*/

/*function paraExibicao() {
  clearInterval(intervaloExibicaoTexto);
  textoExibido = true;
  // exibeAcoes();
}*/