function carregar() {

var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
//var hora = 15
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minuto} `
if (hora >=0 && hora <12){
 ///dia
img.src = 'fotomanha.png'
document.body.style.background = '#fdd46d'

} else if (hora >=12 && hora<18){
/// tarde
img.src = 'fototarde.png'

window.document.body.style.background = '#d6784f'
}else {
////noite
img.src = 'fotonoite.png'

document.body.style.background = '#28272d'

}

}