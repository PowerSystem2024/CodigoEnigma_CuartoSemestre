let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    // Selección de personaje
    document.getElementById("boton_personaje")
        .addEventListener("click", seleccionarPersonajeJugador);

    // Botones de ataque
    document.getElementById("boton-punio").addEventListener("click", () => atacar("Puño"));
    document.getElementById("boton-patada").addEventListener("click", () => atacar("Patada"));
    document.getElementById("boton-barrida").addEventListener("click", () => atacar("Barrida"));

    // Reiniciar
    document.getElementById("boton-reiniciar")
        .addEventListener("click", () => location.reload());

    // Acordeones
    document.getElementById("titulo-reglas")
        .addEventListener("click", () => toggle("lista-reglas", "titulo-reglas", "Reglas del Juego"));
    document.getElementById("titulo-ataque")
        .addEventListener("click", () => toggle("contenedor-ataques", "titulo-ataque", "Elige tu ataque"));
}

/* ---------- UTILIDADES UI ---------- */
function toggle(contentId, titleId, baseText) {
    const content = document.getElementById(contentId);
    const title = document.getElementById(titleId);

    content.classList.toggle("oculto");
    title.textContent = baseText + (content.classList.contains("oculto") ? " ⯈" : " ⯆");
}

function habilitarAtaques(estado) {
    ["boton-punio", "boton-patada", "boton-barrida"].forEach(id => {
        document.getElementById(id).disabled = !estado;
    });
}

/* ---------- FLUJO DE JUEGO ---------- */
function seleccionarPersonajeJugador() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    let elegido = personajes.find(p => document.getElementById(p).checked);

    if (!elegido) {
        mostrarError("Debes seleccionar un personaje antes de continuar.");
        return;
    }
    limpiarError();

    // Mostrar nombres
    document.getElementById("personaje-jugador").innerText = elegido;
    document.getElementById("personaje-enemigo").innerText = aleatoria(elegido);

    // Revelar secciones y controles
    document.getElementById("seleccionar-ataque").classList.remove("oculto");
    document.getElementById("reiniciar").classList.remove("oculto");
    habilitarAtaques(true);
}

function atacar(tipo) {
    ataqueJugador = tipo;
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueAleatorioEnemigo() {
    const ataques = ["Puño", "Patada", "Barrida"];
    ataqueEnemigo = ataques[aleatorio(0, 2)];
}

function combate() {
    let resultado = "";

    if (ataqueJugador === ataqueEnemigo) {
        resultado = "Empate 🤝";
    } else if (
        (ataqueJugador === "Puño" && ataqueEnemigo === "Barrida") ||
        (ataqueJugador === "Patada" && ataqueEnemigo === "Puño") ||
        (ataqueJugador === "Barrida" && ataqueEnemigo === "Patada")
    ) {
        resultado = "Ganaste el turno 🎉";
        vidasEnemigo--;
    } else {
        resultado = "Perdiste el turno 😢";
        vidasJugador--;
    }

    actualizarVidas();
    mostrarResultado(resultado);

    if (vidasJugador === 0 || vidasEnemigo === 0) {
        finalizarJuego();
    }
}

function finalizarJuego() {
    alert(vidasJugador === 0 ? "¡Perdiste el juego! 😭" : "¡Ganaste el juego! 🏆");
    habilitarAtaques(false);
}

/* ---------- ACTUALIZACIÓN UI ---------- */
function mostrarResultado(resultado) {
    document.getElementById("resultado").innerHTML = `
        <p>${resultado}</p>
        <p>Tu ataque: ${ataqueJugador}</p>
        <p>Ataque enemigo: ${ataqueEnemigo}</p>
    `;
}

function actualizarVidas() {
    document.getElementById("vidas-jugador").innerText = vidasJugador;
    document.getElementById("vidas-enemigo").innerText = vidasEnemigo;
}

function mostrarError(msg) {
    const e = document.getElementById("error-personaje");
    e.textContent = msg;
    e.style.color = "red";
}

function limpiarError() {
    document.getElementById("error-personaje").textContent = "";
}

/* ---------- HELPERS ---------- */
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function aleatoria(excluir) {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"].filter(p => p !== excluir);
    return personajes[aleatorio(0, personajes.length - 1)];
}

window.addEventListener("load", iniciarJuego);
