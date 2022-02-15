var lista = []
var numero = window.document.getElementById('txtnum')
var visor = window.document.getElementById('visor')
var msg = window.document.getElementById('msg')

function adicionar(){
    var num = Number(numero.value)
    
    if(numero.value.length == 0){                           // verifica se foi digitado algo no input:number
        window.alert('[ERRO] Nenhum valor preenchido!')
        
    } 
    else if(num <= 0 || num >100){                  // verifica se o numero digitado está entre 1 e 100
        window.alert('[ERRO] Número fora da faixa de valores!')
    }
    else if(lista.indexOf(num) != -1){              //verifica se o número digitado já está na lista
        window.alert(`O número ${num} já foi adicionado à lista, digite outro valor!`) 
    }
    else{
        lista.push(num)
        let item = document.createElement('option')     // cria um elmento 'option' dentro do 'select' de maneira dinâmica
        item.text += `Valor ${num} adicionado!`          // adiciona uma string dentro da 'option' criada (recisa ser com crase)
        item.value = `valor${lista.length}`                            //cria um 'value' (usado em php) para cada 'option' de maneira dinâmica
        visor.appendChild(item)                       // mostra a string dentro da option 

        msg.innerText = ''

    } 
    numero.value = ''          //o input:number recebe umas string vazia
    numero.focus()             //adiciona a string vazia onde a seleção do mouse está no momento
        
    

}

function concluir(){
    if(lista.length == 0){
        window.alert('[Erro!] Adicione um valor à lista de números antes de concluir!')

    }
    else{        
        var tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0        
        for(var i in lista){
            if(lista[i] > maior){
                maior = lista[i]
            }
            if(lista[i] < menor){
                menor = lista[i]
            }
            soma += lista[i]
        }
        media = soma/tot

        msg.innerHTML += `A lista contém ${tot} elementos!<br>`
        msg.innerHTML += `O maior número da lista é o ${maior}.<br>`
        msg.innerHTML += `O menor número da lista é o ${menor}.<br>` 
        msg.innerHTML += `A soma dos números da lista é ${soma}<br>` 
        msg.innerHTML += `A média dos números da lista é ${media}<br>`

    }
}