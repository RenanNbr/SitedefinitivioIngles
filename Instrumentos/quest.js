/*Criando questões e Respostas*/
const questions = [
      {
      question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/baixo.jpeg' alt='imgagen baixo'>",
        options: ["baixo", "low", "loo", "lwoe"],
        answer: "Livro"
      },
      {
      question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/bateria.jpeg' alt='imgagen bateria'>",
      options: ["bateria", "battery", "battrery", "batterry"],
      answer: "battery"
      },
      {
      question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/guitarra.jpeg' alt='imgagen guitarra'>",
      options: ["guitarra", "guitar", "guitarr", "guitaar"],
      answer: "guitar"
      },
      {
      question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/pandeiro.jpeg' alt='imgagen pandeiro'>",
      options: ["pandeiro", "tambourine", "tamboorine", "tambourin"],
      answer: "tambourine"
      },
      {
      question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/piano.jpeg' alt='imgagen piano'>",
      options: ["piano", "pianu", "pianno", "piana"],
      answer: "piano"
      },
      {
        question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/sanfona.jpeg' alt='imgagen sanfona'>",
        options: ["sanfona", "accordion", "accordioon", "accordian"],
        answer: "accordion"
      },
      {
        question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/saxofone.jpeg' alt='imgagen saxofone'>",
        options: ["saxofone", "saxophone", "saxaphon", "saxophne"],
        answer: "saxophone"
      },
      {
        question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/ukulele.jpeg' alt='imgagen ukulele'>",
        options: ["ukulele", "ukelele", "ukulale", "ukulule"],
        answer: "ukulele"
      },
      {
        question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/violão.jpeg' alt='imgagen violão'>",
        options: ["violão", "guitar", "gitter", "guuitar"],
        answer: "guitar"
      },
      {
        question: " <div>Qual é esse Instrumento? </div> <img src='./imagens/violino.jpeg' alt='imgagen violino'>",
        options: ["violino", "violin", "viollin", "violine"],
        answer: "violin"
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

