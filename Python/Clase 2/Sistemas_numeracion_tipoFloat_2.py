# Continuamos con el anterior

# Profundizando en el tipo float
a = 3.0
print(f'a= {a:.2f}')

# Constructor de tipo float -> puede recibir int y str
b = float(10) # le pasamos un tipo entero (int)
print(f'b= {b:.2f}')

# Notacion exponencial (valores positivos o negativos)
c = 3e50
print(f'c= {c:.2f}')

d = 3e-5
print(f'd= {d:.5f}')

# Cualquier calculo que incluye un float, resultado será float
e = 4.0 + 5
print(e)
print(type(e))