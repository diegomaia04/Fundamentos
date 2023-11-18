#exercio 11

# Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês,
# sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
# salário bruto.
# quanto pagou ao INSS.
# quanto pagou ao sindicato.
# o salário líquido.
# calcule os descontos e o salário líquido, conforme a tabela abaixo:
# + Salário Bruto : R$
# - IR (11%) : R$
# - INSS (8%) : R$
# - Sindicato ( 5%) : R$
#  = Salário Liquido : R$ ##

## ganho mensal bruto
valor = float(input("indique onuemro de quanto voce ganha por hora: "))
hora = int(input(" indiquequantas horas voce trabalha por mes: "))
salario = hora * valor

 ## valor pago para o IR (11%)
valor_IR = salario * (11/100)

## valor pago para o Inss (8%)
valor_INSS = salario * (8/100)

# valor pago para o sindicato (5%)
valor_Sindicato = salario * (5/100)

## valor mensal liquido mensal
salario_Mensal = salario- (salario * (24/100))

print("the numbers of this problem are: ","\n",
    "o valor ganho em salrio bruto é de : ", salario,"\n",
    "o valor pago para o IR é de: ", valor_IR,"\n",
    "o valor pago para o INSS é de: ", valor_INSS,"\n",
    "o valor pago para o sindicato é de: ", valor_Sindicato,"\n",
    "o valor ganho mensalmente é de: ", salario_Mensal)