const perguntas = [
    {
        pergunta: "Beber água com limão em jejum emagrece.",
        resposta: false,
        explicacao: "Falso. Beber água com limão em jejum não tem propriedades mágicas para emagrecimento. Apesar de ser uma bebida saudável e hidratante, não há evidências científicas que comprovem que ela acelera o metabolismo ou queima gordura."
    },
    {
        pergunta: "O ômega-3 é importante para a saúde do cérebro.",
        resposta: true,
        explicacao: "Verdadeiro. O ômega-3 é um ácido graxo essencial que contribui para a saúde cerebral, melhorando a memória e a função cognitiva."
    },
    {
        pergunta: "Comer carboidratos à noite engorda.",
        resposta: false,
        explicacao: "Falso. O ganho de peso está relacionado ao consumo excessivo de calorias ao longo do dia, não ao horário em que os carboidratos são consumidos."
    },
    {
        pergunta: "O consumo de fibras ajuda no funcionamento do intestino.",
        resposta: true,
        explicacao: "Verdadeiro. As fibras são essenciais para a saúde intestinal, ajudando a regular o trânsito e prevenir a constipação."
    },
    {
        pergunta: "Alimentos orgânicos são sempre mais nutritivos.",
        resposta: false,
        explicacao: "Falso. Alimentos orgânicos podem ter menos pesticidas, mas não necessariamente são mais nutritivos do que os convencionais."
    },
    {
        pergunta: "Ovo aumenta o colesterol ruim.",
        resposta: false,
        explicacao: "Falso. O ovo contém colesterol, mas seu consumo moderado não está diretamente associado ao aumento do colesterol ruim (LDL) em pessoas saudáveis."
    },
    {
        pergunta: "Chá verde emagrece.",
        resposta: false,
        explicacao: "Falso. O chá verde pode ajudar no metabolismo, mas não é uma solução mágica para emagrecimento. Ele deve ser combinado com uma dieta equilibrada e exercícios."
    },
    {
        pergunta: "Comer abacaxi à noite faz mal.",
        resposta: false,
        explicacao: "Falso. Não há evidências científicas que comprovem que comer abacaxi à noite faz mal. Ele é rico em fibras e vitaminas, podendo ser consumido em qualquer horário."
    },
    {
        pergunta: "Beber água é essencial para manter o corpo hidratado.",
        resposta: true,
        explicacao: "Verdadeiro. A água é vital para o funcionamento do organismo, ajudando na regulação da temperatura, transporte de nutrientes e eliminação de toxinas."
    },
    {
        pergunta: "Açúcar mascavo é mais saudável que açúcar refinado.",
        resposta: false,
        explicacao: "Falso. Açúcar mascavo contém alguns minerais, mas a diferença nutricional em relação ao açúcar refinado é mínima. Ambos devem ser consumidos com moderação."
    },
    {
        pergunta: "A vitamina D é importante para a saúde dos ossos.",
        resposta: true,
        explicacao: "Verdadeiro. A vitamina D ajuda na absorção de cálcio, sendo fundamental para a saúde óssea e a prevenção de doenças como a osteoporose."
    },
    {
        pergunta: "Glúten faz mal para todo mundo.",
        resposta: false,
        explicacao: "Falso. O glúten só faz mal para pessoas com doença celíaca ou sensibilidade ao glúten. Para a maioria das pessoas, ele é seguro e não causa problemas."
    },
    {
        pergunta: "Comer banana previne cãibras.",
        resposta: true,
        explicacao: "Verdadeiro. A banana é rica em potássio, um mineral importante para a prevenção de cãibras musculares."
    },
    {
        pergunta: "Dietas sem carboidratos são mais saudáveis.",
        resposta: false,
        explicacao: "Falso. Carboidratos são uma fonte importante de energia para o corpo. Dietas sem carboidratos podem levar à falta de nutrientes e energia."
    },
    {
        pergunta: "O consumo de frutas e vegetais reduz o risco de doenças crônicas.",
        resposta: true,
        explicacao: "Verdadeiro. Frutas e vegetais são ricos em vitaminas, minerais e antioxidantes, que ajudam a prevenir doenças como diabetes, hipertensão e problemas cardíacos."
    }
];

let perguntaAtual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
const elementoPergunta = document.getElementById("pergunta");
const opcoesContainer = document.querySelector(".opcoes"); // Container dos botões de opção
const explicacao = document.getElementById("explicacao");
const botaoProxima = document.getElementById("proxima");
const botaoRecomecar = document.getElementById("recomecar");
const quizContainer = document.querySelector(".quiz-container");
const resultadoFinal = document.getElementById("resultado-final"); // Novo elemento para exibir o resultado final

botaoRecomecar.addEventListener("click", () => {
    perguntaAtual = 0;
    pontuacao = 0; // Reinicia a pontuação
    carregarPergunta();
    resultadoFinal.style.display = "none"; // Oculta o resultado final
    opcoesContainer.style.display = "flex"; // Exibe os botões de opção novamente
});

function carregarPergunta() {
    quizContainer.style.backgroundColor = "#C2B8FF";
    elementoPergunta.textContent = `Pergunta ${perguntaAtual + 1}: "${perguntas[perguntaAtual].pergunta}"`;
    explicacao.textContent = "";
    explicacao.style.display = "none";
    botaoProxima.style.display = "none";
    botaoRecomecar.style.display = "none";
    opcoesContainer.querySelectorAll(".opcao").forEach(opcao => {
        opcao.style.backgroundColor = "#e0e0e0";
        opcao.style.pointerEvents = "auto";
    });
}

opcoesContainer.querySelectorAll(".opcao").forEach(opcao => {
    opcao.addEventListener("click", () => {
        const respostaCorreta = perguntas[perguntaAtual].resposta;
        const respostaUsuario = opcao.dataset.resposta === "true";

        if (respostaUsuario === respostaCorreta) {
            pontuacao++; // Incrementa a pontuação se a resposta estiver correta
            quizContainer.style.backgroundColor = "#e57373"; // Verde para acerto
        } else {
            quizContainer.style.backgroundColor = "#81c784"; // Vermelho para erro
        }

        opcao.style.backgroundColor = "#a0a0a0";
        explicacao.textContent = perguntas[perguntaAtual].explicacao;
        explicacao.style.display = "block";
        botaoProxima.style.display = "block";
        botaoRecomecar.style.display = "block";
        opcoesContainer.querySelectorAll(".opcao").forEach(opcao => {
            opcao.style.pointerEvents = "none";
        });
    });
});

botaoProxima.addEventListener("click", () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        exibirResultadoFinal(); // Exibe o resultado final após a última pergunta
    }
});

function exibirResultadoFinal() {
    // Oculta o conteúdo do quiz (pergunta, opções, botões)
    quizContainer.style.backgroundColor = "#C2B8FF";
    elementoPergunta.style.display = "none";
    opcoesContainer.style.display = "none";
    explicacao.style.display = "none";
    botaoProxima.style.display = "none";
    botaoRecomecar.style.display = "none";

    // Exibe o resultado final dentro do card
    resultadoFinal.style.display = "block";
    resultadoFinal.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Você acertou ${pontuacao} perguntas</p>
        <p>${obterMensagemMotivadora(pontuacao)}</p>
        <button id="recomecar-quiz">Recomeçar Quiz</button>
    `;

    // Adiciona evento ao botão "Recomeçar Quiz"
    document.getElementById("recomecar-quiz").addEventListener("click", () => {
        perguntaAtual = 0;
        pontuacao = 0;
        carregarPergunta();
        resultadoFinal.style.display = "none";
        elementoPergunta.style.display = "block"; // Exibe a pergunta novamente
        opcoesContainer.style.display = "flex"; // Exibe os botões de opção novamente
        botaoRecomecar.style.display = "block"; // Exibe o botão de recomeçar
    });
}

function obterMensagemMotivadora(pontuacao) {
    if (pontuacao >= 0 && pontuacao <= 5) {
        return `Aprender é um processo contínuo, e agora você sabe mais do que antes. Continue estudando!`;
    } else if (pontuacao >= 6 && pontuacao <= 10) {
        return `Bom trabalho! Você demonstrou um bom conhecimento, mas ainda há espaço para aprender mais. Siga em frente!`;
    } else if (pontuacao >= 11 && pontuacao <= 15) {
        return `Parabéns! Seu conhecimento sobre nutrição é impressionante!`;
    }
}

// Iniciar o quiz
carregarPergunta();