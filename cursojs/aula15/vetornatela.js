let valores = [3,9,10,8,5,2,1]
/*for(let pos =0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// pode ser feito desta maneira:
// maneira mais simples:

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

