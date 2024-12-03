/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
let perguntasFeitas = [];

//PERGUNTAS DO JOGO
const perguntas = [
    //PERGUNTA 0
    {
        pergunta:
            "Qual dessas linguagens não é considerada uma linguagem de programação?",
        respostas: ["PHP", "Javascript", "C++", "HTML"],
        correta: "resp3"
    },
    //PERGUNTA 1
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        respostas: ["1498", "1500", "1375", "1828"],
        correta: "resp1"
    },
    //PERGUNTA 2
    {
        pergunta: "O que significa a sigla HTML?",
        respostas: [
            "Hyper Tonto Maluco Legal",
            "Hyper Text Markup Language",
            "Hey Trade More Language",
            "Hyper Text Mark Lang"
        ],
        correta: "resp1"
    },
    //PERGUNTA 3
    {
        pergunta:
            "Quais dessas linguagens é considerada uma linguagem de marcação?",
        respostas: ["HTML", "Javascript", "C++", "PHP"],
        correta: "resp0"
    },
    //PERGUNTA 4
    {
        pergunta: "Quantas vezes o Brasil não foi para copa?",
        respostas: ["Sempre foi", "2", "3", "1"],
        correta: "resp0"
    }
];

var qtdPerguntas = perguntas.length - 1;

gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas) {
    //GERAR UM NUMERO ALEATORIO
    let aleatorio = (Math.random() * maxPerguntas).toFixed();
    //CONVERTER PARA NUMERO
    aleatorio = Number(aleatorio);
    //MOSTRAR NO CONSOLE QUAL FOI A PERGUNTA SORTEADA
    console.log("A pergunta sorteado foi a: " + aleatorio);

    //VERIFICAR SE A PERGUNTA SORTEADA JÁ FOI FEITA
    if (!perguntasFeitas.includes(aleatorio)) {
        //COLOCAR COMO PERGUNTA FEITA
        perguntasFeitas.push(aleatorio);

        //PREENCHER O HTML COM OS DADOS DA QUESTAO SORTEADA
        var p_selecionada = perguntas[aleatorio].pergunta;
        console.log(p_selecionada);

        //ALIMENTAR A PERGUNTA VINDA DO SORTEIO
        $("#pergunta").html(p_selecionada)
        $("#pergunta").attr('data-indice', aleatorio)

        //COLOCAR AS RESPOSTAS
        for (let i = 0; i < 4; i++) {
            $(`#resp${i}`).html(perguntas[aleatorio].respostas[i])
        }

        //EMBARALHAR AS RESPOSTAS
        var pai = $("#respostas")
        var botoes = pai.children()

        for (i = 1; i < botoes.length; i++) {
            pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)))
        }
    } else {
        console.log('A pergunta ja foi feita. Sorteando novamente...')
        if (perguntasFeitas.length < qtdPerguntas + 1) {
            return gerarPergunta(maxPerguntas)
        } else {
            console.log("Acabaram as perguntas!")

            $('#quiz').addClass('oculto')
            $('#mensagem').html("Parabéns, você acertou TODAS as perguntas!")
            $('#status').removeClass('oculto')

        }
    }
}

$('.resposta').click(function () {
    if ($("#quiz").attr('data-status') !== 'travado') {
        //SE JA TIVER A CLASSE E CLICAR, DESMARCA!
        resetaBotoes()

        //ADICIONAR A CLASSE PARA DIFERENCIAR A QUESTÃO MARCADA
        $(this).addClass('selecionada')
    }

})

$('#confirmar').click(function () {
    var indice = $("#pergunta").attr('data-indice')

    //QUAL A RESPOSTA CERTA
    var respCerta = perguntas[indice].correta

    //QUAL A RESPOSTA DO USUÁRIO
    $('.resposta').each(function () {
        if ($(this).hasClass('selecionada')) {
            var respostaEscolhida = $(this).attr('id')

            if (respCerta == respostaEscolhida) {
                // alert('Acertou')
                proximaPergunta()
            } else {
                // alert('ERRRRROOOOUU BURRO')
                $('#quiz').attr('data-status', 'travado')
                $("#confirmar").addClass('oculto')
                $(`#${respCerta}`).addClass('correta')
                $(`#${respostaEscolhida}`).removeClass('selecionada')
                $(`#${respostaEscolhida}`).addClass('errada')
                //GAME OVER
                setTimeout(function () {
                    gameOver()
                }, 2000)
            }
        }
    })
})

function newGame() {
    $("#confirmar").removeClass('oculto')
    $('#quiz').attr('data-status', 'ok')
    perguntasFeitas = []
    resetaBotoes()
    gerarPergunta(qtdPerguntas)
    $('#quiz').removeClass('oculto')
    $('#status').addClass('oculto')
}

function proximaPergunta() {
    resetaBotoes()
    gerarPergunta(qtdPerguntas)
}

function resetaBotoes() {
    $('.resposta').each(function () {
        if ($(this).hasClass('selecionada')) {
            $(this).removeClass('selecionada')
        }

        if ($(this).hasClass('correta')) {
            $(this).removeClass('correta')
        }

        if ($(this).hasClass('errada')) {
            $(this).removeClass('errada')
        }
    })
}

function gameOver() {
    $('#quiz').addClass('oculto')
    $('#mensagem').html("Game Over!")
    $('#status').removeClass('oculto')
}

$('#novoJogo').click(function () {
    newGame();
})