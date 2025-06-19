import random

def mostrar_tabla_multiplicar(numero: int, hasta: int = 10) -> None:
    """Imprime la tabla de multiplicar del número proporcionado hasta el valor indicado."""
    print(f"\n Tabla de multiplicar del {numero}\n" + "-" * 30)
    for i in range(1, hasta + 1):
        resultado = numero * i
        print(f"{numero:2} × {i:2} = {resultado:3}")
    print("-" * 30)

def main():
    numero = random.randint(1, 10)
    mostrar_tabla_multiplicar(numero)

    main()