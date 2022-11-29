var botao = document.getElementById('click')

function invasaoDomiciliar() {
    var nome = document.getElementById('nome')
    var endereco = document.getElementById('endereco')
    var hora = document.getElementById('hora')
    var cachorro = document.getElementById('cachorro')
    var camera = document.getElementById('camera')

    const para = document.createElement('tr')
    para.innerHTML = `<td>${nome.value}</td> <td>${endereco.value}</td> <td>${hora.value}</td> <td>${cachorro.value}</td> <td>${camera.value}</td>`
    document.getElementById('tabela').appendChild(para)
    
}

function mudaVel(vel,nivel) {
    botao.style.animation = `${vel}s nivel${nivel} infinite alternate linear`
    botao.innerText = 'Clica em mim'
    botao.style.backgroundColor = 'rgb(53, 92, 199)'
}

function clica() {
    botao.innerText = 'Parabens!'
    botao.style.animation = '0'
    botao.style.backgroundColor = 'green'
}