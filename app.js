function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if(de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!')
        return;
    }

   let numeros = []; 
   let num;
    
    if(quantidade > ate - de + 1){
        alert("Impossível, quantidade de números desejada é maior que o possível nesse cenário");
        return;
    }


    for(let i = 0; i < quantidade; i++){
        num = obterNumeroAleatorio(de, ate);
        
        while (numeros.includes(num)){
            num = obterNumeroAleatorio(de, ate);
        }

        numeros.push(num);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros} </label>`
    alterarStatusBotao();
}    

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {      
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}