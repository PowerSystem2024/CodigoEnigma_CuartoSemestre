// Variables de elementos
const elAttacksContainer = document.getElementById('attacks-container');
const elShowRulesButton = document.getElementById('show-rules');
const elRulesContainer = document.getElementById('rules-container');
const elAttackSection = document.getElementById('attack-section');
const elCharSelector = document.getElementById('char-selector');
const elPlayerImg = document.getElementById('player');
const elEnemyImg = document.getElementById('enemy');
const elVersusText = document.getElementById('versus-text');
const elBattleResult = document.getElementById('battle-result');
const elFinish = document.getElementById('finish');
const elFinishText = document.getElementById('finish-text');
const elCharacterRadios = document.getElementsByName('character');
const elPlayerHP = document.getElementById('player-hp');
const elEnemyHP = document.getElementById('enemy-hp');
const elPlayerFloatingText = document.getElementById('player-floating-text');
const elEnemyFloatingText = document.getElementById('enemy-floating-text');
const elAttackTitle = document.getElementById('attack-title');

// Datos fijos
const attacks = ['Puño', 'Patada', 'Barrida'];
const characters = ['Zuko', 'Katara', 'Aang', 'Toph'];
const beats = {'Puño': 'Barrida', 'Patada': 'Puño', 'Barrida': 'Patada'};
const imgByCharacter = {
    'Zuko': 'https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png',
    'Katara': 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Katara-3-Cropped.jpg',
    'Aang': 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg',
    'Toph': 'https://i.pinimg.com/736x/4e/00/11/4e00111c746f99e1a41374cf8ebb77c7.jpg'
}

// Flags y acumulador de vida
var selectedCharacter = null;
var rulesVisible = false;
var healthPointsByCharacter = { 'player': 3, 'enemy': 3 };

// Init que crea botones segun el array de ataques
attacks.forEach(attack => {
    var button = document.createElement('button');
    button.id = 'boton-' + attack;
    button.textContent = attack;
    button.onclick = () => attackFunction(attack);

    elAttacksContainer.appendChild(button);
});

// Funciones de Botones
function showRules() {
    rulesVisible = !rulesVisible;

    if(rulesVisible) {
        elShowRulesButton.innerText = "Ocultar Reglas";
        toggleDisplay(elRulesContainer, true);
    } else {
        elShowRulesButton.innerText = "Mostrar Reglas";
        toggleDisplay(elRulesContainer, false);
    }
}

function selectCharacter() {
    var hasOption = false;
    for (const radio of elCharacterRadios) {
        if (radio.checked) {
            const enemyCharacter = randomItem(characters);
            hasOption = true;
            selectedCharacter = radio.value;
            toggleDisplay(elAttackSection, true);
            elPlayerImg.src = imgByCharacter[selectedCharacter];
            elEnemyImg.src = imgByCharacter[enemyCharacter];
            elVersusText.innerText = `Seleccionaste a ${selectedCharacter} y tu enemigo a ${enemyCharacter}`;
        }
    }
    
    if(!hasOption) {
        alert(`Seleccione un Personaje`);
    } else {
        toggleDisplay(elCharSelector, false);
    }
}

function attackFunction(playerAttack) {
    const enemyAttack = randomItem(attacks);

    if (beats[playerAttack] === enemyAttack) {
        newAction('¡Le Pegaste!', 'limegreen');
        lowerLife('enemy');
    } else if (playerAttack === enemyAttack) {
        newAction('Ambos Bloquean', 'gray');
    } else {
        newAction('Te Pegaron', 'red');
        lowerLife('player');
    }

    var resultMessage = `Atacaste con ${playerAttack.toUpperCase()}, tu enemigo respondio con ${enemyAttack.toUpperCase()} `;
    newAction(resultMessage);
} 


// Funciones internas de pelea
function lowerLife(target) {
    damageEffect(target);
    var healthPointsContainer = (target === 'player') ? elPlayerHP : elEnemyHP;
    var hp = healthPointsByCharacter[target] - 1;

    healthPointsContainer.innerText = hp;
    healthPointsByCharacter[target] = hp;
    
    if(hp == 0) { 
        target == 'enemy' ? showFinish(`Ganaste!`) : showFinish(`Perdiste...`);
        toggleDisplay(elAttacksContainer, false);
        toggleDisplay(elAttackTitle, false);
        setTimeout(function() {
            elFinish.style.display = 'flex';
            elFinish.classList.add('fade-in')
        }, 1200);
        deadEffect(target);
    }
}

function newAction(resultMessage, color) {
    var action = document.createElement('div');
    action.innerHTML = resultMessage;
    action.style.color = color || 'inherit';

    elBattleResult.insertBefore(action, elBattleResult.firstChild);
}


// Efectos visuales
function damageEffect(target) {
    if (target === 'player') {
        addEffect('player', 'effect', 300);
        addEffect('player-floating-text', 'float-up', 1000);
    } else {
        addEffect('enemy', 'effect', 300);
        addEffect('enemy-floating-text', 'float-up', 1000);
    }
}

function deadEffect(target) {
    addEffect(target, 'dead', 0);
}

function showFinish(text){
    elFinishText.innerHTML = text;
}


// Funciones Repetidas
function toggleDisplay(el, show) {
    el.style.display = show ? 'block' : 'none';
}

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function addEffect(id, className, duration) {
    const el = document.getElementById(id);
    el.classList.add(className);
    if (duration > 0) {
        setTimeout(() => el.classList.remove(className), duration);
    }
}
