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
    let peso = document.querySelector(".pesoDigitado").value.trim();
    let altura = document.querySelector(".alturaDigitada").value.trim();

    let imc = peso / altura ** 2;
    let classificacao = "";

    if      (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25)   classificacao = "Peso normal";
    else if (imc < 30)   classificacao = "Sobrepeso";
    else                 classificacao = "Obesidade";

    document.getElementById("resultadoIMC").innerHTML =
        "IMC: " + imc.toFixed(2) + " = " + classificacao;
}

calcularImc()

//

document.querySelector(".botao-temperatura").onclick = conversorDeTemperatura

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


function conversorDeVelocidade () {

}

//

function conversorDeMassa () {

}

//

function regraDeTres () {
    
}