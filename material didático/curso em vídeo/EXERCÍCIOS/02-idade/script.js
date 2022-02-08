function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear ()  // recebe o ano configurado no sistema operacional
    var nasc = window.document.getElementById('anoNasc')
    var txt = window.document.getElementById('msg')
    

    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }
    else{
        var nascimento = Number(nasc.value)     //converte de string para numero
        var idade = ano - nascimento            // calcula a idade
        var sexo = document.getElementsByName('radSex')
        var img = document.createElement('img')  // criando uma tag '<img>' dinamicamente
        img.setAttribute('id', 'foto')              // dando uma id (foto) para a tag 'img'
        txt.style.textAlign = 'center'      //configuração de estilo

        if(sexo[0].checked){        // caso o 1° checkbox (masculino) esteja selecionado
            var genero = 'homem'
            if(idade <= 3){
                //txt.innerHTML = `bebê!`
                img.setAttribute('src', 'imagens/bebeM.jpg')    // atribui uma imagem para a tag <img>
            }
            else if(idade <= 7){
                //txt.innerHTML = `criança!`
                img.setAttribute('src', 'imagens/criancaM.jpg') 
            }
            else if(idade <= 15){
                //txt.innerHTML = `adolescente!`
                img.setAttribute('src', 'imagens/adolescenteM.jpg') 
            }
            else if(idade <= 20){
                //txt.innerHTML = `jovem!`
                img.setAttribute('src', 'imagens/jovemM.jpg') 
            }
            else if(idade <= 50){
                //txt.innerHTML = `adulto!`
                img.setAttribute('src', 'imagens/adultoM.jpg') 
            }
            else{
                //txt.innerHTML = `idoso!`
                img.setAttribute('src', 'imagens/idosoM.jpg') 
            }
        }
        else if(sexo[1].checked){        // caso o 2° checkbox (feminino) esteja selecionado
            var genero = 'mulher'
            if(idade <= 3){
                //txt.innerHTML = `bebê!`
                img.setAttribute('src', 'imagens/bebeF.jpg')    // atribui uma imagem para a tag <img>
            }
            else if(idade <= 7){
                //txt.innerHTML = `criança!`
                img.setAttribute('src', 'imagens/criancaF.jpg') 
            }
            else if(idade <= 15){
                //txt.innerHTML = `adolescente!`
                img.setAttribute('src', 'imagens/adolescenteF.jpg') 
            }
            else if(idade <= 20){
                //txt.innerHTML = `jovem!`
                img.setAttribute('src', 'imagens/jovemF.jpg') 
            }
            else if(idade <= 50){
                //txt.innerHTML = `adulto!`
                img.setAttribute('src', 'imagens/adultoF.jpg') 
            }
            else{
                //txt.innerHTML = `idoso!`
                img.setAttribute('src', 'imagens/idosoF.jpg') 
            }
        }
                
        txt.innerHTML = `Detectamos ${genero} de ${idade} anos!`
        txt.appendChild(img)        //adiciona a tag imagem dentro da tag div (id="msg")
        
        //configuração de estilo de maneira dinâmica
        img.style.borderRadius = '50%'
        img.style.border = '1px solid black'
        
    }

    
    
   

}