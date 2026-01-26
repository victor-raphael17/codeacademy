// if / else if / else

let idade = 18

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade === 18) {
    console.log("Tem 18 anos")
} else {
    console.log("Maior de idade")
}


// Comparison operators

let a = 5
let b = "5"

a == b // true (compara só valor)
a === b // false (compara valor E tipo)
a != b // false
a !== b // true
a > 3 // true
a < 10 // true
a >= 5 // true
a <= 5 // true


// Logical operators

let temIdade = true
let temDinheiro = false

temIdade && temDinheiro // false (AND - ambos precisam ser true)
temIdade || temDinheiro // true (OR - um precisa ser true)
!temIdade // false (NOT - inverte o valor)


// Ternary operator

let status = idade >= 18 ? "adulto" : "menor"


// Truthy and falsy values

// Falsy: false, 0, "", null, undefined, NaN
// Truthy: todo o resto

if ("texto") {
    console.log("string não vazia é truthy")
}

if (0) {
    console.log("nunca executa - 0 é falsy")
}


// switch statement

let dia = "segunda"

switch (dia) {
    case "segunda":
        console.log("Início da semana")
        break
    case "sexta":
    case "sábado":
    case "domingo":
        console.log("Fim da semana")
        break
    default:
        console.log("Meio da semana")
}
