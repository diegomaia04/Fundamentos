# exercicio 5
## Faça um Programa que pergunte em que turno você estuda. 
# Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 7
# Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

periodo = str(input("digite 'm' para matutino \ndigite 'v' para verpertino \ndigite n para noturno \nQual seu periodo de estudo?: "))
manha = ["m"]
tarde = ["v"]
noite = ["n"]

if periodo in manha:
    print("Bom dia!!!!!")
elif periodo in tarde:
    print("Boa tarde!!!!!")
elif periodo in noite:
    print("Boa noite!!")
else:
    print("periodo invalido")
                   