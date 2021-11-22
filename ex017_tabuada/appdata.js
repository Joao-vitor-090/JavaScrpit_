function tabuada() {
    let num = document.getElementById('num');
    let tabela = document.getElementById('seltab');
    if(num.value.length == 0){
        window.alert ('3RR4: Faltam dados');
    }else{
        n = Number(num.value);
        tabela.innerHTML = '';
      for(var c= 1; c <= 10; c++) {
          let item = document.createElement('option')
          item.text = `${n} x ${c} = ${n*c}`
          tabela.appendChild(item);
        }
    }
}