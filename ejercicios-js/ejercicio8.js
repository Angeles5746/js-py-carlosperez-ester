// Calcula el factorial de un número entero no negativo
function calcularFactorial(n) {
    if (n < 0) {
        return null; // El factorial no está definido para números negativos
    } else if (n === 0) {
        return 1; // El factorial de 0 es 1
    } else {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Genera un número aleatorio entre 1 y 10
const n = Math.floor(Math.random() * 10) + 1;

// Calcula el factorial
const resultado = calcularFactorial(n);

// Imprime el resultado
if (resultado !== null) {
    console.log(`${n}! = ${resultado}`);
} else {
    console.log("El factorial no está definido para números negativos.");
}