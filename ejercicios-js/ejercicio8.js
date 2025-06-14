// Genera un arreglo de 10 números aleatorios entre 1 y 50
const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);

// Calcula la suma de los números
const suma = numeros.reduce((total, numero) => total + numero, 0);

// Muestra los resultados de forma clara
console.log(`🔢 Números aleatorios: [${numeros.join(', ')}]`);
console.log(`➕ Suma total: ${suma}`);