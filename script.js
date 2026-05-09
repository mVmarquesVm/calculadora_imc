function calcularIMC(){

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(altura) || isNaN(peso) || peso <= 0 || altura <= 0){
        alert("Adiocione digitos válidos ou verifique se você preencheu o campo");
        return;
    }
    let imc = peso / (altura * altura);
    let situacao = "";
    if (imc < 18.5){
        situacao = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9){
        situacao = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9){
        situacao = "Sobrepeso"
    } else {
        situacao = "Obesidade"
    }
    document.getElementById("valor-imc").innerHTML =  "IMC: " + imc.toFixed(2);

    document.getElementById("situacao").innerHTML =  "Situação: " + situacao;
}