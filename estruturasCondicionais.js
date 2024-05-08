var media = 8;

if (media >= 8){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

var semaforo;
if (semaforo == "verde"){
    console.log("Siga");
}else if(semaforo == "amarelo")
{
    console.log("Atenção!");
}else{
    console.log("Pare!");
}

var Dia;
if (dia == "Sábado" || dia == "Domingo"){
    console.log("Final de semana");
}else{
    console.log("Dia Útil");
}

var string = "";
var numero = 0;
if (string == numero){
    console.log("As variaveis são iguais");
}else{
    console.log("As variaveis não são iguais");
}

var media2 = 7;
media2 >= 8 ? console.log("Aprovado") : console.log("Reprovado");

var media3 = 8;
switch(media){
    case 8:
        console.log("Dentro da media");
        break;
    case 9: console.log("Acima da media"); break;
}