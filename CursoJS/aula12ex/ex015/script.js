function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
       window.alert('[ERRO]')


    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute ('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if ( idade >=0 && idade <12 ){
            img.setAttribute('src', 'criancaM.png')
               //criança


           }else if (idade < 18){
           //jovem
           img.setAttribute('src', 'jovemM.png')
           }else if (idade < 50){
               //adulto
               img.setAttribute('src', 'adultoM.png')

           }else{
               //idoso
               img.setAttribute('src', 'idosoM.png')
           }
       } else if (fsex[1].checked){
           genero = 'Mulher'
           if ( idade >=0 && idade <12 ){
            //criança
            img.setAttribute('src', 'criancaF.png')


            }else if (idade < 18){
            //jovem
            img.setAttribute('src', 'jovemF.png')
           }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultoF.png')


            }else{
            //idoso
            img.setAttribute('src', 'idosoF.png')
        }
       } 
       res.style.textAlign = 'center'     
       res.innerHTML = `Detectamos ${genero} de ${idade} anos`
       res.appendChild(img)
    }

}