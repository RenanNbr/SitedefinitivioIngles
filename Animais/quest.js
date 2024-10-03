/*Criando questões e Respostas*/
const questions = [
      {
      question: " <div>Qual é esse Animal? </div> <img src='./imagens/cachorro.jpeg' alt='imgagen cachorro'>",
        options: ["cachorro", "dog", "doge", "doog"],
        answer: "dog"
      },
      {
      question: " <div>Qual é esse Animal? </div> <img src='./imagens/camaleao.jpeg' alt='imgagen camaleao'>",
      options: ["camaleão", "chameleon", "chameeleon", "chameelon"],
      answer: "chameleon"
      },
      {
      question: " <div>Qual é esse Animal? </div> <img src='./imagens/capivara.jpeg' alt='imgagen capivara'>",
      options: ["capivara", "capybara", "capybeara", "capybarra"],
      answer: "capybara"
      },
      {
      question: " <div>Qual é esse Animal? </div> <img src='./imagens/axolote.jpeg' alt='imgagen axolote'>",
      options: ["axolate", "axolte", "axolot", "axolatee"],
      answer: "axolate"
      },
      {
      question: " <div>Qual é esse Animal? </div> <img src='./imagens/coelho.jpeg' alt='imgagen coelho'>",
      options: ["coelho", "rabbit", "rabet", "rabit"],
      answer: "rabbit"
      },
      {
        question: " <div>Qual é esse Animal? </div> <img src='./imagens/elefante.jpeg' alt='imgagen elefante'>",
        options: ["elefante", "elephant", "elephentt", "eliphant"],
        answer: "elephant"
      },
      {
        question: " <div>Qual é esse Animal? </div> <img src='./imagens/gato.jpeg' alt='imgagen gato'>",
        options: ["gato", "cat", "cait", "kat"],
        answer: "cat"
      },
      {
        question: " <div>Qual é esse Animal? </div> <img src='./imagens/papagaio.jpeg' alt='imgagen papagaio'>",
        options: ["papagaio", "parrot", "parret", "parot"],
        answer: "parrot"
      },
      {
        question: " <div>Qual é esse Animal? </div> <img src='./imagens/zebra.jpeg' alt='imgagen zebra'>",
        options: ["zebra", "zeebra", "zebar", "zebbra"],
        answer: "zebra"
      },
      {
        question: " <div>Qual é esse Animal? </div> <img src='./imagens/peixe.jpeg' alt='imgagen peixe'>",
        options: ["peixe", "fish", "fishe", "fisch"],
        answer: "fish"
      }, 
];
//Fim Questions//


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.options.map(option => `
            <label class="option">
                <input type="radio" name="option" value="${option}"> ${option}
            </label>
        `).sort(() => Math.random() - 0.5).join('')}
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
            document.getElementById("score").textContent = "Pontuação: " + score
        }
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <h2>Quiz terminado!</h2>
            <p>Sua pontuação final é ${score}/${questions.length}</p>
            <button onclick="restartQuiz()">Jogar novamente</button>
        `;
        document.getElementById('next-button').style.display = 'none';
    }
});
//
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('score').innerText = 'Pontuação: 0';
    loadQuestion();
}

loadQuestion();

