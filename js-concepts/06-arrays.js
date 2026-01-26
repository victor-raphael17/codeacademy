// Creating arrays

let frutas = ["maçã", "banana", "laranja"]
let numeros = [1, 2, 3, 4, 5]


// Accessing and modifying elements

frutas[0] // "maçã"
frutas[1] = "uva" // substitui "banana" por "uva"
frutas.length // 3


// push, pop, shift, unshift, splice

frutas.push("manga") // adiciona no final
frutas.pop() // remove do final
frutas.unshift("morango") // adiciona no início
frutas.shift() // remove do início
frutas.splice(1, 1) // remove 1 elemento a partir do índice 1
frutas.splice(1, 0, "kiwi") // adiciona "kiwi" no índice 1


// forEach

frutas.forEach(function (fruta) {
    console.log(fruta)
})


// map (retorna novo array)

let numeros2 = [1, 2, 3]
let dobrados = numeros2.map(function (num) {
    return num * 2
}) // [2, 4, 6]


// filter (retorna novo array filtrado)

let maioresQue2 = numeros2.filter(function (num) {
    return num > 2
}) // [3]


// find (retorna primeiro que satisfaz)

let encontrado = numeros2.find(function (num) {
    return num > 1
}) // 2


// reduce (reduz array a um valor)

let soma = numeros2.reduce(function (acumulador, num) {
    return acumulador + num
}, 0) // 6
