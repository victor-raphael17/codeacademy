// getElementById

let titulo = document.getElementById("titulo")
console.log("getElementById:", titulo.textContent)


// querySelector (retorna o primeiro)

let botao = document.querySelector(".btn")
let paragrafo = document.querySelector("p")
console.log("querySelector:", paragrafo.textContent)


// querySelectorAll (retorna todos)

let items = document.querySelectorAll(".item")
console.log("querySelectorAll:", items.length, "items")


// innerText vs innerHTML vs textContent

let div = document.querySelector("#minhaDiv")

// div.innerText = "Texto visível" // só texto visível
// div.innerHTML = "<strong>Texto</strong>" // interpreta HTML
// div.textContent = "Todo texto" // todo texto, inclui hidden


// Changing styles

let elemento = document.querySelector(".card")

elemento.style.color = "white"
elemento.style.backgroundColor = "blue"
elemento.style.padding = "20px"


// Changing classes

elemento.classList.add("ativo")
// elemento.classList.remove("ativo")
// elemento.classList.toggle("ativo") // adiciona se não tem, remove se tem
console.log("classList.contains('ativo'):", elemento.classList.contains("ativo"))
