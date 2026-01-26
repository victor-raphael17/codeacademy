// Making GET requests

fetch("https://api.exemplo.com/usuarios")
    .then((response) => response.json())
    .then((data) => console.log(data))


// com async/await

async function getUsuarios() {
    let response = await fetch("https://api.exemplo.com/usuarios")
    let data = await response.json()
    return data
}


// Handling the Response object

async function exemploResponse() {
    let response = await fetch("https://api.exemplo.com/usuarios")

    console.log(response.ok) // true se status 200-299
    console.log(response.status) // 200, 404, 500, etc
}


// Making POST requests

async function criarUsuario() {
    let response = await fetch("https://api.exemplo.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: "João",
            email: "joao@email.com"
        })
    })

    let data = await response.json()
    return data
}


// Headers and options

async function exemploCompleto() {
    let response = await fetch("https://api.exemplo.com/dados", {
        method: "POST", // GET, POST, PUT, DELETE
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer token123"
        },
        body: JSON.stringify({ chave: "valor" })
    })

    if (!response.ok) {
        throw new Error("Erro na requisição")
    }

    return await response.json()
}
