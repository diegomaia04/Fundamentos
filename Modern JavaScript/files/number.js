let radius = 10;
const pi = 3.14;

console.log(radius, pi)

// operações +, -, *, /, **, % 

console.log(10 / 2)
// let result = radius % 3
// let result = pi * radius**2
let result = 5 * (10 - 3) ** 2

console.log(result)

// existem duas maneiras de mudar um valor numeirco, coco por exmeplo adi=cionar uma nuidad ed evalor7
let likes = 10;

likes = likes + 1;
likes++;
likes--;

let like = 10;

console.log(like)
console.log(like += 10)
console.log(like -= 2)
console.log(like *= 2)
console.log(like /= 2)

// concatenando duas variaveis de diferentes tipos

let frase = 'o blog tem ' + like + ' likes'
console.log(frase)


// outros tipo de concatenar tipos de variaveis
const title = "Dune 2: how big is fiction?"
const author = ' diego maia'
const enjoy = 30

// conncetation way
let resultado = 'the review called: ' + title + ' by' + author + ' has: ' + enjoy
console.log(resultado)

// template string way
let outroResultado = `the review called: ${title} by ${author} has: ${enjoy}`
console.log(outroResultado)

// creating html templantes
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> this blog has ${enjoy}</span>
`
