// setItem (salvar)

localStorage.setItem("nome", "João")
localStorage.setItem("idade", "25")


// getItem (recuperar)

let nome = localStorage.getItem("nome") // "João"
let idade = localStorage.getItem("idade") // "25" (sempre string)


// removeItem (remover um)

localStorage.removeItem("idade")


// clear (limpar tudo)

localStorage.clear()


// Storing complex data (with JSON)

let usuario = {
    nome: "Maria",
    idade: 30,
    hobbies: ["ler", "nadar"]
}

// Salvar objeto
localStorage.setItem("usuario", JSON.stringify(usuario))

// Recuperar objeto
let usuarioSalvo = JSON.parse(localStorage.getItem("usuario"))


// Storage limits: ~5MB por domínio
// Persistence: dados persistem mesmo fechando o navegador
