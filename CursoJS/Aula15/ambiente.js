let num = [5,8,2,9,3]


num.push(1)
console.log(num)
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(18)
if (pos == -1) {

console.log(`O valor não foi encontrado`)

}else{
console.log(`O valor 8 esta na posição ${pos}`)
num.sort()}