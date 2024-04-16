# Excel: Intermediario

## Modulo 01

### Planilhas 

- Neste Curso, voce conhecera novos elemntos e mais funções disponiveis, que podem tornar sua planilha ainda mais produtiva e completa

- Serão abordados temas sobre uso de funções, inserção de imagens e outros elementos gráficos que facilitarão suas atividades de análise e tomada de decisões. Você também aprenderá a vincular pastas de trabalho, criar fórmulas, criar e editar regras de formatação condicional, criar uma pasta modelo para usos posterior , etc

- Toda vez que voce criarr um modelo e salva-lo, sera gerada a extensão .xltx, que constitui uma forma de indetifica-lo

- è Possivel vincular pastas de trabalho, quando uma depende dos dados da outra para executar uma acão


- Dica: Dependendo da definição na opção Estilo de formatação, as visualizações na janela NOva regra de Formatação serão diferentes

    * Em todos os botoes de formatção condiconal que selecionarmos, teremos acesso à opção Mais regras, que tambem ´possibilita editar a formatação

    - Se voce digitar um uncio valor numeroc e arrasar a alça de preeenchimento, ele sera copiado.Basta tocar na seta Mais, do botao opções de autopreenchimento e selecionar Preencher Serie

- Voce podera iniciar uma sequencia numerica por qualuqer valor, Para que o excel realize um preeenchimentod seqeuncial, voce deve informar qual o incremneto ele deve seguir. Por exemplo, de 1 em 1, 0.5 em 0.5, etc

## Modulo 02

Como vimos no curso basico, o exxcel possui varias funções, ou seja, formulas pré-gravadas que facilitam a execução de procedimentos complexox com nuemros, datas, horarios, texto, etc

Lelmbre- se de que todas as funções têm uma sintaxe a ser obedecida, isto é, a forma como devem ser digitadas ou inseridas

             = função(argumento1; argumento2; argumento final)


- = função: nome da função a ser utilizada. Por exemplo; = SOMA
- ():  todas as funções tem que estar entre parenteses
- argumentos: os argumentos inidcam os dados a serem utilizados parao cálculo da função


Função SE():

Retorna uma determinada reposta, caso a condição tenha um valor lógico vervadeiro; ou outra reposta, caso seja falso

* Sintaxe SE:

              =SE(teste_logico;valor_se_verdadeiro;valor_se_falso)

* Sintaxe: E 
              
               (condição1; ccondição2; condição3; condição4;)

     * Utilizada em conjuto com a função SE(), permite usar até 255 criteiros, que retornarão um valor verdadeiro, se todos eles forem satisfeitos. No entanto, caso um deles não seja satisfeito, o resultado será falso
     
     * para exemplificar o uso da função SE() junto com a função E() fizemos o caluclo do novo salario em duas etapas. No entanto, o novo salario poderia ser calculado em uma unica formula

* Sintaxe OU:

utilizada em conjuto com a função SE, permite criar uma cadeia de condições, com uma unica diferenca em relação à função E: basta que uma confição seja satisfeita, para que o resultado seja vervadeiro

                   =SE(OU(argumentos) argumentos)

* Função Localizar()

     * Retorna o numero referente à poisção do cactere numa seqeuncia de cacteres de testo, começando com num_incial, que é determinado pelo usuario

* Função ESQUERDA()

    * extrai de um conjuto de cacrteres todos os que estão À esquerda do valor indicado

        Uma vez que os cacteres a serem extraidos são em numeros diferente, em virtude do tamanho do codigo e do nome de cada pais, a função Localizar().


* Função NUM.CARACT(texto)

     * Uma vez que o texto é selecionado, a função retornará o numero de cacrteres dele. o espaço contabilizado por esta função

* DATA()

    * Imagine a seguinte situação: " o primeiro pagamento será daqui a 120 dias. Como calcular a data do vencimento

    * No excel 2013, isso e=é muito simples: basta somarmos a data atual o valor 120, pois, para cada data inseriada em uma planilha, um numero serial é atribual a ela. Po exemplo, A data 05/03/2016 é equivalene ao numero seria 42434. Para vizualizar esse numero, altere o formato da data pra ageral

    * Dica; use como separador de data hifen "-" ou barra "/" e como separador de hora dois pontos (:) Utilizar a virgula apos os segundos, caso precise digitar decimos, centesimos ou milesimos de segundo, como em 13:05:20,40

* Função ABS()

    * Embora não faça parte da categoria funções de data e hora, essa função sera vista aqui, ja que e utilizada para afzer esse tipo de calculo. COm ela nunca se obtem um resultado negativo, ou seja, o resultado e sempre o valor absoluto de um numero o que vale dizer um nuemro sem sinal


* Função HOje():

   Essa função pode ser empregada quando queremos calcular a diferença entre a data atual e outra data

* Função()

    Assim como as datas, as hroas são represnetadas por um nuemro serial. O execel 20116 armazena a hora como sendo uma fração do dia, isto é, um nuemro entre zero e um para horas entre zero e 24

    Esse numero refere-se ao horario divido por 2. Por exemplo, 6horas são 0.25(6 divido por 24) portanto, 6 horas soa um quarto do dia

## MOdulo 3

* Trabalhando com elementos graficos

- Embora o excel 2016 não tenha como função pricnipal a utilização de efeitos gaficos, é possivel inseri-los nas planilhas. há dois tipos básicos de elementos graficos que podem ser usadsi para aprimorar as planulhas: imagens e obejtos de desenho

- As imagens podem ser inseridas ou cpiadas de diversas fontes, as mais utilizadas são as  digitalizadas e as de sites

- Voce pode atribuir a imagnes bordas quadradas, curvas ou coloridas, aplicar um sombreado ou brilho, cortá-la ou redimnesiona-lá e assim por diante

        - No grupo ajustar é possivel alterar cor, brilho e constraste da imagem. Voce pode, tambem, compactar uma imgaem, redefini-laou ainda subustitui-la sem perder as alterações ja aplicadas a ela


- Inserindo fromas:

    - Formas são elementos graficos que podem ser inseridos na planulha com a finalidade de auxiliar a organização de informações e textos

    - entre as formas encontramos as seguintes:

        - Linhas
        - Retangulos
        - formas basicas
        - setas largas
        - formas de equação
        - fluxograma, estrelas e faixas 
        - textos explicatios

Como vimos anteriormente, a cada tipo de objeto gráfico utilizado, a guia FORMATAR disponibiliza grupos e opções diferentes.

Inserir Formas: permite inserir; selecionar outra forma, mantendo a formatação da atual; editar a forma ponto a ponto; ou, ainda, inserir ou editar um texto para essa forma.

Estilos de Forma: possibilita modificar o estilo de visualização, o preenchimento e o contorno da forma, bem como aplicar efeitos a forma.

Estilos de WordArt: contêm as opções utilizadas para formatação do texto inserido na forma.

Organizar e Tamanho: têm as mesmas funções descritas anteriormente.
CONTINUAR
