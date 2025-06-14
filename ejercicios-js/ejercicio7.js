// Lista de palabras
const palabras = ["Hola", "Python", "Javascript", "OpenAI", "Inteligencia"];

// Función para invertir una palabra
const invertir = texto => texto.split("").reverse().join("");

// Selecciona y procesa una palabra al azar
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
const inversa = invertir(palabra);

// Muestra el resultado de forma clara y fluida
console.log(`🔄 Palabra original: ${palabra}`);
console.log(`↩️ Palabra invertida: ${inversa}`);