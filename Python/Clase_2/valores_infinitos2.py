import math
from decimal import Decimal
# manejo de valores infinitos
# continuamos

# Modulo math
infinito_positivo = math.inf
print(f'Infinito positivo: {infinito_positivo}')
print(f'Es infinito?: {math.isinf(infinito_positivo)}')

infinito_negativo = -math.inf
print(f'Infinito negativo: {infinito_negativo}')
print(f'Es infinito?: {math.isinf(infinito_negativo)}')

# Modulo Decimal
infinito_positivo_decimal = Decimal('Infinity')
print(f'Infinito positivo: {infinito_positivo_decimal}')
print(f'Es infinito?: {math.isinf(infinito_positivo_decimal)}')

infinito_negativo_decimal = Decimal('-Infinity')
print(f'Infinito negativo: {infinito_negativo_decimal}')
print(f'Es infinito?: {math.isinf(infinito_negativo_decimal)}')