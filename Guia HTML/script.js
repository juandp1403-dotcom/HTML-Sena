let puntaje = 0;
let clicksJarto = 0;
let clicksCorazon = 0;

document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
});

document.querySelector('.jarto button').addEventListener('click', function() {
    clicksJarto = clicksJarto + 1; 
    puntaje = puntaje + 1; 
    document.getElementById('puntaje').textContent = puntaje;
    document.querySelector('.contador-jarto').textContent = clicksJarto;
});

document.querySelector('.corazon button').addEventListener('click', function() {
    clicksCorazon = clicksCorazon + 1; 
    puntaje = puntaje + 1; 
    document.getElementById('puntaje').textContent = puntaje;
    document.querySelector('.contador-corazon').textContent = clicksCorazon;
});

// Funciones de la calculadora
function sumar() {
    let num1 = parseFloat(document.getElementById('numero1').value) || 0;
    let num2 = parseFloat(document.getElementById('numero2').value) || 0;
    let resultado = num1 + num2;
    document.getElementById('resultado-calculadora').textContent = resultado;
}

function restar() {
    let num1 = parseFloat(document.getElementById('numero1').value) || 0;
    let num2 = parseFloat(document.getElementById('numero2').value) || 0;
    let resultado = num1 - num2;
    document.getElementById('resultado-calculadora').textContent = resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('numero1').value) || 0;
    let num2 = parseFloat(document.getElementById('numero2').value) || 0;
    let resultado = num1 * num2;
    document.getElementById('resultado-calculadora').textContent = resultado;
}

function dividir() {
    let num1 = parseFloat(document.getElementById('numero1').value) || 0;
    let num2 = parseFloat(document.getElementById('numero2').value) || 0;
    if (num2 === 0) {
        document.getElementById('resultado-calculadora').textContent = 'Error: No se puede dividir por 0';
    } else {
        let resultado = num1 / num2;
        document.getElementById('resultado-calculadora').textContent = resultado;
    }
}