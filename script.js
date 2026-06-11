function esconderPaineis() {
    document.querySelectorAll("#ferramentas > div").forEach(div => {
        div.classList.add("hidden");
    });
}

document.getElementById("puxarmoeda").onclick = () => {
    esconderPaineis();
    document.querySelector(".painelmoeda").classList.remove("hidden");
};

document.getElementById("puxarimc").onclick = () => {
    esconderPaineis();
    document.querySelector(".painelimc").classList.remove("hidden");
};

document.getElementById("puxartemperatura").onclick = () => {
    esconderPaineis();
    document.querySelector(".paineltemperatura").classList.remove("hidden");
};

document.getElementById("puxarvelocidade").onclick = () => {
    esconderPaineis();
    document.querySelector(".painelvelocidade").classList.remove("hidden");
};

document.getElementById("puxarmassa").onclick = () => {
    esconderPaineis();
    document.querySelector(".painelmassa").classList.remove("hidden");
};

document.getElementById("regratres").onclick = () => {
    esconderPaineis();
    document.querySelector(".painelregra").classList.remove("hidden");
};

esconderPaineis()

//

document.querySelector(".botao-moeda").onclick = conversorDeMoedas;

function conversorDeMoedas (){

    let opcao1 = prompt("Digite 1 para converter Real para Dólar e 2 pro contrário")

    let quantia = document.querySelector(".quantiaDigitada").value.trim()
    let quantiaFinalDolar = (parseFloat(quantia) / 5.12)
    let quantiaFinalReais = (parseFloat(quantia) * 5.12 )

    if (opcao1 == "1") {
    document.getElementById("quantiaConvertida").innerHTML =
    "A quantia de dólares é de " + quantiaFinalDolar.toFixed(2);
    }
    else {
    document.getElementById("quantiaConvertida").innerHTML =
    "A quantia de reais é de " + quantiaFinalReais.toFixed(2);
    }
}


//

document.querySelector(".botao-imc").onclick = calcularImc;

function calcularImc() {

    let opcao0 = prompt("Digite 1 pra calcular o IMC feminino e 2 pro masculino")

    let peso = document.querySelector(".pesoDigitado").value.trim();
    let altura = document.querySelector(".alturaDigitada").value.trim();

    let imc = peso / altura ** 2;
    let classificacao = "";

    if (opcao0 == 1) {
    if (imc <= 0) classificacao = "Digite o valor correto";
    else if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 23.9) classificacao = "Peso normal";
    else if (imc < 28.9) classificacao = "Sobrepeso";
    else if (imc > 29.0) classificacao = "Obesidade";
    }
    else {
    if (imc <= 0) classificacao = "Digite o valor correto";
    else if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc > 30) classificacao = "Obesidade";
    }

    document.getElementById("resultadoIMC").innerHTML =
        "IMC: " + imc.toFixed(2) + " = " + classificacao;
}

//

document.querySelector(".botao-temperatura").onclick = conversorDeTemperatura;

function conversorDeTemperatura () {

let opcao2 = prompt("Digite 1 pra converter C para F ou 2 pro contrário")

    let temperatura = document.querySelector(".temperaturaDigitada").value.trim();
    let cparaf = temperatura * 1.8 + 32
    let fparac = ((temperatura - 32)* 5 / 9).toFixed(5)

    if (opcao2 == "1") {
        document.getElementById("resultadoTemperatura").innerHTML =
        "A temperatura é igual a " + cparaf + "°F"
    }
    else {
        document.getElementById("resultadoTemperatura").innerHTML =
        "A temperatura é igual a " + fparac + "°C"
    } 
}

//

document.querySelector(".botao-velocidade").onclick = conversorDeVelocidade;

function conversorDeVelocidade () {

let opcao3 = prompt("Digite 1 para converter km/h por mph e 2 pro contrário");

    let velocidade = document.querySelector(".velocidadeDigitada").value.trim();
    
    let kmpramilhas = velocidade * 0.621371
    let milhasprakm = velocidade * 1.60934
    
    if (opcao3 == 1) {
        document.getElementById("resultadoVelocidade").innerHTML =
        velocidade + " km/h " + "equivale a " + kmpramilhas + " mph"
    }
    else {
        document.getElementById("resultadoVelocidade").innerHTML =
        velocidade + " mph equivale a " + milhasprakm + " km/h"
    }

}

//

document.querySelector(".botao-massa").onclick = conversorDeMassa;

function conversorDeMassa () {

    let opcao4 = prompt("Digite 1 pra converter kg pra lbs ou 2 pro contrário");

    let massa = document.querySelector(".pesodoisDigitado").value.trim()

    let kgpralbs = massa * 2.2046
    let lbsprakg = (massa / 2.2046).toFixed(6)

    if (opcao4 == 1) {
        document.getElementById("resultadoMassa").innerHTML =
        massa + "kg é igual a " + kgpralbs + "lbs"
    }
    else {
        document.getElementById("resultadoMassa").innerHTML =
        massa + "lbs é igual a " + lbsprakg + "kg"
    }
}

//

document.querySelector(".botao-regra").onclick = regraDeTres;

function regraDeTres () {

    let valorum = document.querySelector(".numeroum").value.trim();
    let valordois = document.querySelector(".numerodois").value.trim();
    let valortres = document.querySelector(".numerotres").value.trim();

    let x = valordois * valortres / valorum

    document.getElementById("resultadoRegra").innerHTML =
    "O número X é igual a: " + x 
    
}