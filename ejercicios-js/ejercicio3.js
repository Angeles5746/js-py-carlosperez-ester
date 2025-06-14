const palabras = [
  "Aceituna", "Murciélago", "Educación", "Aeropuerto", "Otorrinolaringólogo",
  "Euforia", "Aceite", "Paleontólogo", "Arquitectura", "Hipopótamo"
];

// Elegir una palabra aleatoria
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

// Definir conjunto de vocales (con tildes incluidas)
const vocalesValidas = new Set("aeiouáéíóú");

// Extraer vocales únicas y contar repeticiones
const vocalesEncontradas = [];
const conteoVocales = {};

for (const letra of palabraAleatoria.toLowerCase()) {
  if (vocalesValidas.has(letra)) {
    vocalesEncontradas.push(letra);
    conteoVocales[letra] = (conteoVocales[letra] || 0) + 1;
  }
}

// Mostrar resultados mejorados
console.log("🔤 Palabra seleccionada:", palabraAleatoria);
console.log("🟠 Vocales encontradas:", vocalesEncontradas.join(", "));
console.log("🔢 Total de vocales:", vocalesEncontradas.length);
console.log("📊 Conteo por vocales:", conteoVocales);
console.log("🔎 Vocales únicas:", [...new Set(vocalesEncontradas)].join(", "));