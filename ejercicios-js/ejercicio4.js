// Función para generar un arreglo de números aleatorios
function generarNumerosAleatorios(cantidad, min, max) {
  return Array.from({ length: cantidad }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Función para sumar los elementos de un arreglo
function sumarNumeros(arr) {
  return arr.reduce((total, numero) => total + numero, 0);
}

// Programa principal
const numeros = generarNumerosAleatorios(10, 1, 50);
const suma = sumarNumeros(numeros);

// Mostrar resultados de forma clara y ordenada
console.log(`🔢 Números aleatorios: [${numeros.join(', ')}]`);
console.log(`➕ Suma total: ${suma}`);