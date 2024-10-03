/*Criando questões e Respostas*/
const questions = [
      {
      question: " <div>Qual é essa fruta? </div> <img src='./imagens/maca.jpeg' alt='imgagen maçã'>",
        options: ["Maçã", "Litter", "Liter", "Apple"],
        answer: "Apple"
      },
      {
      question: " <div>Qual é essa fruta? </div> <img src='./imagens/banana.jpeg' alt='imgagen banana'>",
      options: ["Banana", "Bananna", "Banena", "Bananer"],
      answer: "Banana"
      },
      {
      question: " <div>Qual é essa fruta? </div> <img src='./imagens/abacaxi.jpeg' alt='imgagen abacaxi'>",
      options: ["Abacaxi", "Pineapple", "Neapple", "Abacachy"],
      answer: "Pineapple"
      },
      {
      question: " <div>Qual é essa fruta? </div> <img src='./imagens/goiaba.jpeg' alt='imgagen goiaba'>",
      options: ["Goiba", "Guava", "Goibah", "Goybba"],
      answer: "Guava"
      },
      {
      question: " <div>Qual é essa fruta? </div> <img src='./imagens/abacate.jpeg' alt='imgagen abacate'>",
      options: ["Abacate", "Avocado", "Abacatteh", "Avocadde"],
      answer: "Avocado"
      },
      {
        question: " <div>Qual é essa fruta? </div> <img src='./imagens/kiwi.jpeg' alt='imgagen kiwi'>",
        options: ["Kiwi", "Kiwee", "Kiwy", "Kiwii"],
        answer: "Kiwi"
      },
      {
        question: " <div>Qual é essa fruta? </div> <img src='./imagens/manga.jpeg' alt='imgagen manga'>",
        options: ["Manga", "Mango", "Mangu", "Menga"],
        answer: "Mango"
      },
      {
        question: " <div>Qual é essa fruta? </div> <img src='./imagens/morango.jpeg' alt='imgagen morango'>",
        options: ["Morango", "Strawberry", "Moranguu", "Strawberrie"],
        answer: "Livro"
      },
      {
        question: " <div>Qual é essa fruta? </div> <img src='./imagens/pera.jpeg' alt='imgagen pera'>",
        options: ["Pera", "Pear", "Perah", "Peera"],
        answer: "Pear"
      },
      {
        question: " <div>Qual é essa fruta? </div> <img src='./imagens/melancia.jpeg' alt='imgagen melancia'>",
        options: ["Melancia", "Watermelon", "Melansyia", "Wattermelon"],
        answer: "Watermelon"
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

