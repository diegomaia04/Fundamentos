# exercio 3 e 4
## como oambos execiios eram parecidos decicdir juntar eles em uma codigo so
## Faça um Programa que leia três números e mostre o maior deles.
## Faça um Programa que leia três números e mostre o maior e o menor deles.

num1 = int(input("digite um valor de um numero: "))
num2 = int(input("digite um valor de um numero: "))
num3 = int(input("digite um valor de um numero: "))

maiorNumero = max(num1, num2, num3)
menorNumero = min(num1, num2, num3)

# Exibe o maior e o menor número
print(f"O maior número é: {maiorNumero}")
print(f"O menor número é: {menorNumero}")