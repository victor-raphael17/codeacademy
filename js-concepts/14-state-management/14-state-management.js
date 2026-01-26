// What is state
// Estado = dados que mudam ao longo do tempo na aplicação


// Managing state with variables/objects

let state = {
    contador: 0,
    usuario: null,
    items: []
}


// Updating the UI when state changes

function renderContador() {
    document.querySelector("#contador").textContent = state.contador
}

function incrementar() {
    state.contador++
    renderContador()
}

function decrementar() {
    state.contador--
    renderContador()
}


// Simple patterns for organizing state

// Padrão 1: Estado centralizado com funções de update

let appState = {
    todos: [],
    filtro: "todos"
}

function addTodo(texto) {
    appState.todos.push({ texto, completo: false })
    renderTodos()
}

function toggleTodo(index) {
    appState.todos[index].completo = !appState.todos[index].completo
    renderTodos()
}

function renderTodos() {
    let lista = document.querySelector("#lista")
    lista.innerHTML = appState.todos
        .map((todo) => `<li>${todo.texto}</li>`)
        .join("")
}


// Padrão 2: setState similar ao React

function setState(novoState) {
    Object.assign(appState, novoState)
    render()
}

function render() {
    // atualiza toda a UI
}

// uso:
setState({ filtro: "completos" })
