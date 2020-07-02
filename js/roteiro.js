var roteiro = {
    cenas: [
        {
            cena: {
                id: 1,
                texto: '[Desconhecido]: HEY! HEY CARA! ACORDA!\n' +
                        '[Handsome]: ARGAHHH minha cabeça...\n' +
                        'Handsome acorda meio atordoado com a cabeça doendo sem se lembrar de nada. Ele olha ao seu redor e logo percebe que está em uma cela com um tremendo clarão de luz vindo de uma das paredes, ele então se levante ainda meio atordoado e canbaleando ele continua a ouvir uma voz, a do outro prisioneiro na outra cela. \n' +
                        '[Desconhecido]: VAMOS CARA NÃO PERCA TEMPO TIRA A GENTE DAQUI!!! Você quer terminar igual ao cara ai ao seu lado? \n' +
                        'Handsome olha para o lado e ve um corpo de uma homem sem a cabeça, ele então se assusta e sai andando de costa até trombar na parede onde está o buraco que vinha o clarão.',
                //acaoImediata: null,
                acaoImediata: {
                    tipoAcao: 'COMBATE',
                    inimigos: [
                        {
                            id: 1,
                            vida: 50,
                            dano: 15
                        },
                        {
                            id: 1,
                            vida: 50,
                            dano: 15
                        }
                    ],
                    tipoDoDado: 1, //1 Equivale a 1d6
                    condicaoSucesso: null,
                    idProximaCena: 2
                },
                acoes: [
                    {
                        id: 1,
                        texto: 'Descobrir quem está falando com Handsome.',
                        idProximaCena: 2
                    },
                    {
                        id: 2,
                        texto: 'Olhar pelo buraco na parede.',
                        idProximaCena: 3
                    }
                ]
            }
        },
        {
            cena: {
                id: 2,
                texto: '[Handsome]: Quem é você? que lugar é esse? \n' +
                        '[Desconhecido]: Me chamo Roger e essa é uma prisão! AGORA VAMOS LOGO NOS TIRE DAQUI, a bala de canhão abriu sua cela no final do corredo tem uma alavanca que abre as outras celas. VAMOS, VAMOS!!..\n' +
                        'Handsome então olha para a grade da cela e ve que ela foi parcialmente arracanda e pergunta. \n' +
                        '[Handsome]: Oque está acontecendo? \n' +
                        '[Roger]: POHA OQUE É VOCÊ UM DESSES ESCRITOR DE JORNAIS, VAMOS LOGO TIRA A GENTE DAQUI!! \n',
                acaoImediata: null,
                acoes: [
                    {
                        id: 1,
                        texto: 'Sair da cela e ir embora sem libertar Roger.',    
                        idProximaCena: 4
                    },
                    {
                        id: 2,
                        texto: 'Sair da cela e ir abrir as outras celas.',
                        idProximaCena: 5
                    }
                ]
            }
        },
        {
            cena: {
                id: 3,
                texto: 'Handsome olha pelo buraco da parede e percebe que está em uma torre da qual possui visão para uma cidade a beira mar, ele consegue ver que existem 3 navios com bandeiras de caveira na baia proximo ao porto e esses navios estão atirando contra a cidade. \n' +
                        '[Desconhecido]: Está gostando da vistá? \n' +
                        '[Handsome]: A cidade está sendo atacada! \n' +
                        '[Desconhecido]: Aaaa não brinca, foi difícil de descobrir isso?!! AGORA VAI! SUA CELA ESTÁ ABERTA!! no final do corredor tem uma alavanca para abrir as outras celas incluindo a minha, VAMOS LOGO!! \n',
                acaoImediata: null,
                acoes: [
                    {
                        id: 1,
                        texto: 'Sair da cela e ir embora sem libertar o desconhecido.',    
                        idProximaCena: 4
                    },
                    {
                        id: 2,
                        texto: 'Sair da cela e ir abrir as outras celas.',
                        idProximaCena: 6
                    }
                ]
            }
        },
        {
            cena: {
                id: 4,
                texto: 'Handsome sai de sua cela e corre na direção da saida ao final do corredor, mas decide não libertar os prisioneiros. \n' +
                        'Ao sair pela porta no final do corredor ele se depara com um salão o qual possui uma grande estrutura de escadas no centro e portas nas paredes laterais, com 5 metros de distância para as escadas, muito provavelmente essas portas eram outras celas. \n' + 
                        'Handsome corre em direção as escadas.',
                acaoImediata: null,
                acoes: [
                    {
                        id: 1,
                        texto: 'Subir as escadas.',    
                        idProximaCena: 7
                    },
                    {
                        id: 2,
                        texto: 'Descer as escadas.',
                        idProximaCena: 0
                    }
                ]
            }
        },
        {
            cena: {
                id: 5,
                texto: 'Handsome sai de sua cela e corre na direção da saida ao final do corredor e abre as celas no entanto apenas Roger e o outro infeliz da cela do Handsome estavam presos ali. \n' +
                        'Ao sair pela porta no final do corredor ele e Roger se deparam com um salão o qual possui uma grande estrutura de escadas no centro e portas nas paredes laterais, com 5 metros de distância para as escadas, muito provavelmente essas portas eram outras celas. \n' + 
                        'Handsome e Roger correm em direção as escadas, Handsome começa a descer, mas para imediatamente assim que Roger avisa ele. \n' +
                        '[Roger]: PARA! PARA! Por ai não, temos que subir é a melhor saida! \n' +
                        '[Handsome]: Como você sabe? \n' +
                        '[Roger]: Antes de ser preso, eu trabalhava na limpeza desse lugar. A cidade está sobre ataque os guardas todos devem estar nos anderes abaixo. \n' +
                        '[Handsome]: Mas como vamos sair lá por cima? \n' +
                        '[Roger]: Essa torre está encostada em uma montanha, 4 andares acima da gente existe uma sala que guarda materiais de limpeza, lá tem uma janela muito fácil de quebrar. Tudo que precisamos fazer é quebrar a janela e cameçarmos a escalar a montanha. \n',
                acaoImediata: null,
                acoes: [
                    {
                        id: 1,
                        texto: 'Seguir Roger.',    
                        idProximaCena: 0
                    },
                    {
                        id: 2,
                        texto: 'Descer as escadas.',
                        idProximaCena: 0
                    }
                ]
            }
        },
        {
            cena: {
                id: 6,
                texto: 'Handsome sai de sua cela e corre na direção da saida ao final do corredor e abre as celas no entanto apenas o desconhecido e o outro infeliz da cela do Handsome estavam presos ali. \n' +
                        'O desconhecido corre em direção a saída e para para agradecer Handsome. \n' +
                        '[Desconhecido]: Boa cara obrigado! aproposito meu nome é Roger. Agora vamos! precisamos sair daqui. \n' +
                        '[Handsome]: Eu me chamado Handsome. \n' +
                        '[Roger]: Legal agora vamos! \n' +
                        'Ao sair pela porta no final do corredor ele e Roger se deparam com um salão o qual possui uma grande estrutura de escadas no centro e portas nas paredes laterais, com 5 metros de distância para as escadas, muito provavelmente essas portas eram outras celas. \n' + 
                        'Handsome e Roger correm em direção as escadas, Handsome começa a descer, mas para imediatamente assim que Roger avisa ele. \n' +
                        '[Roger]: PARA! PARA! Por ai não, temos que subir é a melhor saida! \n' +
                        '[Handsome]: Como você sabe? \n' +
                        '[Roger]: Antes de ser preso, eu trabalhava na limpeza desse lugar. A cidade está sobre ataque os guardas todos devem estar nos anderes abaixo. \n' +
                        '[Handsome]: Mas como vamos sair lá por cima? \n' +
                        '[Roger]: Essa torre está encostada em uma montanha, 4 andares acima da gente existe uma sala que guarda materiais de limpeza, lá tem uma janela muito fácil de quebrar. Tudo que precisamos fazer é quebrar a janela e cameçarmos a escalar a montanha. \n',
                acaoImediata: null,
                acoes: [
                    {
                        id: 1,
                        texto: 'Seguir Roger.',    
                        idProximaCena: 0
                    },
                    {
                        id: 2,
                        texto: 'Descer as escadas.',
                        idProximaCena: 0
                    }
                ]
            }
        },
        {
            cena: {
                id: 7,
                texto: 'Handsome começa a subir as escadas de forma rápida e ligeira, ao terminar de subir os 3 andares ele se depara com um guarda. \n',
                acaoImediata: {
                    tipoAcao: 'COMBATE',
                    tipoDoDado: 1, //1 Equivale a 1d6
                    condicaoSucesso: '>3',
                    idProximaCena: 0
                },
                acoes: null
            }
        }
    ]
    
}