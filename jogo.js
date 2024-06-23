

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    var positionX = Math.floor(Math.random() * largura) -90
    var positionY = Math.floor(Math.random() * altura) -90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    // criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png' //ref a src do arquivo html linha 12
    mosquito.className = 'mosquito1'
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}