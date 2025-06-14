def encontrar_mayor_y_menor(numeros):
    """Encuentra el número mayor y el número menor en una lista.

    Args:
        numeros: Una lista de números.

    Returns:
        Una tupla con el número mayor y el número menor, o (None, None) si la lista está vacía o contiene elementos no numéricos.
    """
    if not numeros:
        return None, None  # Manejar el caso de lista vacía

    try:
        mayor = max(numeros)
        menor = min(numeros)
        return mayor, menor
    except TypeError:
        return None, None  # Manejar el caso de elementos no numéricos

def obtener_lista_numeros():
    """Obtiene una lista de números del usuario."""
    while True:
        entrada = input("Ingresa una lista de números separados por espacios (ej. 1 2 3): ")
        if not entrada:
            print("Por favor, ingresa al menos un número.")
            continue

        try:
            numeros = [float(num) for num in entrada.split()]  # Convertir a números (float para mayor flexibilidad)
            return numeros
        except ValueError:
            print("Por favor, ingresa números válidos.")

def main():
    """Función principal que obtiene la lista, encuentra el mayor y el menor, y muestra los resultados."""
    # Obtener la lista de números del usuario
    numeros = obtener_lista_numeros()

    # Encontrar el mayor y el menor
    mayor, menor = encontrar_mayor_y_menor(numeros)

    # Mostrar los resultados
    if mayor is not None and menor is not None:
        print(f"Números: {numeros}")
        print(f"Mayor: {mayor}")
        print(f"Menor: {menor}")
    else:
        print("No se pudo determinar el mayor y el menor.  Asegúrate de ingresar números válidos.")

# Ejecutar la función principal
if __name__ == "__main__":
    main()

# Función para encontrar el número mayor y menor en un arreglo
function encontrarMayorYMenor(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return { mayor: null, menor: null };
  }
  let mayor = numeros[0];
  let menor = numeros[0];
  for (const num of numeros) {
    if (typeof num !== "number" || isNaN(num)) {
      return { mayor: null, menor: null };
    }
    if (num > mayor) mayor = num;
    if (num < menor) menor = num;
  }
  return { mayor, menor };
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa una lista de números separados por coma: ', input => {
  const numeros = input.split(',').map(num => parseFloat(num.trim()));
  const { mayor, menor } = encontrarMayorYMenor(numeros);

  if (mayor !== null && menor !== null) {
    console.log(`🔼 Mayor: ${mayor}`);
    console.log(`🔽 Menor: ${menor}`);
  } else {
    console.log("No se pudo determinar el mayor y el menor. Asegúrate de ingresar solo números válidos.");
  }
  readline.close();
});