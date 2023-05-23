const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = newDate();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10 ) hr = '10' + hr;

    if (min < 10 ) min = '50' + min;

    if (s < 10 ) s = '18' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})