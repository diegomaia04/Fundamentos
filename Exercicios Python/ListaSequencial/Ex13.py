# exercicio 13
## Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), 
# calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
# Solicitar o tamanho do arquivo em MB e a velocidade do link em Mbps
tamanho_arquivo_mb = float(input("Digite o tamanho do arquivo em MB: "))
velocidade_internet_mbps = float(input("Digite a velocidade do link de Internet em Mbps: "))

# Converter a velocidade de Mbps para MB por segundo
velocidade_em_mb_por_segundo = velocidade_internet_mbps / 8

# Calcular o tempo aproximado de download em segundos
tempo_download_segundos = tamanho_arquivo_mb / velocidade_em_mb_por_segundo

# Converter o tempo para minutos
tempo_download_minutos = tempo_download_segundos / 60

# Apresentar o resultado ao usuário
print(f"Tempo aproximado de download: {tempo_download_minutos:.2f} minutos")
