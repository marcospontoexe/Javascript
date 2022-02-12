function contador(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var contador = window.document.getElementById('passo')
    var msg = window.document.getElementById('resposta')


    if(fim.value.length == 0 || ){   
        msg.innerHTML += 'Contando:'
        for(var c = Number(inicio.value); c <= Number(fim.value); c+=Number(contador.value)){
            msg.innerHTML += `${c}  `
        }
    } 

    
    


}