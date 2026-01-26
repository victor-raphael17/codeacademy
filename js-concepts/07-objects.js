// Creating objects (literal notation)

let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
}


// Accessing properties

pessoa.nome // "João" (dot notation)
pessoa["idade"] // 25 (bracket notation)

let chave = "cidade"
pessoa[chave] // "São Paulo" (bracket com variável)


// Adding/modifying/deleting properties

pessoa.email = "joao@email.com" // adiciona
pessoa.idade = 26 // modifica
delete pessoa.cidade // deleta


// Object destructuring

let { nome, idade } = pessoa

let { nome: nomeUsuario, idade: idadeUsuario } = pessoa // renomeando

let { nome: n, ...resto } = pessoa // resto fica com o que sobrou


// Object methods

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ligar: function () {
        console.log("Carro ligado")
    },
    info() {
        console.log(this.marca + " " + this.modelo)
    }
}

carro.ligar()
carro.info()
