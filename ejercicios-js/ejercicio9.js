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
def encontrarMayorYMenor(numeros):
    if not isinstance(numeros, list) or len(numeros) == 0:
        return {"mayor": None, "menor": None}
    mayor = numeros[0]
    menor = numeros[0]
    for num in numeros:
        if not isinstance(num, (int, float)) or num != num:  # Verificar si es número y no es NaN
            return {"mayor": None, "menor": None}
        if num > mayor:
            mayor = num
        if num < menor:
            menor = num
    return {"mayor": mayor, "menor": menor}

# Generar una lista aleatoria de números para ejemplo
numeros_aleatorios = [12, 45, 7, 23, 89, 3, 76, 54, 34, 2]

# Encontrar el mayor y el menor
resultado = encontrarMayorYMenor(numeros_aleatorios)

# Mostrar los resultados
print(f"Números: {numeros_aleatorios}")
if resultado["mayor"] is not None and resultado["menor"] is not None:
    print(f"🔼 Mayor: {resultado['mayor']}")
    print(f"🔽 Menor: {resultado['menor']}")
else:
    print("No se pudo determinar el mayor y el menor. Asegúrate de ingresar números válidos.")