function calcularIMC(){

    const pesoMin = 18.5;
    const pesoMax = 24.9;
    let classificaoPeso
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    let IMC = valorPeso / ( valorAltura * valorAltura);

    if (IMC <= pesoMin){
        classificaoPeso = "abaixo do peso";
    }
    if (IMC > pesoMin && IMC < pesoMax){
        classificaoPeso = "no peso normal"
    }
    if (IMC >= pesoMax){
        classificaoPeso = "com sobrepeso"
    }

    document.getElementById("resultado").textContent = "O IMC é: " + IMC;
    document.getElementById("classificacao").textContent = "Você está " + classificaoPeso;
}