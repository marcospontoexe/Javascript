function contador(){
    var inicio = Number(window.document.getElementById('inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var contador = Number(window.document.getElementById('passo').value)
    var msg = window.document.getElementById('resposta')

    msg.innerHTML = 'Contando:'
    for(var c = inicio; c <= fim; c+=contador){
        msg.innerHTML += `${c}  `
    }   
    
   

}