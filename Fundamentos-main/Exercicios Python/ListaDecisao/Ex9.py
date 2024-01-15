## exercicio 09
## Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, 
# porém não há limites para a quantidade de carne por cliente. 
# Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. 
# Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, 
# contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
# File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
# Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
# Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg

carne = int(input("Selecione o tipo de carne que voce deseja:" + "\n" "1 - File Duplo" + "\n" "2 - Alcantra" +"\n" "3 - Picanha" + "\n"))
qnt = float(input("Agora digite a quantidade de kgs que voce deseja:" + "\n"))
pagamento = input("Forma de Pagamento:" + "\n" "Cartão" + "\n" "Dinheiro" +"\n" "Pix" + "\n")

if carne == 1:
    if qnt <= 4.90:
       resultado = qnt * 4.90
    else:
       resultado = qnt * 5.80
    
    print(f"Tipo da carne: File Duplo, Quantidade: {qnt}KGs, Preço Total: R${resultado}, Forma de pgamento: {pagamento}")
    desconto = resultado - (resultado * (5/100))
    print(f"Caso queira pagar com o cartão da loja, o preco saíra por: R${desconto}")

if carne == 2:
    if qnt <= 5.90:
       resultado = qnt * 5.90
    else:
       resultado = qnt * 6.80
    
    print(f"Tipo da carne: File Duplo, Quantidade: {qnt}KGs, Preço Total: R${resultado}, Forma de pgamento: {pagamento}")
    desconto = resultado - (resultado * (5/100))
    print(f"Caso queira pagar com o cartão da loja, o preco saíra por: R${desconto}")
    
if carne == 3:
    if qnt <= 6.90:
       resultado = qnt * 6.90
    else:
       resultado = qnt * 7.80
    
    print(f"Tipo da carne: File Duplo, Quantidade: {qnt}KGs, Preço Total: R${resultado}, Forma de pgamento: {pagamento}")
    desconto = resultado - (resultado * (5/100))
    print(f"Caso queira pagar com o cartão da loja, o preco saíra por: R${desconto}")
    
    if carne > 3 & carne <=0:
        print("Por favor, selecione uma opção corretamente")


