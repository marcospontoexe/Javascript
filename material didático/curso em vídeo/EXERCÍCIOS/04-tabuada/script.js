function contador(){
    /* A variável 'let' é destruida no momento em que a função 'contador()' é finalizado */
    let inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var contador = window.document.getElementById('txtpasso')
    var msg = window.document.getElementById('resposta')

    if(fim.value.length == 0 || contador.value.length == 0){   
        window.alert('[ERRO] Dados incorretos!')
        msg.innerHTML = 'Impossível contar!'
    } 
    else{
        msg.innerHTML = 'Contando: <br>'
        
        if(contador.value <= 0){
            window.alert('[PASO INVÁLIDO] Considerando passo = 1!')
            contador.value = 1

        }
        if(Number(fim.value) > Number(inicio.value)){       // contagem crescente
            for(var c = Number(inicio.value); c <= Number(fim.value); c+=Number(contador.value)){
                msg.innerHTML += `\u{1F449} ${c} `        // U+1F601 é a formatação original, para para html
            }
        }
        else{                                           //contagem regressiva
            for(var c = Number(inicio.value); c <= Number(fim.value); c-=Number(contador.value)){
                msg.innerHTML += `\u{1F449} ${c} `        // U+1F601 é a formatação original, para para html
            }
        }

        msg.innerHTML += `<br>\u{1F3c1}`         // o camando '\u{}' só funciona quando usado entre crases
    } 

    
    


}