// var, let, const

var nome = "João" // deprecated, evitar usar
let idade = 25 // variável que pode ser alterada
const PI = 3.14 // variável que NÃO pode ser alterada


// Data types

let texto = "Hello" // string
let numero = 42 // number
let decimal = 3.14 // number
let verdadeiro = true // boolean
let falso = false // boolean
let nulo = null // null (ausência intencional de valor)
let indefinido = undefined // undefined (valor não definido)


// Scope


function exemploEscopo() {

  let escopoFuncao = "scoped" // escopo de função

    if (true) {
        let blocoLet = "bloco" // escopo de bloco
        const blocoConst = "bloco" // escopo de bloco
    }

    // blocoLet não existe aqui (erro)
    // blocoConst não existe aqui (erro)
}

// a variável escopoFuncao não existe aqui
