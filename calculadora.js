var numero1 = prompt("Digite o Primeiro Número:");
var numero2 = prompt("Digite o Segundo Número:");
var operacao = prompt("Digite a Operação:");

function calculadora(x, y, operacao){
    if (operacao === "+"){
        return parseInt(x) + parseInt(y);
    }
    
    else if (operacao === "-"){
        return parseInt(x) - parseInt(y);
    }
    
    else if (operacao === "*"){
        return parseFloat(x) * parseFloat(y);
    }

     else if (operacao === "/"){
        return parseFloat(x) / parseFloat(y);
    }

    else{
        return console.log("Não foi Possivel realizar a operação");
    }

}

console.log(calculadora(numero1, numero2, operacao));