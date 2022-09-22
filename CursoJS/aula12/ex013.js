var agora = new Date()
var diaSem = agora.getDay()


/* 
0-Domingo
1-seg
2-terc
3-quart
4-quint
5-sext
6-sab

*/
switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
        break
    default:
        console.log(`[ERRO] dia invalido`)    
        break
}