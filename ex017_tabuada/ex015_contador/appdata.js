function contar() {
    let ini = document.getElementById('ini');
    let fim = document.getElementById('fim');
    let jump = document.getElementById('pular');
    var resul = document.getElementById('resul');
    if(ini.value.length == 0 || fim.value.length == 0 || jump.value.length == 0 ){
        window.alert('ERRO | faltam DADOS');
    }else{
        resul.innerHTML = 'Contando :'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let j = Number(jump.value);
        for(var c = i ; c <= f ; c = c+j){
            resul.innerHTML += `${c},`
        }
    }
    
}
