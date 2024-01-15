# exercicio 4
## Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

produto_1 = float(input("digite um valor de um produto: "))
produto_2 = float(input("digite um valor do segundo produto: "))
produto_3 = float(input("digite um valor do terceiro produto "))

menor = min(produto_1, produto_2, produto_3)

print("compre o produto que custa: ", "R$",menor)