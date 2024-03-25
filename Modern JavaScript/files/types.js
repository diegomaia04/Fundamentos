let age;
console.log(age, age + 3, `the age is ${age}`)
// o valor acima dara undefined pois quando iniamos a variavel não podemos nheum tipo d evalo a ele

let idade = null;
console.log(idade, idade + 3, `the age is ${idade}`)
// atribuimos o valor null para a variavel acima

// booleans & compariosons
console.log(true, false, "true", "false") // não são a mesma, um e do tipo string outro e do tipo boolean


//methods can return boolenars
let names = [ 'mario', 'luigi', 'toad']
let email = "luigi@thenetninja.com.br"

let nomes = names.includes(30); // false
console.log(nomes)

let resultTrue = email.includes('@') // true
console.log(resultTrue)

let resultFalse = email.includes('!') // false
console.log(resultFalse)

// comparison operators
let valor = 25;

console.log(age == 25 ) // true
console.log(age == 30 ) // false
console.log(age != 25 ) // o sinal de exclamação diz "não" // true
console.log(age > 20 ) // true
console.log(age < 20 ) // false

let nome = "diego"

console.log(nome == "diego") // true
console.log(nome == "Diego") //false
console.log(nome > 'Diego') // letras minusculas sõa maiores que letras masiculas // true

// loose comparation( tipos diferentes podem iguaisw)
console.log(age == 25 ) // true
console.log(age == '25' ) // true, pois o js nessa condição
console.log(age != 25) // false
console.log(age != '25') // false


// strict comparasion (tipos diferentes não podem ser iguias)transforma o 25 em int
console.log(age === 25) // true
console.log(age === '25') // false aqui temos uma comparação mais loiteralmente entre os tipos dos dois obejtos, logo dara falso, pois nesse caso  o js nao convertara enhum obejto
console.log(age !== 25) // false
console.log(age !== '25') // true

// type onversation
let score = '100';

//convertendo um tipo de string para um tipo number
score = Number(score)
console.log(score + 1)
console.log(typeof score)

let teste = String(13)
console.log(teste, typeof teste)
