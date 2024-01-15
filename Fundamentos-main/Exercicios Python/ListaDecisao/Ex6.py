# exercio 6
## Faça um Programa que leia três números e mostre o maior deles.

num1 = int(input("Digite um nuemro inteiro: "))
num2 = int(input("Digite um nuemro inteiro: "))
num3 = int(input("Digite um nuemro inteiro: "))

if num1 > num2 & num1 > num3:
    print(" o maiior entre os numeros é o:", num1)
elif num2 > num1 & num2 > num3:
    print(" o maior entre os numeros é o:", num2)
else:
    print(" o maior entre os numeros é o:", num3)