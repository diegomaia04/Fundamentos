// expressão de umma função
const speak = function () {
    console.log('good day')
}

greet()
greet()
greet()

// forma de chamar uma função
speak()
speak()

// declaração de uma função
function greet() {
    console.log('hello there')
}

// argumentos e paramentros

//as variaveis ciradas dentro da funçaõ não serão vistas fora da função.
const talk = function (nome, time) {
    console.log(`good ${time} ${nome}`)
}

talk('paul', 'morning')
talk('anakin', ' night')

// retornando valores

// retornando os valores da função
const calcArea = function (radius) {
    let area = 3.14 * radius ** 2
    return area;
    // outro jeito de fazer a mesma coisa a cima
    // return area = 3.14 * radius**2
}

const area = calcArea(5)
console.log('area é de: ', area)

// arrow function 

// outra mnaeira de delcrar uma função
const areaCal = (radius) => {
    return 3.14 * radius ** 2
}

const result = areaCal(5)
console.log('area é de, novamnete, : ', result)

// mais exeplos de  arrow function

// const hello = function () {
//     return 'hello world'
// };

// const resultado = hello()
// console.log(resultado)

// const ola = () => 'ola, mundo'

// const igual = ola()
// console.log(igual)

// uma função masi complexa

const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
}

// arrow function

const arrow = (produtos, taxa) =>{
    let total = 0
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i] + produtos[i] * taxa
    }
    return total
}

console.log(bill([10, 15, 30], 0.2))
console.log(arrow([10, 15, 30], 0.2))

// função e meteodos
// const Nome = 'shaun'

// // função

// const greetOne = () => 'hello'

// let resultOne = greet()
// console.log(resultOne)

// // meteodo

// let resulttwo = Nome.toUpperCase
// console.log(resulttwo)


// callbacks & fireach

// funçao que recebe um valor
const myFunc = (callbackFunc) =>{
    //do something
    let value = 50
    callbackFunc(value)
}

// função que retorna o valor recebedido pela função acima
myFunc(function(value){
    // do something
    console.log(value)
})

let pessoas = ["mario", "luigi", "ryu", "shaun","chun-li"]

const logPerson = (person, index) => {
    //console.log('something')
    console.log(`${index} - hello, ${person}`)
}

pessoas.forEach(logPerson)

// get a reference to the "ul"
const ul = document.querySelector('.people')
const people = ["mario", "luigi", "ryu", "shaun","chun-li"]

let html = ``

people.forEach(function(person){
// cretae html templante
html += `<li style = "color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html
