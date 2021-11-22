function checar() {
    var msg = document.getElementById('msg');
    var imgs = document.getElementById('imgs');
    var corpo = document.getElementById('corpo');
    var agora = new Date();
    var hora = agora.getHours();
    var minu = agora.getMinutes();
    var containeir = document.getElementById('containeir');
    msg.innerHTML = `<p style = "font-size:1.2em;">Você atualizou o site as <span style = "color: white;">${hora} horas e ${minu} minutos</span></p>`;
    if (hora > 0 && hora < 12) {
        msg.innerHTML += '<br><strong style = "font-size:1.2em;">BOM DIA</strong>'
        corpo.style.backgroundColor = '#AD8C3D';
        containeir.style.backgroundColor = '#FACE64';
        imgs.src = "img/manha_file.png";
    }else if (hora >= 12 && hora <=18) {
        msg.innerHTML += '<br><strong style = "font-size:1.2em;">BOA TARDE</strong>'
        corpo.style.backgroundColor = '#BB8E67';
        containeir.style.backgroundColor = '#FABE89';
        imgs.src = "img/tarde.png";
    }else if (hora > 18 && hora <= 23) {
        corpo.style.backgroundColor = '#5C757A';
        containeir.style.backgroundColor = '#376E7A';
        msg.innerHTML += '<br><strong style = "font-size:1.2em;">BOA NOITE</strong>';
        imgs.src = "img/noite_file.png";
    }
    
}
