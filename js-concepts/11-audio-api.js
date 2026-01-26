// Creating Audio objects

let audio = new Audio("musica.mp3")


// play(), pause(), load()

audio.play() // toca
audio.pause() // pausa
audio.load() // recarrega o áudio


// Properties

audio.currentTime // tempo atual em segundos
audio.currentTime = 30 // pula pra 30 segundos

audio.duration // duração total em segundos

audio.volume // volume de 0 a 1
audio.volume = 0.5 // 50% do volume

audio.paused // true se pausado
audio.ended // true se terminou
audio.loop = true // repete automaticamente


// Audio events

audio.addEventListener("ended", function () {
    console.log("Música terminou")
})

audio.addEventListener("timeupdate", function () {
    console.log("Tempo atual:", audio.currentTime)
})

audio.addEventListener("loadedmetadata", function () {
    console.log("Duração:", audio.duration)
})

audio.addEventListener("play", function () {
    console.log("Começou a tocar")
})

audio.addEventListener("pause", function () {
    console.log("Pausou")
})
