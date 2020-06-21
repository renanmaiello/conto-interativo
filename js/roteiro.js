var paragrafoUm = 'É uma noite chuvosa, os sons dos raios e da chuva prevalecem durante a noite,' +
    ' são quatro e quinze (4:15) da madrugada a manção Halley está totalmente' +
    ' calma todos os seus moradores estão dormindo. Por um breve instante o senhor' +
    ' Sir. Isaac Halley, proprietário da mançâo, disperta achando que ouviu um som' +
    ' de vidro quebrando ao cair no chão, mas no mesmo instante o som de um trovão' +
    ' domina seus ouvidos, levemente assustado ele da uma olhada para o teto como' +
    ' se estivesse imaginando o tempo lá fora, em seguida ele pega o celular ao lado' +
    ' da sua cama e olha a hora e imediatamente volta a se ajeitar para dormir.\n\n' +
    ' Seis e meia (6:30) da manhã, apartamento do detetive Murphy.\n' +
    ' - SR. MURPHY! ... SR. MURPHY! ... EU SEI QUE O SENHOR ESTÁ AI!\n' +
    ' - VAMOS LOGO, NÃO TENTE ME ENGANAR! ... SR. MURPHY!...\n' +
    ' O detetive Murphy acorda aos sons de barulhentas batidas em sua porta e aos gritos da sua vizinha e' +
    ' sindica do condominio a senhora Elizabeth, uma simpatica senhora de setenta e dois (72) anos' +
    ' completamente lucida e muito bem fisicamente pois ela desde de sempre possuia o habito de se exercitar' +
    ' todos os dias. Murphy ao acordar está com uma enorme dor de cabeça devido a ressaca da última noite que' +
    ' apesar da grande tempestade não o impediu ficar bebendo a noite inteiro.';


var roteiro = {
    cenas: [
        {
            cena: {
                id: 1,
                texto: 'É uma noite chuvosa, os sons dos raios e da chuva prevalecem durante a noite,' +
                    ' são quatro e quinze (4:15) da madrugada a manção Halley está totalmente' +
                    ' calma todos os seus moradores estão dormindo. Por um breve instante o senhor' +
                    ' Sir. Isaac Halley, proprietário da mançâo, disperta achando que ouviu um som' +
                    ' de vidro quebrando ao cair no chão, mas no mesmo instante o som de um trovão' +
                    ' domina seus ouvidos, levemente assustado ele da uma olhada para o teto como' +
                    ' se estivesse imaginando o tempo lá fora, em seguida ele pega o celular ao lado' +
                    ' da sua cama e olha a hora e imediatamente volta a se ajeitar para dormir.\n\n' +
                    ' Seis e meia (6:30) da manhã, apartamento do detetive Murphy.\n' +
                    ' - SR. MURPHY! ... SR. MURPHY! ... EU SEI QUE O SENHOR ESTÁ AI!\n' +
                    ' - VAMOS LOGO, NÃO TENTE ME ENGANAR! ... SR. MURPHY!...\n' +
                    ' O detetive Murphy acorda aos sons de barulhentas batidas em sua porta e aos gritos da sua vizinha e' +
                    ' sindica do condominio a senhora Elizabeth, uma simpatica senhora de setenta e dois (72) anos' +
                    ' completamente lucida e muito bem fisicamente pois ela desde de sempre possuia o habito de se exercitar' +
                    ' todos os dias. Murphy ao acordar está com uma enorme dor de cabeça devido a ressaca da última noite que' +
                    ' apesar da grande tempestade não o impediu ficar bebendo a noite inteiro.',
                acoes: [
                    {
                        id: 1,
                        texto: 'Ir falar com a Senhora Elizabeth',
                        idProximaCena: 2
                    },
                    {
                        id: 2,
                        texto: 'Ignorar e tentar dormir novamente',
                        idProximaCena: 2
                    },
                    {
                        id: 3,
                        texto: 'Gritar com a senhora Elizabeth',
                        idProximaCena: 2
                    }
                ]
            }
        },
        {
            cena: {
                id: 2,
                texto: 'Fim',
                acoes: [
                    {
                        id: 1,
                        texto: 'Ir falar com a Senhora Elizabeth',
                        idProximaCena: 2
                    },
                    {
                        id: 2,
                        texto: 'Ignorar e tentar dormir novamente',
                        idProximaCena: 2
                    }
                ]
            }
        }
    ]
    
}