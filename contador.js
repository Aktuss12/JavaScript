var contador = 0;

document.getElementById("botao").addEventListener("click", function() {
    contador++;
    document.getElementById("contador").innerText = contador;
});
