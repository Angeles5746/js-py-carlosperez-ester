import random

# Juego de adivinar el número
secreto = random.randint(1, 100)
intento = None

while intento != secreto:
    intento = random.randint(1, 100)  # Simula un intento aleatorio
    if intento < secreto:
        print(f"{intento} es menor")
    elif intento > secreto:
        print(f"{intento} es mayor")

print(f"¡Correcto! El número era {secreto}")