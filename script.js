function carregar() {
var msg = document.getElementById('msg')
var Data = document.getElementById('data')
var imagem = document.getElementById('imagem')
var data = new Date()
var diadaSemana = data.getDay()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 6 && hora < 13) {
    //bom dia
    imagem.src = 'foto-manha.png'
    document.body.style.background = '#d9c996'
 } else if (hora >= 13 && hora < 19) {
    //boa tarde
    imagem.src = 'fototarde.png'
    document.body.style.background = '#b37c54'
 } else if (hora >= 19 && hora <= 23) {
    //boa noite
    imagem.src = 'fototarde3.png'
    document.body.style.background = '#012c7d'
} else {
    //boa madrugada
    imagem.src = 'madrugada.png'
    document.body.style.background = '#404040'
}

switch(diadaSemana) {
    case 0:
        Data.innerHTML = `Tenha um ótimo Domingo!`
        break
    case 1:
        Data.innerHTML = 'Tenha uma ótima Segunda!'
        break
    case 2:
        Data.innerHTML = 'Tenha uma ótima Terça!'
        break
    case 3:
        Data.innerHTML = 'Tenha uma ótima Quarta!'
        break
    case 4:
        Data.innerHTML = 'Tenha uma ótima Quinta!'
        break
    case 5:
        Data.innerHTML = 'Tenha uma ótima Sexta!'
        break
    case 6:
        Data.innerHTML = 'Tenha um ótimo Sábado!'
        
}


}