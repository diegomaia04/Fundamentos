# Modern JavaScript Tutorial

* Linguagem de alto nivel que oermite adiconar interatividade, dinamismo e lógica ás paginas web

* Criada em 1995 por Brendam Eich entanto traalhava na NetScape

* Lingaugem orientada a obejtos -> permite aos desenvolvedores criar e manipular objetos com propriedades e meteodos

* tipagem dinamica -> as variaves nao tem um tipo fixo e podem ser reatribuidas com varios tipos ao longo do tempo

* quando o navegador encontra um bloco de codigo JS, ele o interpreta e executa liha por linha

* para sua incorporação, utilizamos <script></script> no head ou dentro do body

###### Sintaxe

* Escopo: 
    * o escopo de uma variavel depende do bloco de coigo em que ela foi declarada

    * definimos um blocod e cdoigos a partir de uma abertura e fechamento de chave

    ```
    // ESCOPO GLOBAL
    {
        // primeiro bloco de codigo
        {
            // segundo bloco de codigo
        }
    }
    ```

the site request the ip adrress to web server (other computer) and this server response with the files of the ip adrress

 * o modo consoel do site é ua  ferramnetaa de desenvolvimento para programadores de site. nos podemos usar ela para testar o JavaScript, nos podemos printar valpres e basicmante mexer com o codigo js no console do site

###### Bibliotecas:

- bibliotecas importantes para o aprendizado do JS: 

  * Live Server
  * Material Icon Theme (opcional)

###### variaveis

as variaveis sõa armazenadas na memoria e podemos acessar depois no decorrer do codigo quando iremos utiliza-lá

* let: são somente aceesadas dentro do escopo de codigo onde foram declaradas, logo podendo declarar mais de uma vez um let com o mesmo nome em escopos de codigods diferentes sem a presenca de erro

* var: As variáveis declaradas com var têm escopo de função ou escopo global, mas não têm escopo de bloco (como for ou if). Isso significa que podem vazar do bloco onde foram definidas.

* const: são basicamente a mesma coisa do var porem não se pode atribuir um diferente valor aquele que foi declarado quando a const foi inicializada

###### JavaScript data types

* Number: 1, 2, 3, 100, 3.14

* String: "hello world" "mario@thenteninja.com.br podem ser definidas pra guadar numeros, informações, nomes e muita entre outras coisas"

* Boolean: true / false

* Null: define uma variabe esplicitamente sem nenhum valor
* undefined: Estruturas de dados complexas: como arrays, datas, etc
8Symbol: usado com objetos

obs: 
letras minusculas sõa maiores que letras masiculas

 ! diferença entre meteodo e função no JS:

 * função: é um bloco de codigo especifico que executa algum tipo de tarrefa dentro do codigo

 * meteodo: e uma função que é função que é associada com algum tipo de obejto

* operações:  +, -, *, /, **, % 

    *  ordem das operações: B I D M A S

- NA = nao: not a number ( não é um nuemro)

#### Control Flow

Usa conditional statemnetes para checar condicionais. Exemplo:

```
if ( condição true) {
    // bloco de codigo
}
```

* operadores logicos - OR (ou) || e AND(e) &&

* para verificar se uma variavel possui um caractere especifico (nomeVariavel.includes)

* replit: site que reposita codigos

* = : atribuição

* == : igualdad conteudo

 * === : igualdade de conteudo e tipo de dados
