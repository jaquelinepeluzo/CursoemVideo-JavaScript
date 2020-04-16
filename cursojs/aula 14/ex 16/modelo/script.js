function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('Erro, faltam dados')
    } else {
       res.innerHTML = 'Contando: '
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p <= 0 ) {
           window.alert ('Passo inválido, considerando PASSO = 1')
           p = 1
       }
       if (i < f){
           for(var c = i; c <= f; c += p) {
               res.innerHTML += ` ${c} \u{1F449}`
            }     
       } else {
           for(var c = i; c >=f; c -=p){
               res.innerHTML += ` ${c} \u{1F449}`
           }
       }
       res.innerHTML += `\u{1F3C1}`
    }
}

// emoji do site: unicode.org/emoji/charts/full-emoji-list.html
// tem que tirar o U+ da frente, e colocar \u{}