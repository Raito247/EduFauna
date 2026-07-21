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
    if (puntosGuardados >= 16) { 
        animal.src = "../images/animal.png"; 
        animal.alt = "Manatí";
        animalito.innerHTML = " Manatí (Gran Sabio)";
    } 
    else if (puntosGuardados >= 12) {
        animal.src = "../images/animal(3).png"; 
        animal.alt = "Condor";
        animalito.innerHTML = " Condor (Buena Alma)";
    }else if (puntosGuardados >= 7) {
        animal.src = "../images/4.png"; 
        animal.alt = "Sapito";
        animalito.innerHTML = " Sapito (Buena Alma)";
    } else {
        animal.src = "../images/12.png"; 
        animal.alt = "Venado";
        animalito.innerHTML = " Venado (Explorador)";
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