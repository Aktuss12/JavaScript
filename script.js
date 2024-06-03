const RESULTADO = document.querySelector('.result');
let currentContent = '';

function inserir(valor){
    currentContent += valor;
    RESULTADO.innerHTML = currentContent;
}

function limpar(){
    currentContent = '';
    RESULTADO.innerHTML = '';
}

function apagar(){
    if (currentContent.length > 0) {
        currentContent = currentContent.substring(0, currentContent.length - 1);
        RESULTADO.innerHTML = currentContent;
    }
}

function confirmar(){
    try {
        const resultado = eval(currentContent); // Cuidado: `eval` pode ser perigoso
        currentContent = resultado.toString(); // Converte o resultado para string
        RESULTADO.innerHTML = currentContent;
    } catch (e) {
        RESULTADO.innerHTML = 'Erro';
        currentContent = '';
    }
}
