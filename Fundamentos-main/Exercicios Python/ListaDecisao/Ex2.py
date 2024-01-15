# exercio 2
## faca um programa que revele se a letra digita é uma vogal ou uma consosnate


letra = str(input("digite uma letra: "))
vogais = ["a","e","i","o","u"]

if letra in vogais :
    print("a letra digitada é vogal")
else:
    print("a letra digitada e uma consoante")

