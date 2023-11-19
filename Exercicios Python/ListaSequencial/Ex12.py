## exercio 12
## Faça um programa para uma loja de tintas. 
# O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

area = float(input("Infome o tamanho, em metros quadrados, a ser pintados: " + "\n"))
qntadeTinta = (area // 3)
latas = qntadeTinta // 18
Total = latas * 80

if qntadeTinta > 54:
    print(" será necessario comprar: ", latas, "latas de tinta e isso custara: R$", Total)
else:
    print("sera necessario comprar apenas uma lata de tinta e você gastara: R$ 80,00")

