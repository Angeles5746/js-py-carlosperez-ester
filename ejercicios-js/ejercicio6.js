import random

def calcular_factorial(n):
    """
    Calcula el factorial de un número entero no negativo.

    Args:
        n (int): Un número entero no negativo.

    Returns:
        int or None: El factorial de n, o None si n es negativo.
    """
    if n < 0:
        return None
    factorial = 1
    for i in range(2, n + 1):
        factorial *= i
    return factorial

def main():
    # Genera un número aleatorio entre 1 y 10
    n = random.randint(1, 10)
    # Calcula el factorial
    resultado = calcular_factorial(n)
    # Imprime el resultado
    if resultado is not None:
        print(f"{n}! = {resultado}")
    else:
        print("El factorial no está definido para números negativos.")