// JSON structure rules
// - Chaves devem ser strings com aspas duplas
// - Valores: string, number, boolean, null, array, object
// - Não permite: functions, undefined, comments


// JSON.stringify() - objeto para string

let usuario = {
    nome: "João",
    idade: 25,
    ativo: true
}

let jsonString = JSON.stringify(usuario)
// '{"nome":"João","idade":25,"ativo":true}'


// JSON.parse() - string para objeto

let texto = '{"nome":"Maria","idade":30}'

let objeto = JSON.parse(texto)
// { nome: "Maria", idade: 30 }


// Uso comum: salvar no localStorage

let dados = { lista: [1, 2, 3] }
localStorage.setItem("dados", JSON.stringify(dados))

let dadosRecuperados = JSON.parse(localStorage.getItem("dados"))


// Uso comum: enviar/receber de APIs

fetch("/api/usuarios")
    .then((response) => response.json()) // converte resposta JSON
    .then((data) => console.log(data))
