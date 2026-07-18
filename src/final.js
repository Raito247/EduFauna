const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const puntajeFinal = document.querySelector("#puntaje-final");
const totalAcertadas = document.querySelector("#total-acertadas");
const totalNoAcertadas = document.querySelector("#total-no-acertadas");
const btnComenzar = document.querySelector("#comenzar");
const btnInicio = document.querySelector("#inicio");
const imgMedalla = document.querySelector("#medalla");

if (nombre) {
    nombre.innerHTML = localStorage.getItem("nombre") || "Jugador";
}

const puntosGuardados = parseInt(localStorage.getItem("puntaje-total")) || 0;
if (txtPuntaje) txtPuntaje.innerHTML = puntosGuardados;
if (puntajeFinal) puntajeFinal.innerHTML = puntosGuardados + " Puntos";


const correctas = parseInt(localStorage.getItem("respuestas-acertadas")) || 0;
const incorrectas = 5 - correctas; 

if (totalAcertadas) totalAcertadas.innerHTML = correctas;
if (totalNoAcertadas) totalNoAcertadas.innerHTML = incorrectas;


if (imgMedalla) {
    if (correctas === 5) {
        // 5 acertadas
        imgMedalla.src = "../images/medalla1.png"; 
        imgMedalla.alt = "¡Excelente! Medalla de Oro por 5 aciertos";
    } else if (correctas >= 3) {
        // 3 o 4 acertadas
        imgMedalla.src = "../images/medalla2.png"; 
        imgMedalla.alt = "¡Muy bien! Medalla de Plata por tu gran esfuerzo";
    } else {
        // 2, 1 o 0 acertadas
        imgMedalla.src = "../images/medalla3.png"; 
        imgMedalla.alt = "Medalla de Bronce. ¡Sigue intentándolo para aprender más!";
    }
}

if (btnComenzar) {
    btnComenzar.addEventListener("click", () => {
        localStorage.setItem("puntaje-total", 0);
        localStorage.setItem("respuestas-acertadas", 0);
        location.href = "quizz1.html";
    });
}

if (btnInicio) {
    btnInicio.addEventListener("click", () => {
        location.href = "juegos.html";
    });
}