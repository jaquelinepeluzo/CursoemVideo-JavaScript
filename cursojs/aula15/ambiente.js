let num = [10,20,30]
num[3]=6
num.push(9)  // adicionou o 9
num.length
num.sort() // coloca em ordem crescente
console.log(`o vetor tem ${num.length} posições e possui esses números: ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(30)
if (pos == -1) {
    console.log(`O número não existe na minha lista`)
   
}else {
    console.log(`O valor 30 está na posição ${pos}`)
}
