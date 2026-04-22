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