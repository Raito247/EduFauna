const btnComenzar = document.querySelector("#comenzar");
const btnInicio = document.querySelector("#inicio");
const animal = document.querySelector("#animal");
const nombre = document.querySelector("#nombre");
const animalito = document.querySelector("#animalito");

if (nombre) {
    nombre.innerHTML = localStorage.getItem("nombre") || "Jugador";
}

const puntosGuardados = parseInt(localStorage.getItem("puntaje-total")) || 0;

if (animal && animalito) {
    if (puntosGuardados >= 18) { 
        animal.src = "../images/medalla1.png"; 
        animal.alt = "¡Excelente!";
        animalito.innerHTML = " Manatí (Gran Sabio)";
    } else if (puntosGuardados >= 10) {
        animal.src = "../images/medalla2.png"; 
        animal.alt = "¡Muy bien!";
        animalito.innerHTML = " Delfín (Buena Alma)";
    } else {
        animal.src = "../images/medalla3.png"; 
        animal.alt = "Sigue intentándolo";
        animalito.innerHTML = " Zorro Silvestre (Explorador)";
    }
}

if (btnComenzar) {
    btnComenzar.addEventListener("click", () => {
        localStorage.setItem("puntaje-total", 0);
        location.href = "quizz2.html";
    });
}

if (btnInicio) {
    btnInicio.addEventListener("click", () => {
        location.href = "juegos.html";
    });
}