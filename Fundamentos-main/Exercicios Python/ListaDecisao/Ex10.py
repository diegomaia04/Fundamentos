## ex 10
## Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
## Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
## 326 = 3 centenas, 2 dezenas e 6 unidades
## 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

# Função para obter a quantidade de centenas, dezenas e unidades de um número
def obter_quantidades(numero):
    # Verifica se o número está dentro do intervalo permitido
    if 0 < numero < 1000:
        # Calcula as quantidades
        centenas = numero // 100
        dezenas = (numero % 100) // 10
        unidades = numero % 10

        # Constrói a string de saída considerando os termos no plural e a colocação do "e"
        resultado = f"{centenas} {'centena' if centenas == 1 else 'centenas'}, " if centenas > 0 else ""
        resultado += f"{dezenas} {'dezena' if dezenas == 1 else 'dezenas'}" + (" e " if unidades > 0 and (centenas > 0 or dezenas > 0) else "")
        resultado += f"{unidades} {'unidade' if unidades == 1 else 'unidades'}" if unidades > 0 else ""

        print(resultado)
    else:
        print("Número fora do intervalo permitido (0 < número < 1000)")

# Testando com os exemplos fornecidos
numeros_teste = [326, 300, 100, 320, 310, 305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7, 16]

for numero in numeros_teste:
    print(f"{numero} =", end=" ")
    obter_quantidades(numero)
