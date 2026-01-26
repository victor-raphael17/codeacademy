// for loop

for (let i = 0; i < 5; i++) {
    console.log(i) // 0, 1, 2, 3, 4
}


// while

let contador = 0

while (contador < 3) {
    console.log(contador)
    contador++
}


// do...while (executa pelo menos uma vez)

let num = 0

do {
    console.log(num)
    num++
} while (num < 3)


// for...of (para arrays)

let frutas = ["maçã", "banana", "laranja"]

for (let fruta of frutas) {
    console.log(fruta)
}


// for...in (para objetos)

let pessoa = { nome: "João", idade: 25 }

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


// break e continue

for (let i = 0; i < 10; i++) {
    if (i === 3) continue // pula o 3
    if (i === 7) break // para no 7
    console.log(i) // 0, 1, 2, 4, 5, 6
}
