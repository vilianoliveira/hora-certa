function carregar(){
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${horas}:${minutos}`

if (horas >= 0 && horas < 12) {
msg.innerHTML += '<br>Bom dia!'
img.src = 'imagens/manha.jpg'
}
else if(horas >=12 && horas < 18) {
msg.innerHTML += '<br>Boa tarde!'
img.src = 'imagens/tarde.jpg'
}
else {
msg.innerHTML += '<br>Boa noite'
img.src = 'imagens/noite.jpg'
}
}