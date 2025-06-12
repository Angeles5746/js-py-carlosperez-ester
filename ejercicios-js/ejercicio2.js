const secreto = Math.floor(Math.random() * 100) + 1;
let intento;
do {
  intento = Math.floor(Math.random() * 100) + 1;
  if (intento < secreto) {
    console.log(`${intento} es menor ❌`);
  } else if (intento > secreto) {
    console.log(`${intento} es mayor ❌`);
  }
} while (intento !== secreto);
console.log(`¡Correcto! El número era ${secreto} ✅`);