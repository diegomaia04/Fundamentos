#exercio 09
## Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
### o produto do dobro do primeiro com metade do segundo .
#### a soma do triplo do primeiro com o terceiro.
##### o terceiro elevado ao cubo.

n1 = int(input("digite um nuemro inteiro: "))
n2 = int(input("digite um nuemro inteiro: "))
n3 = float(input("digite um nuemro inteiro: "))

r1 = (n1 * 2) * (n2 / 2)
r2 = (n1 *3) + n3
r3 = (n3**3)

print("o valores requisitados são: " , "\n" , r1 ,"\n",  r2 ,"\n", r3)
