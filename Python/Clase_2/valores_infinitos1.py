import math

# manejo de valores infinitos
infinito_positivo = float('inf')
print(f'Infinito positivo: {infinito_positivo}')
# si no importamos math, el resultado sera inf
print(f'Es infinito?: {math.isinf(infinito_positivo)}')


infinito_negativo = float('-inf')
print(f'Infinito negativo: {infinito_negativo}')
print(f'Es infinito?: {math.isinf(infinito_negativo)}')
