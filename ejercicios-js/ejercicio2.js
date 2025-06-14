// Juego de adivinar el número
let intento;
const secreto = Math.floor(Math.random() * 100) + 1; // Generar el número secreto solo una vez

do {
  intento = Math.floor(Math.random() * 100) + 1; // Simula un intento aleatorio
  if (intento < secreto) {
    console.log(`${intento} es menor ❌`);
  } else if (intento > secreto) {
    console.log(`${intento} es mayor ❌`);
  }
} while (intento !== secreto);

console.log(`¡Correcto! El número era ${secreto} ✅`);