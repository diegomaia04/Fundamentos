import math

# Solicitar o tamanho da área a ser pintada em metros quadrados
tamanho_area = float(input("Digite o tamanho da área a ser pintada em metros quadrados: "))

# Calcular a quantidade de litros de tinta necessários
litros_tinta = tamanho_area / 3

# Calcular a quantidade de latas necessárias (considerando latas de 18 litros)
latas_tinta = math.ceil(litros_tinta / 18)

# Calcular o preço total
preco_total = latas_tinta * 80

# Apresentar os resultados ao usuário
print(f"Quantidade de latas de tinta necessárias: {latas_tinta}")
print(f"Preço total a ser pago: R$ {preco_total:.2f}")
