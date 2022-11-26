
function invasaoDomiciliar() {
    var nome = document.getElementById('nome')
    var endereco = document.getElementById('endereco')
    var hora = document.getElementById('hora')
    var cachorro = document.getElementById('cachorro')
    var camera = document.getElementById('camera')

    const para = document.createElement('tr')
    para.innerHTML = `<td>${nome.value}</td> <td>${endereco.value}</td> <td>${hora.value}</td> <td>${cachorro.value}</td> <td>${camera.value}</td>`
    document.getElementById('tabela').appendChild(para)
    

    console.log(nome.value + endereco.value + hora.value + cachorro.value + camera.value)
}