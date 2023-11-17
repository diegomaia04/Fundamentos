##exercico 4
## isnira notas dos quatros bimestres e insira a media e

nota1 = float(input("o aluno na prova de ingles do primeiro bimestre tirou: "))
nota2 = float(input("o aluno na prova de ingles do segundo bimestre tirou: "))
nota3 = float(input("o aluno na prova de ingles do terceiro bimestre tirou: "))
nota4 = float(input("o aluno na prova de ingles do quarto bimestre tirou: "))

media = (nota1 + nota2 + nota3 + nota4) / 4
notaCorte = 6

if media < notaCorte:
    print("o aluno esta de recuperação na disciplina com a nota: ", + media)
else:
    print("o aluno foi aporvado na disciplina com a nota de: ", + media)


