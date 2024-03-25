let age = 22 // forma de declarar um avriavel
let year = 2024

alert(year)

age = 23 // podemos atribuir um outro valor ao let;.
console.log(age)

const points = 100
// points = 50 // um erro, poois esta tentando atribuir outro valor a constante
console.log(points)

var score = 75;
console.log(score) 

// strings
alert("hello world") //não é necessario usar o ; mais.
console.log("hello world") // exibir uma mensagem no console do nosso site

let email = "maiadiego290@gmail.com.br"
console.log(email)

//strings concatenation
// => concatenation: juntar duas strings existentes ou mais coisa
let firstName = 'Brandon'
let lastName = 'Sanderson'

let fullName = (firstName + ' ' + lastName)
console.log(fullName)

//getting characteres
// => pegando caracteres de acordo com seu espaço de meoria alocada, por isso que começamos no zero.
console.log(fullName[0])
console.log(fullName[1])
console.log(fullName[2])
console.log(fullName[3])
console.log(fullName[4])
console.log(fullName[5])
console.log(fullName[6])

//string lenght
// => tamanho da string que foi selecionada
console.log(fullName.length)

// string methods
// => não alteram o valor ou ne em nada o obejto original
console.log(fullName.toUpperCase())

let result = fullName.toLowerCase()
console.log(result)

// obejto usado nas requisições a seguir let email = "maiadiego290@gmail.com.br"

let index = email.indexOf('@') // achar o index de um certo carctere dentro de uma string, index = posição
console.log(index)

// let resultado = email.lastIndexOf('a')
// let resultad = email.slice(4,10) //vai comecar escrreveendo da posicaçõ de meoria inicial "0" e terminar no "10"
// let resultado = email.substring(4,10) // vai comecar a escrever no 4 e terminar no 14
let resultado = email.replace('m', 'M')

console.log(resultado)
