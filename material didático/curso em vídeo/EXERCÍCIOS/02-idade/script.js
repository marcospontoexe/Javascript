function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear ()  // recebe o ano configurado no sistema operacional
    var nasc = window.document.getElementById('anoNasc')
    var img = window.document.getElementById('imagem')

    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }
    else{
        var nascimento = Number(nasc.value)     //converte de string para numero
        var idade = ano - nascimento            // calcula a idade
        var sexo = document.getElementsByName('radSex')
        if(sexo[0].checked){        // caso o 1° checkbox (masculino) esteja selecionado
            var genero = 'homem'
        }
        else if(sexo[1].checked){        // caso o 2° checkbox (feminino) esteja selecionado
            var genero = 'mulher'
        }
        img.innerHTML = genero
    }

    
    
   

}