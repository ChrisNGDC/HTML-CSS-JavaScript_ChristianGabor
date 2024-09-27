let randNumber = Math.max(1, Math.floor(Math.random() * 10));
let input = document.querySelector('#inputNumber');
let btnGuess = document.querySelector('#btnAdivinar');
let messages = document.querySelector('#messages');
let btnReinicio = document.querySelector('#btnReinicio');

function adivinar() {
    if (input.value <= 10 && input.value >= 1) {
        if (input.value == randNumber) {
            messages.style.padding = '1rem .5rem 0';
            changeMessagesText('CORRECTO', '#00FF00').then(res => {
                btnGuess.disabled = true;
                btnReinicio.style.visibility = 'visible';
            })
        } else if (input.value > randNumber) {
            messages.style.padding = '1rem .5rem 0';
            changeMessagesText('Mayor que el numero', '#FFFFFF');
        } else {
            messages.style.padding = '1rem .5rem 0';
            changeMessagesText('Menor que el numero', '#FFFFFF');
        }
    } else {
        changeMessagesText('El número debe estar entre 1 y 10', '#FF0000');
    }
}

function changeMessagesText(text, color) {
    messages.innerText = '⟳';
    messages.style.color = '#FFFFFF';
    btnGuess.disabled = true;
    return new Promise(resolve =>
        setTimeout(() => {
            messages.innerText = text;
            messages.style.color = color;
            btnGuess.disabled = false;
            resolve(1);
        }, 2000))
}

function reset() {
    input.value = '';
    btnReinicio.style.visibility = 'hidden';
    changeMessagesText('', '#FFFFFF');
    btnGuess.disabled = false;
    randNumber = Math.max(1, Math.floor(Math.random() * 10));
}