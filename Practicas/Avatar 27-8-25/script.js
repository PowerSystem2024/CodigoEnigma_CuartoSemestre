var selectedCharacter = null;
var rulesVisible = false;

const attacks = ['Puño', 'Patada', 'Barrida'];
const characters = ['Zuko', 'Katara', 'Aang', 'Toph'];
const beats = {'Puño': 'Barrida', 'Patada': 'Puño', 'Barrida': 'Patada'};
const imgByCharacter = {
    'Zuko': 'https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png',
    'Katara': 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Katara-3-Cropped.jpg',
    'Aang': 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg',
    'Toph': 'https://i.pinimg.com/736x/4e/00/11/4e00111c746f99e1a41374cf8ebb77c7.jpg'
}

attacks.forEach(attack => {
    var button = document.createElement('button');
    button.id = 'boton-' + attack;
    button.textContent = attack;
    button.onclick = () => attackFunction(attack);

    document.getElementById('attacks-container').appendChild(button);
});

// Funciones de Botones

function showRules() {
    rulesVisible = !rulesVisible;

    if(rulesVisible) {
        document.getElementById('show-rules').innerText = "Ocultar Reglas";
        toggleDisplay('rules-container', true);
    } else {
        document.getElementById('show-rules').innerText = "Mostrar Reglas";
        toggleDisplay('rules-container', false);
    }
}

function selectCharacter() {
    const radios = document.getElementsByName('character');
    var hasOption = false;
    for (const radio of radios) {
        if (radio.checked) {
            const enemyCharacter = randomItem(characters);
            hasOption = true;
            selectedCharacter = radio.value;
            toggleDisplay('attack-section', true);
            document.getElementById('player').src = imgByCharacter[selectedCharacter];
            document.getElementById('enemy').src = imgByCharacter[enemyCharacter];
            document.getElementById('versus-text').innerText = `Seleccionaste a ${selectedCharacter} y tu enemigo a ${enemyCharacter}`;
        }
    }
    
    if(!hasOption) {
        alert(`Seleccione un Personaje`);
    } else {
        toggleDisplay('char-selector', false);
    }
}

function attackFunction(playerAttack) {
    const enemyAttack = randomItem(attacks);

    if (
        (beats[playerAttack] === enemyAttack)
    ) {
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
    var lifePointsContainer = document.getElementById(target + '-lp');
    const lp = parseInt(lifePointsContainer.innerText) - 1;
    lifePointsContainer.innerText = lp;
    
    if(lp == 0) { 
        target == 'enemy' ? showFinish(`Ganaste!`) : showFinish(`Perdiste...`);
        toggleDisplay('attacks-container', false);
        toggleDisplay('attack-title', false);
        setTimeout(function() {
            document.getElementById('finish').style.display = 'flex';
            document.getElementById('finish').classList.add('fade-in')
        }, 1200);
        deadEffect(target);
    }
}

function newAction(resultMessage, color) {
    var action = document.createElement('div');
    action.innerHTML = resultMessage;
    action.style.color = color || 'inherit';

    var resultContainer = document.getElementById('battle-result');
    resultContainer.insertBefore(action, resultContainer.firstChild);
}

// Efectos visuales

function damageEffect(target) {
  const img = document.getElementById(target);
  img.classList.add('effect');
  setTimeout(() => img.classList.remove('effect'), 300);
  
  const msg = document.getElementById(target+'-floating-text');
  msg.classList.add('float-up');
  setTimeout(() => msg.classList.remove('float-up'), 1000);
}

function damageEffect(target) {
    addEffect(target, 'effect', 300);
    addEffect(target+'-floating-text', 'float-up', 1000);
}

function deadEffect(target) {
    addEffect(target, 'dead', 0);
}

function showFinish(text){
    const finish = document.getElementById('finish-text');
    finish.innerHTML = text;
}

// Funciones Repetidas

function toggleDisplay(id, show) {
    document.getElementById(id).style.display = show ? 'block' : 'none';
}

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function addEffect(target, className, duration) {
    const el = document.getElementById(target);
    el.classList.add(className);
    if (duration > 0) {
        setTimeout(() => el.classList.remove(className), duration);
    }
}