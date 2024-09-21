// Verificamos que se hayan pasado dos argumentos
if (process.argv.length !== 4) {
    console.error("Por favor, ingrese exactamente dos números como argumentos.");
    process.exit(1);
}

// Obtenemos los argumentos de la línea de comandos
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

// Validamos que los argumentos sean números
if (isNaN(num1) || isNaN(num2)) {
    console.error("Ambos argumentos deben ser números válidos.");
    process.exit(1);
}

// Realizamos las operaciones
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : "Error: No se puede dividir por cero.";

// Imprimimos los resultados
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
