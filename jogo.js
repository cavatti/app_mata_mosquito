

var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'noraml') {
    //1500
    criaMosquitoTempo === 1200
} else if(nivel === 'dificil') {
    //10000
    criaMosquitoTempo === 800
} else if (nivel === 'chucknorris') {
    //750
    criaMosquitoTempo === 500
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1
    
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(cria_mosquito)
        window.location.href = 'vitoria.html'

    }else {
    document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3) {

            window.location.href = 'fim_jogo.html'
        } else {
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

        vidas++
        }
    }

    var positionX = Math.floor(Math.random() * largura) -90
    var positionY = Math.floor(Math.random() * altura) -90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    // criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png' //ref a src do arquivo html linha 12
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}    
