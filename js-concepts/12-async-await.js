// Synchronous vs asynchronous
// Síncrono: executa linha por linha, bloqueia
// Assíncrono: não bloqueia, continua executando


// Promises basics

let promessa = new Promise(function (resolve, reject) {
    let sucesso = true
    if (sucesso) {
        resolve("Deu certo!")
    } else {
        reject("Deu erro!")
    }
})

promessa
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro))


// async functions

async function buscarDados() {
    return "dados"
}

buscarDados().then((dados) => console.log(dados))


// await keyword

async function exemploAwait() {
    let resposta = await fetch("https://api.exemplo.com/dados")
    let dados = await resposta.json()
    console.log(dados)
}


// try/catch for error handling

async function buscarComTratamento() {
    try {
        let resposta = await fetch("https://api.exemplo.com/dados")
        let dados = await resposta.json()
        return dados
    } catch (erro) {
        console.log("Erro:", erro)
    }
}
