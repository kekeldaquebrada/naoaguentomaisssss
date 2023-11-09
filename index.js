const $startGameButton = document.querySelector(".start")
const $nextQuestionButton = document.querySelector(".next")
const $questionsContainer = document.querySelector(".questoes-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".respostas-container")
const $answers = document.querySelectorAll(".resposta")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {

    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
      document.body.classList.add("orrect")
      totalCorrect++
    } else {
      document.body.classList.add("ncorrect") 
    }


  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  

  $questionsContainer.innerHTML = 
  `
   
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Jogar Novamente
    </button>
  `
}


const questions = [
  {
    question: "O que é um banco de dados?",
    answers: [
      { text: "Programa de navegação", correct: false },
      { text: "Software antivírus", correct: false },
      { text: "Coleção de informações relacionadas", correct: true },
      { text: "Editor de texto", correct: false }
    ]
  },
  {
    question: "Qual é a função do SQL em um banco de dados?",
    answers: [
      { text: "Gráficos e design", correct: false },
      { text: "Consultas e manipulação de dados", correct: true },
      { text: "Navegação na web", correct: false },
      { text: "Edição de imagens", correct: false }
    ]
  },
  {
    question: 'O que é um procedimento armazenado em um banco de dados?',
    answers: [
      { text: 'Um documento de texto com informações sobre o banco de dados', correct: false },
      { text: 'Um tipo de gráfico', correct: false },
      { text: ' Uma tabela temporária', correct: false },
      { text: "Uma sequência de comandos SQL armazenada no banco de dados ", correct: true }
    ]
  },
  {
    question: 'O que é uma chave primária em um banco de dados relacional?   ',
    answers: [
      { text: "Um identificador único para uma linha na tabela", correct: true },
      { text: " Um índice secundário", correct: false },
      { text: 'Um tipo de senha', correct: false },
      { text: "Uma restrição de acesso", correct: false }
    ]
  },
  {
    question: 'Quais são os tipos comuns de relacionamentos em um modelo de banco de dados?',
    answers: [
      { text: 'Amizade e família', correct: false },
      { text: 'Um para muitos, muitos para muitos, um para um', correct: true },
      { text: 'Rápido e lento', correct: false },
      { text: 'Condicional e incondicional', correct: false }
    ]
  },
  {
    question: 'O que é normalização em um banco de dados? ',
    answers: [
      { text: ' Organização de dados em uma sequência', correct: false },
      { text: ' Adição de dados adicionais', correct: false },
      { text: 'O processo de eliminar redundâncias', correct: true },
      { text: 'Aumento da complexidade dos dados', correct: false }
    ]
  },
  {
    question: 'Qual é a diferença entre um banco de dados SQL e NoSQL?',
    answers: [
      { text: ' Cor e forma', correct: false },
      { text: 'Estrutura de dados e linguagem de consulta', correct: true },
      { text: 'Localização geográfica', correct: false },
      { text: 'Número de usuários', correct: false },
    ]
  },
  {
    question: 'O que significa ACID em um contexto de banco de dados?',
    answers: [
      { text: 'Ácido clorídrico', correct: false },
      { text: ' Código de acesso', correct: false },
      { text: ' Método de criptografia', correct: false },
      { text: 'Propriedades atômicas, consistentes, isoladas e duráveis', correct: true },
    ]
  },
  {
    question: ' O que é um índice em um banco de dados?',
    answers: [
      { text: ' Lista de termos técnicos', correct: false },
      { text: 'Estrutura de armazenamento', correct: false },
      { text: ' Estrutura de dados que melhora a velocidade de recuperação de dados', correct: true },
      { text: 'Tabela de consulta', correct: false },
    ]
  },
  {
    question: 'Quando se utiliza o conceito de transação em um banco de dados?',
    answers: [
      { text: 'Ao realizar operações que devem ser executadas como uma unidade indivisível', correct: true },
      { text: 'Ao criar uma tabela', correct: false },
      { text: 'Somente durante a fase de teste', correct: false },
      { text: 'Ao fazer backup dos dados', correct: false },
    ]
  },
]



  // outro relogio
  let tempo = 0;
let cronometro;

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

function atualizarTempo() {
    tempo++;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
}

function iniciarCronometro() {
    if (!cronometro) {
        cronometro = setInterval(atualizarTempo, 1000);
    }
}

function pararCronometro() {
    clearInterval(cronometro);
    cronometro = null;
}

function zerarCronometro() {
    tempo = 0;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
    pararCronometro();
}
