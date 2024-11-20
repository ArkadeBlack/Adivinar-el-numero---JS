
let numeroAzar = Math.floor(Math.random()*100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let imagenAdivinanza = document.getElementById('imagenAdivinanza')
let intento = document.getElementById('intento')
let intentos = 0


//para el boton de Check
function checkResultado(params) {
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos ++
    intento.textContent = intentos
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Ese no es un número entre 1 y 100, ke no sabi conta o khe?";
        mensaje.style.color = 'black';
        imagenAdivinanza.src = "/assets/g3.png";
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicidadeeees, Adivinaste. Bien hecho makina!";
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        imagenAdivinanza.src = "/assets/g2.gif";
        return
    }

    if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "El número debe ser más alto";
        imagenAdivinanza.src = "/assets/gatito.png";
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = "El número debe ser más bajo";
        imagenAdivinanza.src = "/assets/gatito.png";
        mensaje.style.color = 'blue'
    }
}