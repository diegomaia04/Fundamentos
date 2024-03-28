// Control Flow

// for loops
console.log("for")
for (let i = 0; i <= 5; i++) {
    console.log("in loop", i)
}

console.log("fim do loop")

const names = ['shaun', 'mario', 'luigo']

// nessa efor em espeficio utilizamos o "names.lenght" quando não sabermos o numero exato de elementos.
for (let x = 0; x < names.length; x++) {
    // pegar elementos dentro de um array
    console.log("in loop, again", names[x])
    let html = `<div>${names[x]}}</div>`
    console.log(html)
}

const scores = [50, 25, 0, 30, 100, 20, 10]

// breake and continue for
for (let f = 0; f < scores.length; f++) {

    if (scores[f] === 0) {
        continue;
    }

    console.log('sua pontução :', scores[f])

    // um jjeito de interrpoer o loop for enquanto ele ainda não terminou a sua condição
    if (scores[f] === 100) {
        console.log('parabens ai ganhou')
        break;
    }
}

// while loops 
console.log("__________________________________________________________")
console.log("while")

let loop = 0
while (loop < names.length) {
    // o while vai repetir o bloco de codigo abaixo
    console.log(names[loop])
    loop++;
}

let w = 0

do {

    // do (faca) enquanto (while) for w <=3, no final do codigo o do sempre vai verificar o while para ver se a condição e verdadeira
    console.log("o valor é", w)
    w++;
}
while (w < 3)

// if statements

console.log("__________________________________________________________")
console.log("if")

const age = 20

if (age > 18) {
    console.log("voce possui mais de 18 anos")
}

const nomes = ['ryan', 'paul', 'anakin']

if (nomes.length >= 3) {
    console.log(nomes)
    console.log("literalmente eu")
}

const password = 'pass'

if (password.length >= 12 && password.includes('@')) {
    console.log("essa senha é muito forte")
} else if (password.length >= 8 || password.includes("@") && password.includes('!')) {
    console.log('essa senha é grande o bastante')
} else {
    console.log('essa senha não é grande o bastante')
}

// logical NOT
// o valor abaixo continuara sendo o mesmo, mesmo que o mudemos posteriormente
let user = false

// o "!" tem o função de inverter o valor seguinte
if (!user) {
    console.log(true)
}
if (user) {
    console.log(false)
}

// switch statemnets
const grade = "D";

switch(grade){
    case 'A':
        console.log("voce tirou um A")
        break
    case 'B':
        console.log("voce tirou um B")
        break
    case 'C':
        console.log("voce tirou um C")
        break
    case 'D':
        console.log("voce tirou um D")
        break
    case 'F':
        console.log("voce tirou um F")
        break
    default:
        console.log('Error')
        
}

// o codigo acima repdoruz a exata funccionalidade do if abaixo
// a diferencai e a sua pratica e ter o mesmo valor de retorno com menos linhas de codigo e menos trabalho

//using if stamentes

// if (grade === "A") {

// } else if (grade === "B") {

// } else if (grade === "C") {

// } else if (grade === "D") {

// } else if (grade === "E") {

// } else {
    
// }
