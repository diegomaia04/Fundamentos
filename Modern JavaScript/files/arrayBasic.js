// arrays possuiem o mesmo sitema de meoria alocada , entaio coemcamos a contar do nuemro zero
let times = ['São Paulo', 'Santos', 'Gremio']

console.log(times)
console.log(times[0])
console.log(times[2])

times[1] = 'vasco'
console.log(times[1])

let ages = [20,25,30,35]
console.log(ages[2])

console.log(times.length) // tmanho do array selecionado
console.log(ages.length) // tmanho do array selecionado

// arrats mteodos

let result = times.join('-') // esse metodo junta todos os elementos do array com a string que foi escrita dentro do parenteses
console.log(result)

let resultado = times.indexOf('São Paulo') // esse meteodo busca o nuemro de meoria alocada e seu index do obejto dentreo do array
console.log(resultado)

let resultad = times.concat(['Cruzeiro', 'Bangu']) // esse metedeo concaquetena dois diferentes arrays
console.log(resultad)

let push = times.push('Juventus') // esse meteodo adiciona um elemnto novo no array ja criado
console.log(times)
