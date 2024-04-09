// consulta de documentos

const para =  document.querySelector('div.error')
console.log(para);

// const paras = document.querySelectorAll('p')
// const errors = document.querySelectorAll('.error')

// console.log(paras, errors)

// pegar elemnetos plea ID

const title = document.getElementById('page-title') // pega somente um elemento
console.log(title)

// pegar elementos pela nome das classes

const foF = document.getElementsByClassName('error') // pega mais de um elemento, mutpiplos elelemtnso
console.log(foF)
console.log(foF[0])

//pegar elementos pelo nome da tag

const paragrafo = document.getElementsByTagName('p') // pega mais de um elemento, mutpiplos elelemtnso
console.log(paragrafo)
console.log(paragrafo[1])

// ___________________________________________________

const paragraph = document.querySelector('p')
paragraph.innerText = 'isso e um teste'   // sobrescerver outros ellementos do documento

const paras = document.querySelectorAll('p')

paras.forEach(texto =>{
    console.log(texto.innerText)
    texto.innerText += "novo conteudo"
})

const content = document.querySelector(".content")
console.log(content.innerHTML)
content.innerHTML += '<h2>isso e uma mudanca e tanto ein kkk</h2>'

const people = ['anakin', 'paul', 'ryan']

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
})

const link = document.querySelector('a')

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com.br')
link.innerText = "link para o youtube, ok?"

const mssg = document.querySelector('p')

console.log(mssg.getAttribute('class'))
mssg.setAttribute('class', 'sucesso')
// mssg.setAttribute('style', 'color: red')

// ___________________________________________________

const titulo = document.querySelector('h1')

console.log(title.style);
console.log(title.style.color)

titulo.style.margin = '50px'