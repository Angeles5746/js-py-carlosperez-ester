// Generar un número aleatorio entre 1 y 10
const numero = Math.floor(Math.random() * 10) + 1;

console.log(`📘 Tabla de multiplicar del ${numero}`);
console.log("=".repeat(30));

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i.toString().padStart(2, ' ')} = ${resultado.toString().padStart(3, ' ')}`);
}

console.log("=".repeat(30));