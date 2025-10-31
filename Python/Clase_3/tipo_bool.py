valor = 0
resultado = bool(valor)
print(f'Valor: {valor}, resultado: {resultado}')

valor = 1
resultado = bool(valor)
print(f'Valor: {valor}, resultado: {resultado}')

valor = ''
resultado = bool(valor)
print(f'Valor: "{valor}", resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'Valor: "{valor}", resultado: {resultado}')

valor = []
resultado = bool(valor)
print(f'Valor de una lista vacía: {valor}, resultado: {resultado}')

valor = [2, 3, 4]
resultado = bool(valor)
print(f'Valor de una lista con elementos: {valor}, resultado: {resultado}')

valor = ()
resultado = bool(valor)
print(f'Valor de una tupla vacía: {valor}, resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'Valor de una tupla con un elemento: {valor}, resultado: {resultado}')

valor = {}
resultado = bool(valor)
print(f'Valor de un diccionario vacío: {valor}, resultado: {resultado}')

valor = {'Nombre': 'Cuack', 'Apellido': 'Pato'}
resultado = bool(valor)
print(f'Valor de un diccionario con elementos: {valor}, resultado: {resultado}')

# Sentencias de control con bool
if (1,):
    print("La condición es verdadera")
else:
    print("La condición es falsa")

# Ciclos
variable = 17
while variable:
    print('Regresa verdadero')
    break
else:
    print("Regresa falso")
