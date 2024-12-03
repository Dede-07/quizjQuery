#QuizTime jQuery

QuizTime jQuery é um jogo de perguntas e respostas interativo desenvolvido com HTML, CSS, JavaScript e jQuery. O projeto foi criado como parte de um aprendizado em desenvolvimento web Fullstack.

⚡ Funcionalidades

Exibe perguntas aleatórias sobre temas variados.
Respostas são embaralhadas a cada rodada.
Destaca a resposta correta e incorreta após a confirmação.
Finaliza o jogo quando todas as perguntas são respondidas.
Exibe mensagens de sucesso ao acertar todas ou de Game Over em caso de erro.
Botão para reiniciar o jogo e tentar novamente.

🛠️ Tecnologias Utilizadas

HTML5: Estrutura semântica do jogo.

CSS3: Estilização, com foco em responsividade e design moderno.

JavaScript: Lógica do jogo, como controle de perguntas, validações e interações.

jQuery: Manipulação do DOM para dinamizar as ações e eventos.

🎮 Como Jogar

O jogo inicia automaticamente exibindo uma pergunta.
Clique na resposta que você acha correta para selecioná-la.
Confirme sua escolha clicando no botão Confirmar:
Se a resposta estiver correta, a próxima pergunta será exibida.
Se a resposta estiver errada, o jogo exibirá Game Over.
Após responder todas as perguntas corretamente, o jogo exibe uma mensagem de parabéns.
Clique em Jogar Novamente para reiniciar o jogo.

📝 Regras do Jogo

Cada pergunta possui 4 opções de resposta.
Apenas uma opção é correta.
Todas as perguntas são únicas durante uma partida.

📌 Notas de Desenvolvimento

As perguntas são armazenadas em um array de objetos, cada uma contendo:
pergunta: O texto da pergunta.
respostas: As 4 opções de resposta.
correta: O índice da resposta correta.
A lógica para exibição das perguntas utiliza:
Geração de números aleatórios para sortear perguntas.
Embaralhamento de botões para respostas dinâmicas.
