// obejtos literais

// const blogs = [
//     { title: 'star wars', rating: 4.4 },
//     { title: 'ashoka', rating: 3.5 }
// ];

//console.log(blogs)

// criação de objeto
let user = {
    name: "anakin",
    age: 22,
    email: 'anakin@email.com',
    location: 'naboo',
    blogs: [
        { title: 'star wars', rating: 4.4 },
        { title: 'ashoka', rating: 3.5 }
    ],
    login: function () {
        console.log('o usuario foi logado')
    },
    logout: function () {
        console.log('o usuario foi deslogado')
    },
    logBlogs: function () {
        // console.log(this)=> se refre ao objeto user
        console.log('O usuario escreveu os seguintes blogs: ')
        this.blogs.forEach(blogs => {
            console.log(blogs.title, blogs.rating)
        })
    }
}

console.log(user)

// acessar informações dentro do obejto
console.log(user.name)
console.log(user['name']) // um jeito diferente de fazer a mesma coisa da linha acima
console.log(user.age)
console.log(user['email'])

// alterando um valor de fora do obejto
user.age = 47
console.log(user.age)

user['name'] = 'anakin skywalker'

console.log(typeof user)

// meteodos do obejto
user.login();
user.logout();
user.logBlogs();

// math obejcts

console.log(Math)
console.log(Map.PI)
console.log(Map.E)

const area = 7.7
console.log(Math.round(area)) // 8
console.log(Math.floor(area)) // 7
console.log(Math.ceil(area)) // 8


// numeros aleatorios

const random = Math.random();

console.log(random) // nuemro aleatorio entre 0 e 1
console.log(Math.round(random * 100)) // numero aleoario entre 1 e 100

// valores primitivos

let scoreOne = 50;
let scoreTwo = scoreOne

console.log(`score One ${scoreOne}, scoreTwo ${scoreTwo}`)

scoreOne = 100
console.log(`score One ${scoreOne}, scoreTwo ${scoreTwo}`)

// valores referenciados

const userOne = { name: "diego", age: 19}
const userTwo = userOne;

console.log(userOne , userTwo)

userOne.age = 20
console.log(userOne , userTwo)
