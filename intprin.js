let seconds = 0;

const intervalId = setInterval(() => {
    seconds++;
    console.log(`Han pasado ${seconds} segundos`);
}, 1000);

// Detener el intervalo después de 10 segundos (opcional)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Intervalo detenido.');
}, 10000);
