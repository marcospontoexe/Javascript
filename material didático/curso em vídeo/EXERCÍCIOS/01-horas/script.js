function carregar(){
    var agora = new Date()
    var hora = agora.getHours()  // recebe a hora do sistema
    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas. `
   
    if(hora <= 12){     //bom dia
        img.style.backgroundImage = 'url(imagens/manha.jpg)'        // altera a imagem de fundo do style
        window.document.body.style.backgroundColor = 'rgb(182, 182, 255)'   //altera a cor de fundo do estilo do body
        msg.innerHTML += 'Bom Dia!'                                         // concatena uma string à string anterior

    }
    else if(hora <= 18){        // boa tarde
        img.style.backgroundImage = 'url(imagens/tarde.jpg)'        // altera a imagem de fundo do style
        img.style.backgroundSize = '150%'                           // altera o tamanho da imagem de fundo no style
        window.document.body.style.backgroundColor = 'rgb(179, 113, 59)'
        msg.innerHTML += 'Boa Tarde!'
    }
    else{       // boa noite
        img.style.backgroundImage = 'url(imagens/noite.jpg)'        // altera a imagem de fundo do style
        img.style.backgroundSize = '150%'
        window.document.body.style.backgroundColor = 'rgb(70, 23, 146)'
        msg.innerHTML += 'Boa Noite!'
    }
}