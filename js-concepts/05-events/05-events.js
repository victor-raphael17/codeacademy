// addEventListener

let botao = document.querySelector("#meuBotao")

botao.addEventListener("click", function () {
    console.log("Botão clicado!")
})


// Common events

// click - clique do mouse
// submit - envio de formulário
// input - digitação em input
// keydown - tecla pressionada
// load - página carregada

document.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada:", event.key)
})


// The event object

botao.addEventListener("click", function (event) {
    console.log("event.target:", event.target)
    console.log("event.type:", event.type)
    // event.preventDefault() // previne comportamento padrão
})


// Event propagation

// Bubbling (padrão): evento sobe do filho pro pai
// Capturing: evento desce do pai pro filho

let pai = document.querySelector(".pai")
let filho = document.querySelector(".filho")

pai.addEventListener("click", function () {
    console.log("Pai clicado")
})

filho.addEventListener("click", function (event) {
    console.log("Filho clicado")
    event.stopPropagation() // para a propagação
})
