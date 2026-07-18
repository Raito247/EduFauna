const nombre = document.querySelector("#nombre");
const iniciar = document.querySelector("#iniciar");

iniciar.addEventListener("click", () => {
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("categorias-jugadas");
    location.href="quizz2inicio.html";
})