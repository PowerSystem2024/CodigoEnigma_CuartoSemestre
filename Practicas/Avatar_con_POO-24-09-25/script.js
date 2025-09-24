// Clase Personaje
class Personaje {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen || this.obtenerImagenPorDefecto();
        this.hp = 3;
    }

    // Método para obtener imagen por defecto para nuevos personajes
    obtenerImagenPorDefecto() {
        const imagenesDisponibles = [
            "https://i.pinimg.com/736x/64/9d/6d/649d6df079637f32bf81101f81baf205.jpg",
            "https://i.pinimg.com/736x/79/ca/46/79ca4626688058b7c37ee894a12cdba2.jpg",
            "https://i.pinimg.com/736x/2a/32/bb/2a32bb14b8329b771cc5bdf28f97ba9b.jpg"
        ];
        
        // Contar cuántos personajes personalizados ya existen
        const personajesPersonalizados = avatares.filter(p => 
            !p.imagen.includes("static.wikia.nocookie.net") && 
            !p.imagen.includes("static1.srcdn.com") && 
            !p.imagen.includes("sm.ign.com") && 
            !p.imagen.includes("i.pinimg.com/736x/4e/00/11")
        ).length;
        
        // Usar imagen cíclicamente
        return imagenesDisponibles[personajesPersonalizados % imagenesDisponibles.length];
    }

    // Método para atacar: devuelve un ataque aleatorio
    atacar() {
        const ataques = ["Puño", "Patada", "Barrida"];
        return ataques[Math.floor(Math.random() * ataques.length)];
    }

    // Método para recibir daño
    recibirDaño() {
        this.hp = Math.max(this.hp - 1, 0);
        return this.hp;
    }

    // Reinicia la vida
    resetHP() {
        this.hp = 3;
    }
}

// Array de personajes estáticos (siempre visibles)
let avatares = [
    new Personaje("Zuko 🔥", "https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png"),
    new Personaje("Katara 💧", "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Katara-3-Cropped.jpg"),
    new Personaje("Aang ☁️", "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"),
    new Personaje("Toph ⛰️", "https://i.pinimg.com/736x/4e/00/11/4e00111c746f99e1a41374cf8ebb77c7.jpg")
];

// Variables globales
let jugador = null;
let enemigo = null;

// DOM Elements
const elCharOptions = document.getElementById("char-options");
const elAttackSection = document.getElementById("attack-section");
const elCharSelector = document.getElementById("char-selector");
const elPlayerImg = document.getElementById("player");
const elEnemyImg = document.getElementById("enemy");
const elVersusText = document.getElementById("versus-text");
const elBattleResult = document.getElementById("battle-result");
const elFinish = document.getElementById("finish");
const elFinishText = document.getElementById("finish-text");
const elPlayerHP = document.getElementById("player-hp");
const elEnemyHP = document.getElementById("enemy-hp");
const elAttacksContainer = document.getElementById("attacks-container");
const elRulesContainer = document.getElementById("rules-container");
const elNewCharSection = document.getElementById("new-char-section");

// Render dinámico de personajes - MODIFICADO
function renderCharacters() {
    elCharOptions.innerHTML = "";
    avatares.forEach((p, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="character" value="${index}">
            <div class="char-content">
                <img src="${p.imagen}" alt="${p.nombre}" class="char-img">
                <span class="char-name">${p.nombre}</span>
            </div>
        `;
        elCharOptions.appendChild(label);
    });
    
    // Agregar evento para cambiar estilos al seleccionar
    const radios = document.querySelectorAll('input[name="character"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remover selección anterior
            document.querySelectorAll('.char-content').forEach(content => {
                content.style.borderColor = 'transparent';
                content.style.backgroundColor = 'transparent';
            });
            
            // Aplicar estilos al seleccionado
            if (this.checked) {
                const content = this.nextElementSibling;
                content.style.borderColor = '#ffcc00';
                content.style.backgroundColor = 'rgba(255, 204, 0, 0.1)';
            }
        });
    });
}

// Crear nuevo personaje
function crearPersonaje() {
    const nameInput = document.getElementById("new-char-name");
    const nombre = nameInput.value.trim();

    if (!nombre) {
        alert("Por favor, ingrese un nombre para el personaje");
        return;
    }

    // Verificar si ya existe un personaje con ese nombre
    if (avatares.some(p => p.nombre === nombre)) {
        alert("Ya existe un personaje con ese nombre");
        return;
    }

    const nuevo = new Personaje(nombre);
    avatares.push(nuevo);
    nameInput.value = "";
    renderCharacters(); // refresca la lista
    alert(`¡Personaje "${nombre}" creado exitosamente!`);
}

// Mostrar/ocultar reglas
function showRules() {
    const isHidden = elRulesContainer.style.display === 'none';
    elRulesContainer.style.display = isHidden ? 'block' : 'none';
    document.getElementById('show-rules').textContent = 
        isHidden ? 'Ocultar Reglas' : 'Mostrar Reglas';
}

// Selección de personaje - MODIFICADO
function selectCharacter() {
    const radios = document.getElementsByName("character");
    let selectedIndex = -1;

    radios.forEach((r, i) => {
        if (r.checked) selectedIndex = i;
    });

    if (selectedIndex === -1) {
        alert("Seleccione un personaje");
        return;
    }

    jugador = avatares[selectedIndex];

    // Elegir enemigo aleatorio (que no sea el jugador)
    let availableEnemies = avatares.filter(p => p !== jugador);
    enemigo = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];

    // Reiniciar HP
    jugador.resetHP();
    enemigo.resetHP();
    elPlayerHP.innerText = jugador.hp;
    elEnemyHP.innerText = enemigo.hp;

    // Mostrar sección batalla
    toggleDisplay(elAttackSection, true);
    toggleDisplay(elCharSelector, false);
    toggleDisplay(elNewCharSection, false);

    // Asegurar que los ataques estén visibles - NUEVO
    toggleDisplay(elAttacksContainer, true);

    // Setear imágenes y texto
    elPlayerImg.src = jugador.imagen;
    elEnemyImg.src = enemigo.imagen;
    elVersusText.innerText = `${jugador.nombre} VS ${enemigo.nombre}`;

    // Limpiar resultados anteriores
    elBattleResult.innerHTML = '';
    elFinish.style.display = 'none';

    // Renderizar ataques
    renderAttacks();
}

// Renderizar botones de ataque
function renderAttacks() {
    elAttacksContainer.innerHTML = "";
    const ataques = ["Puño", "Patada", "Barrida"];
    ataques.forEach(attack => {
        const button = document.createElement("button");
        button.textContent = attack;
        button.onclick = () => attackFunction(attack);
        elAttacksContainer.appendChild(button);
    });
}

// Funciones de combate
const beats = { "Puño": "Barrida", "Patada": "Puño", "Barrida": "Patada" };

function attackFunction(playerAttack) {
    const enemyAttack = enemigo.atacar();

    // Determinar resultado
    let resultMessage = "";
    let color = "gray";
    
    if (beats[playerAttack] === enemyAttack) {
        resultMessage = "¡Le pegaste!";
        color = "limegreen";
        lowerLife(enemigo, "enemy");
    } else if (playerAttack === enemyAttack) {
        resultMessage = "Ambos bloquean";
        color = "gray";
    } else {
        resultMessage = "Te pegó el enemigo";
        color = "red";
        lowerLife(jugador, "player");
    }

    // Mostrar acción
    newAction(`${jugador.nombre} atacó con ${playerAttack}, ${enemigo.nombre} respondió con ${enemyAttack}`, "white");
    newAction(resultMessage, color);
}

function lowerLife(personaje, target) {
    // Aplicar efecto visual
    const imgElement = target === "player" ? elPlayerImg : elEnemyImg;
    const hpElement = target === "player" ? elPlayerHP : elEnemyHP;
    const floatingText = target === "player" ? 
        document.getElementById("player-floating-text") : 
        document.getElementById("enemy-floating-text");
    
    imgElement.classList.add('effect');
    setTimeout(() => imgElement.classList.remove('effect'), 300);

    // Efecto de texto flotante
    floatingText.style.opacity = "1";
    floatingText.classList.add("float-up");
    setTimeout(() => {
        floatingText.style.opacity = "0";
        floatingText.classList.remove("float-up");
    }, 1000);

    const hp = personaje.recibirDaño();
    hpElement.innerText = hp;

    if (hp === 0) {
        showFinish(target === "enemy" ? "¡Ganaste!" : "Perdiste...");
        toggleDisplay(elAttacksContainer, false);
        
        // Aplicar efecto de personaje derrotado
        imgElement.classList.add('dead');
    }
}

// Utilidades
function newAction(message, color) {
    const div = document.createElement("div");
    div.textContent = message;
    div.style.color = color || "inherit";
    elBattleResult.insertBefore(div, elBattleResult.firstChild);
}

function showFinish(text) {
    elFinishText.innerText = text;
    elFinish.style.display = 'flex';
}

// Reset del juego - MODIFICADO
function resetGame() {
    toggleDisplay(elAttackSection, false);
    toggleDisplay(elCharSelector, true);
    toggleDisplay(elNewCharSection, true);
    elFinish.style.display = 'none';
    
    // Remover efectos de personajes derrotados
    elPlayerImg.classList.remove('dead');
    elEnemyImg.classList.remove('dead');
    
    // LIMPIAR Y RESETEAR VARIABLES CRÍTICAS - NUEVO
    jugador = null;
    enemigo = null;
    
    // Limpiar resultados de batalla
    elBattleResult.innerHTML = '';
    
    // Resetear selección de personajes
    const radios = document.querySelectorAll('input[name="character"]');
    radios.forEach(radio => {
        radio.checked = false;
        const content = radio.nextElementSibling;
        if (content) {
            content.style.borderColor = 'transparent';
            content.style.backgroundColor = 'transparent';
        }
    });
    
    // Asegurar que los contenedores de ataque estén visibles para el próximo juego
    toggleDisplay(elAttacksContainer, true);
}

function toggleDisplay(el, show) {
    el.style.display = show ? "block" : "none";
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    renderCharacters();
    
    // Asegurar que la página sea responsive desde el inicio
    window.addEventListener('resize', function() {
        // Forzar re-renderizado en cambio de tamaño
        if (elAttackSection.style.display === 'block') {
            renderAttacks();
        }
    });
});