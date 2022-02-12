function tabuada(){
    /* A variável 'let' é destruida no momento em que a função 'contador()' é finalizado */
    let numero = window.document.getElementById('txtnum')
    let tabuada = window.document.getElementById('tabuada')
    let msg = window.document.getElementById('lista')

    tabuada.innerHTML = ''                  // limpa o select
    if(numero.value.length == 0 || numero.value == 0){   
        window.alert('[ERRO] Dados incorretos!')
        
        msg.text = `Impossível calcular!`          // adiciona uma string dentro da 'option' criada (recisa ser com crase)
        msg.value = `tab0`                            //cria um 'value' (usado em php) para cada 'option' de maneira dinâmica
        tabuada.appendChild(msg)                       // mostra a string dentro da option
    } 
    else{
        let num = Number(numero.value)
        
        for(var c = 0; c <=10; c++){
            let item = document.createElement('option')     // cria um elmento 'option' dentro do 'selecte' de maneira dinâmica
            item.text = `${num} X ${c} = ${num*c}`          // adiciona uma string dentro da 'option' criada (recisa ser com crase)
            item.value = `tab${c+1}`                            //cria um 'value' (usado em php) para cada 'option' de maneira dinâmica
            tabuada.appendChild(item)                       // mostra a string dentro da option    
        }
  
    } 
 
}