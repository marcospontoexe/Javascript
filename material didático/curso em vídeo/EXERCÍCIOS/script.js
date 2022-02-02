var agora = new Date()
var hora = agora.getHours()  // recebe a hora do sistema
var h = window.document.getElementById('hora')

h.innerHTML = `Agora são ${hora}!`