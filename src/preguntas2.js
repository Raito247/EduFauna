const preguntas2 = [
    {
        "pregunta": "¿Cuál es tu momento favorito del día?",
        "answer1": "Mañana", "answer1Total": "3",
        "answer2": "Tarde", "answer2Total": "1",
        "answer3": "Noche", "answer3Total": "1"
    },
    {
        "pregunta": "¿Cuál es tu actividad ideal para el fin de semana?",
        "answer1": "Ir de aventura o viaje", "answer1Total": "1",
        "answer2": "Relajarte en casa", "answer2Total": "3",
        "answer3": "Pasar tiempo en familia", "answer3Total": "2"
    },
    {
        "pregunta": "¿Cómo prefieres pasar tu tiempo libre?",
        "answer1": "Haciendo ejercicio o practicando deportes", "answer1Total": "1",
        "answer2": "Socializando con amigos", "answer2Total": "2",
        "answer3": "Durmiendo todo lo que pueda", "answer3Total": "3"
    },
    {
        "pregunta": "¿Qué estación te gusta más?",
        "answer1": "Verano", "answer1Total": "3",
        "answer2": "Invierno", "answer2Total": "",
        "answer3": "Primavera", "answer3Total": "2"
    },
    {
        "pregunta": "¿Cómo abordas la resolución de problemas?",
        "answer1": "Analizando todos los detalles", "answer1Total": "2",
        "answer2": "Confía en tus instintos", "answer2Total": "1",
        "answer3": "Buscando consejo de otros", "answer3Total": "3"
    },
    {
        "pregunta": "Si estuvieras en una búsqueda, ¿qué papel preferirías?",
        "answer1": "El valiente guerrero", "answer1Total": "3",
        "answer2": "El sabio líder", "answer2Total": "1",
        "answer3": "El estratega ingenioso", "answer3Total": "2"
    },
    {
        "pregunta": " Si pudieras tener una habilidad especial, ¿cuál sería?",
        "answer1": "Respirar bajo el agua", "answer1Total": "3",
        "answer2": "Agilidad y velocidad mejoradas", "answer2Total": "2",
        "answer3": "Invisibilidad", "answer3Total": "1"
    }
];

/*
manaties=tranquila, perezosos, relajados, curiosos, inteligentes,pacificos, 24horas (16)
condor=sociable, paciente, familia, pacifico, inteligente,juguetones, diurno(11)
sapito amarillo de merida=pacifico, diurno, activos, llamativo, frio, energetico(6)
venado=solitario, pacifico, timido, cauteloso, amanecer/atardecer, sentidos agudos, agilidad
*/


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