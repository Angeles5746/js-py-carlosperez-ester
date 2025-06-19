// Generar un arreglo de 10 números aleatorios entre 1 y 100
const numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Separar en pares e impares usando reduce (más eficiente que filtrar dos veces)
const { pares, impares } = numerosAleatorios.reduce(
  (acc, num) => {
    num % 2 === 0 ? acc.pares.push(num) : acc.impares.push(num);
    return acc;
  },
  { pares: [], impares: [] }
);

// Mostrar los resultados
console.log(" Números generados:");
console.table(numerosAleatorios);

console.log(" Números pares:");
console.table(pares);

console.log(" Números impares:");
console.table(impares);