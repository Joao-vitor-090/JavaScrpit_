function verificar(){
    var data = new Date();
    var agora  = data.getFullYear(); 
    var caixa = document.getElementById('nascano');
    var ano = Number(caixa.value);
    var sex = document.getElementsByName('sex');
    var txt = document.getElementById('txt');
    var txt2 = document.getElementById('txt2');
    var genero = '';
    if( caixa.value.length == 0 || ano >= agora || ano <= 0) {
        alert('[ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ERR4 ]');
    }else{
        var idade = agora - ano;
        txt2.innerHTML = (`<p>Sua idade é <strong>${idade}</strong></p>`)      
    }
    if(sex[0].checked){
        genero = 'Masculino'
        txt.innerHTML = (`<p>Você é um <strong>homem</strong> nascido em <strong>${ano}</strong></p>`)
    }else if (sex[1].checked){
        genero = 'Mulher'
        txt.innerHTML = (`<p>Você é uma <strong>mulher</strong> nascida em <strong>${ano}</strong></p>`)
    }
    if(genero = 'Mulher' && idade < 0){

    }
    else if(genero = 'Mulher' && idade > 0 && idade <= 12){
        
    }else if(genero = 'Mulher' && idade > 12 && idade <= 16){

    }else if(genero = 'Mulher' && idade > 16 && idade <= 20){

    }else if(genero = 'Mulher' && idade > 20 && idade <= 35){

    }else if(genero = 'Mulher' && idade > 20 && idade <= 60){

    }else if(genero = 'Mulher' && idade > 60){
        
    }
    
}

