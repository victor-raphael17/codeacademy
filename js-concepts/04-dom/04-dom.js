// Helper para mostrar resultados na página

let output = document.getElementById("output")

function mostrar(texto) {
    output.innerHTML += `<p>${texto}</p>`
}


// getElementById

let titulo = document.getElementById("titulo")
mostrar(`getElementById: ${titulo.textContent}`)


// querySelector (retorna o primeiro)

let botao = document.querySelector(".btn")
let paragrafo = document.querySelector("p")
mostrar(`querySelector: ${paragrafo.textContent}`)


// querySelectorAll (retorna todos)

let items = document.querySelectorAll(".item")
mostrar(`querySelectorAll: ${items.length} items`)


// innerText vs innerHTML vs textContent

let div = document.querySelector("#minhaDiv")

// div.innerText = "Texto visível" // só texto visível
// div.textContent = "Todo texto" // todo texto, inclui hidden
// div.innerHTML = "<strong>Texto</strong>" // interpreta HTML


// Changing styles

let elemento = document.querySelector(".card")

elemento.style.color = "white"
elemento.style.backgroundColor = "blue"
elemento.style.padding = "20px"


// Changing classes

elemento.classList.add("ativo")
// elemento.classList.remove("ativo")
// elemento.classList.toggle("ativo") // adiciona se não tem, remove se tem
mostrar(`classList.contains('ativo'): ${elemento.classList.contains("ativo")}`)


// Toggle efeitos

let efeitosAtivos = true
let btnToggle = document.getElementById("toggleEfeitos")

btnToggle.addEventListener("click", () => {
    efeitosAtivos = !efeitosAtivos

    if (efeitosAtivos) {
        elemento.style.color = "white"
        elemento.style.backgroundColor = "blue"
        elemento.style.padding = "20px"
        elemento.classList.add("ativo")
        btnToggle.textContent = "Desligar Efeitos"
    } else {
        elemento.style.color = ""
        elemento.style.backgroundColor = ""
        elemento.style.padding = ""
        elemento.classList.remove("ativo")
        btnToggle.textContent = "Ligar Efeitos"
    }
})
