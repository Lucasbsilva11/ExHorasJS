let date = document.getElementById('date')
date.addEventListener('onload', carregar)


function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    

    msg.innerHTML = `Agora são exatamente ${hora}`

    if(hora >= '00:00:00' && hora < '12:00:00'){
        img.src = 'fotomanha.png'
    }else if(hora >= '12:00:00' && hora < '18:00:00'){
        img.src = 'fototarde.png'
    }else{
        img.src = 'fotonoite.png'
    }
}
setInterval(carregar);
