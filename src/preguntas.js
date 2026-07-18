const lista = [
    {
        id: 1,
        categoria: "general",
        titulo: "¿Qué animal es considerado la 'vaca marina' y ayuda a mantener limpios los ríos del Lago de Maracaibo?",
        opcionA: "El Cóndor",
        opcionB: "El Manatí",
        opcionC: "El Venado paramero",
        opcionD: "El Sapito silbador",
        correcta: "b"
    },
    {
        id: 2,
        categoria: "general",
        titulo: "Soy el ave voladora más grande del planeta y puedo planear por horas sin cansarme en los Páramos de Mérida, Trujillo y Táchira. ¿Quién soy?",
        opcionA: "El Hormiguero tororoi",
        opcionB: "La Mariposa del Tamá",
        opcionC: "El Cóndor",
        opcionD: "El Sapito amarillo",
        correcta: "c"
    },
    {
        id: 3,
        categoria: "general",
        titulo: "¿Cuál es el ave endémica que vive escondida en la hoya del río Chiquito en el Estado Táchira?",
        opcionA: "El Cóndor",
        opcionB: "El Venado paramero",
        opcionC: "La Mariposa manchada",
        opcionD: "El Hormiguero tororoi tachirense",
        correcta: "d"
    },
    {
        id: 4,
        categoria: "general",
        titulo: "¿Qué mamífero de nombre científico 'Odocoileus lasiotis' habita en las zonas altas andinas de Mérida, Táchira y Trujillo?",
        opcionA: "El Venado paramero",
        opcionB: "El Manatí",
        opcionC: "El Sapito acollarado",
        opcionD: "El Hormiguero tororoi",
        correcta: "a"
    },
    {
        id: 5,
        categoria: "general",
        titulo: "¿Qué anfibio del grupo de los científicos 'Dendropsophus amicorum' vive exclusivamente en el Cerro Socopo del Estado Falcón?",
        opcionA: "El Sapito de Mucubají",
        opcionB: "La Rana arborícola del Socopo",
        opcionC: "El Cóndor",
        opcionD: "El Manatí",
        correcta: "b"
    },
    {
        id: 6,
        categoria: "general",
        titulo: "Los sapitos acollarados de Churuguara (Mannophryne caquetio) viven felices en el Estado Falcón, ¿específicamente en qué zonas?",
        opcionA: "En las playas de Maracaibo",
        opcionB: "En las nieves de Mérida",
        opcionC: "En la Sierra de San Luis y Churuguara",
        opcionD: "En los páramos de Táchira",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "general",
        titulo: "¿Qué sapito comparte su hábitat entre la Serranía de Trujillo y el Cerro Socopo de Falcón?",
        opcionA: "El Sapito amarillo de Mérida",
        opcionB: "El Sapito acollarado del Socopo",
        opcionC: "La Mariposa paramera",
        opcionD: "El Manatí",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "general",
        titulo: "¿En qué hermoso bosque del Estado Mérida vive el Sapito amarillo de La Carbonera?",
        opcionA: "En el río Chiquito",
        opcionB: "En el Bosque de La Carbonera",
        opcionC: "En el Cerro Socopo",
        opcionD: "En la Sierra de San Luis",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "general",
        titulo: "¿En qué fríos arroyos y montañas de Mérida habitan los sapitos amarillos de las Sierras de La Culata y Nevada?",
        opcionA: "El Sapito amarillo de Mérida",
        opcionB: "La Mariposa manchada",
        opcionC: "El Hormiguero tororoi",
        opcionD: "El Sapito de Niquitao",
        correcta: "a"
    },
    {
        id: 10,
        categoria: "general",
        titulo: "Si visitas los alrededores de la Laguna de Mucubají en el Estado Mérida, ¿qué pequeño anfibio podrías encontrar?",
        opcionA: "El Sapito silbador",
        opcionB: "El Sapito amarillo de Mucubají",
        opcionC: "El Cóndor",
        opcionD: "La Mariposa del Cendé",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "general",
        titulo: "¿Qué colorido anfibio vive exclusivamente en el Páramo de Niquitao en el Estado Trujillo?",
        opcionA: "El Sapito amarillo y rojo de Niquitao",
        opcionB: "El Venado paramero",
        opcionC: "El Manatí",
        opcionD: "La Rana del Socopo",
        correcta: "a"
    },
    {
        id: 12,
        categoria: "general",
        titulo: "El Sapito anaranjado de San Francisco es un anfibio único. ¿En qué localidad de Mérida habita?",
        opcionA: "En Churuguara",
        opcionB: "En San Francisco de Guaraque",
        opcionC: "En la Laguna de Mucubají",
        opcionD: "En el Páramo de Cendé",
        correcta: "b"
    },
    {
        id: 13,
        categoria: "general",
        titulo: "¿Qué tierno sapito lleva el nombre del Parque Nacional El Tamá donde vive en el Estado Táchira?",
        opcionA: "El Sapito arlequín de Tamá",
        opcionB: "El Sapito de Piñango",
        opcionC: "El Sapito silbador",
        opcionD: "El Sapito de La Carbonera",
        correcta: "a"
    },
    {
        id: 14,
        categoria: "general",
        titulo: "¿Qué anfibio de nombre 'Leptodactylus magistris' es completamente exclusivo del Cerro Socopo en el Estado Falcón?",
        opcionA: "El Venado paramero",
        opcionB: "El Cóndor",
        opcionC: "El Sapito silbador del Cerro Socopo",
        opcionD: "El Hormiguero tororoi",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "general",
        titulo: "¿Cómo se llama el sapito de colores verde y rojo que vive en los alrededores de Piñango, en el Estado Mérida?",
        opcionA: "El Sapito verdirrojo de Piñango",
        opcionB: "El Sapito acollarado",
        opcionC: "La Rana arborícola",
        opcionD: "El Sapito de San Francisco",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "general",
        titulo: "¿Qué hermoso insecto volador habita en los altos páramos del Macizo de El Tamá en el Estado Táchira?",
        opcionA: "El Hormiguero tororoi",
        opcionB: "El Sapito arlequín",
        opcionC: "La Mariposa manchada del Tamá",
        opcionD: "El Cóndor",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "general",
        titulo: "¿En qué zona montañosa, ubicada en los límites de Trujillo y Lara, revolotea la Mariposa paramera del Cendé?",
        opcionA: "En el Páramo de Cendé",
        opcionB: "En el Lago de Maracaibo",
        noticiaC: "En la Sierra de San Luis",
        opcionD: "En el Bosque de La Carbonera",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "general",
        titulo: "El Manatí (Trichechus manatus) vive en agua dulce y costera. ¿En qué sistema de agua de la región Zuliana se encuentra?",
        opcionA: "En los páramos de Mérida",
        opcionB: "En el Sistema del Lago de Maracaibo y sus ríos tributarios",
        opcionC: "En el Cerro Socopo",
        opcionD: "En el río Chiquito de Táchira",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "general",
        titulo: "Si un científico busca al insecto 'Redonda leukasmena', ¿qué animal de la lista está intentando encontrar?",
        opcionA: "La Mariposa paramera del Cendé",
        opcionB: "La Mariposa manchada del Tamá",
        opcionC: "El Sapito de San Francisco",
        opcionD: "El Hormiguero tororoi tachirense",
        correcta: "a"
    },
    {
        id: 20,
        categoria: "general",
        titulo: "¿Cuáles son los tres estados andinos donde vuela y habita el majestuoso Cóndor ('Vultur gryphus')?",
        opcionA: "Zulia, Falcón y Lara",
        opcionB: "Mérida, Trujillo y Táchira",
        opcionC: "Carabobo, Yaracuy y Aragua",
        opcionD: "Bolívar, Amazonas y Apure",
        correcta: "b"
    }
];


function obtenerPreguntasAleatorias(array, cantidad) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]]; 
    }
    return copia.slice(0, cantidad); 
}


const preguntas = obtenerPreguntasAleatorias(lista, 5);


const txtPuntaje = document.querySelector("#puntos");
const nombreContenedor = document.querySelector("#nombre");
const contenedorOpciones = document.querySelector("#opciones");

if (nombreContenedor) {
    nombreContenedor.innerHTML = localStorage.getItem("nombre") || "Jugador";
}

let numPreguntaActual = 0;
let puntajeTotal = 0;
let respuestasAcertadas = 0; 

if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    if (txtPuntaje) txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    if (txtPuntaje) txtPuntaje.innerHTML = puntajeTotal;
}

if (!localStorage.getItem("respuestas-acertadas")) {
    localStorage.setItem("respuestas-acertadas", 0);
} else {
    respuestasAcertadas = parseInt(localStorage.getItem("respuestas-acertadas"));
}

function cargarSiguientePregunta(num) {
    if (preguntas.length === 0 || !preguntas[num]) return;

    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    if (numPregunta) numPregunta.innerHTML = String(num + 1).padStart(2, '0');
    if (txtPregunta) txtPregunta.innerHTML = preguntas[num].titulo;
    if (opcionA) opcionA.innerHTML = preguntas[num].opcionA;
    if (opcionB) opcionB.innerHTML = preguntas[num].opcionB;
    if (opcionC) opcionC.innerHTML = preguntas[num].opcionC;
    if (opcionD) opcionD.innerHTML = preguntas[num].opcionD;

    if (contenedorOpciones) {
        contenedorOpciones.classList.remove("incorrecta-efecto");
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", agregarEventListenerBoton);
        opcion.classList.remove("correcta", "incorrecta", "no-events");
    });

    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    if (txtPuntaje) txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e) {
    if (!preguntas[numPreguntaActual]) return;

    const respuestaCorrecta = preguntas[numPreguntaActual].correcta;

    if (e.currentTarget.id === respuestaCorrecta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal += 100;
        respuestasAcertadas += 1;
        
        if (txtPuntaje) {
            txtPuntaje.innerHTML = puntajeTotal;
            txtPuntaje.classList.add("efecto");
        }
        localStorage.setItem("puntaje-total", puntajeTotal);
        localStorage.setItem("respuestas-acertadas", respuestasAcertadas);
    } else {
        e.currentTarget.classList.add("incorrecta");
        
        if (contenedorOpciones) {
            contenedorOpciones.classList.add("incorrecta-efecto");
        }
        
        const correctaBtn = document.querySelector("#" + respuestaCorrecta);
        if (correctaBtn) correctaBtn.classList.add("correcta");
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });
}

cargarSiguientePregunta(numPreguntaActual);

const btnSiguiente = document.querySelector("#siguiente");
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", () => {
        numPreguntaActual++;
        if (numPreguntaActual <= 4) { 
            cargarSiguientePregunta(numPreguntaActual);
        } else {
            location.href = "finalquizz.html";
        }
    });
}