# exercicio 10
## Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
### Para homens: (72.7*h) - 58
### Para mulheres: (62.1*h) - 44.7

h = float(input("por favor, informe sua altura em metros: "))
m = (72.7*h) - 58
f = (62.1*h) - 44.7


opcao = -1

while opcao != 0:
    opcao = int(input("[1] Masculino \n[2] Feminino\n[0] Sair \n: "))

    if opcao == 1:
        print("o seu peso ideial será de: ", + m)
        break
    elif opcao == 2:
        print("o seu peso ideal sera de: ", + f)
        break
else:
    print("Obrigado por usar nosso sistema bancário, até logo!")
    
