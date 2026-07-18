const preguntas2 = [
    {
        "pregunta": "Age range?",
        "answer1": "under 18", "answer1Total": "1",
        "answer2": "18 - 30", "answer2Total": "2",
        "answer3": "over 30", "answer3Total": "3"
    },
    {
        "pregunta": "I am very imaginative.",
        "answer1": "Agree", "answer1Total": "1",
        "answer2": "Neutral", "answer2Total": "2",
        "answer3": "Disagree", "answer3Total": "3"
    },
    {
        "pregunta": "Select in which order you would value these \"Money, Love & Career\"",
        "answer1": "Love, Career, Money", "answer1Total": "1",
        "answer2": "Money, Career, Love", "answer2Total": "3",
        "answer3": "Career, Love, Money", "answer3Total": "2"
    },
    {
        "pregunta": "Best Sentence to describe you?",
        "answer1": "You feel superior to other people.", "answer1Total": "3",
        "answer2": "You consider yourself more practical than creative.", "answer2Total": "2",
        "answer3": "Winning a debate matters less to you than making sure no one gets upset.", "answer3Total": "1"
    },
    {
        "pregunta": "Which best describes your relationship with food",
        "answer1": "You tend to over-eat when you have company.", "answer1Total": "1",
        "answer2": "You tend to eat snacks secretly.", "answer2Total": "2",
        "answer3": "You prepare food and don’t even look at the recipe.", "answer3Total": "3"
    },
    {
        "pregunta": "You make plans with a friend and they cancel on you, what do you do?",
        "answer1": "Say \"whatever\" and plan a night that'll be GREAT so they don't cancel again.", "answer1Total": "3",
        "answer2": "Feel hurt because you were looking forward to tonight.", "answer2Total": "2",
        "answer3": "No problem, you kinda wanted to stay home anyway.", "answer3Total": "1"
    },
    {
        "pregunta": "Which of the following colours do you like most?",
        "answer1": "Black", "answer1Total": "1",
        "answer2": "Yellow or light blue", "answer2Total": "2",
        "answer3": "Red or orange", "answer3Total": "3"
    }
];

let currentpregunta = 0;
let score = [];
const totalpreguntas2 = preguntas2.length;

const nombreJugador = localStorage.getItem("nombre");
if (nombreJugador && document.querySelector("#nombre")) {
    document.querySelector("#nombre").textContent = nombreJugador;
}

const preguntaEl = document.querySelector('#txt-pregunta');
const option1 = document.querySelector('#opcion1');
const option2 = document.querySelector('#opcion2');
const option3 = document.querySelector('#opcion3');
const nextButton = document.querySelector('#siguiente');

function generatepreguntas2(index) {
    if (!preguntaEl) return;
    const pregunta = preguntas2[index];
    
    preguntaEl.innerHTML = `${index + 1}. ${pregunta.pregunta}`;
    option1.setAttribute('data-total', `${pregunta.answer1Total}`);
    option2.setAttribute('data-total', `${pregunta.answer2Total}`);
    option3.setAttribute('data-total', `${pregunta.answer3Total}`);
    
    option1.innerHTML = ` ${pregunta.answer1}`;
    option2.innerHTML = ` ${pregunta.answer2}`;
    option3.innerHTML = ` ${pregunta.answer3}`;
}

function loadNextpregunta() {
    const selectedOption = document.querySelector('input[name="opcion"]:checked');
    
    if (!selectedOption) {
        alert('¡Por favor selecciona una respuesta!');
        return;
    }
    
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    score.push(answerScore);

    const totalScore = score.reduce((total, currentNum) => total + currentNum, 0);
    currentpregunta++;

    selectedOption.checked = false;

    if (currentpregunta === totalpreguntas2 - 1 && nextButton) {
        nextButton.textContent = 'Finalizar';
    }

    if (currentpregunta === totalpreguntas2) {
        localStorage.setItem("puntaje-total", totalScore);
        location.href = "final2.html"; 
        return;
    }
    
    generatepreguntas2(currentpregunta);
}

if (totalpreguntas2 > 0) {
    generatepreguntas2(currentpregunta);
}

if (nextButton) {
    nextButton.addEventListener('click', loadNextpregunta);
}