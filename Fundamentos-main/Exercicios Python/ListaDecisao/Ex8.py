# exercio 08
## Faça um Programa que leia um número e exiba o dia correspondente da semana.
# (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

print("Segue tabela para o dias da semana:" + "\n" "1 - Domingo" + "\n" "2 - Segunda" +"\n" "3 - Terça" +"\n" "4 - Quarta" + "\n" "5 - Quinta" + "\n" "6 - Sexta" + "\n" "7 - Sabado" )
dia = int(input("digite o numero correspondente ao dia da semana: ")) 

if dia == 1:
    print("Domingo")
elif dia == 2:
    print("Segunda-feira")
elif dia == 3:
    print("Terca-feira")
elif dia == 4:
    print("Quarta-Feira")
elif dia == 5:
    print("Quinta-Feira")
elif dia == 6:
    print("Sexta-Feira")
elif dia == 7:
    print("Sabado")
else:
    print(" Por-Favor, verifique a tabela dos dias e digite novamente")