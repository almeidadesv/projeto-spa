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

function conversorDeMoedas (){
}

//

document.querySelector(".botao-imc").onclick = calcularImc;

function calcularImc() {
    let peso = +document.querySelector(".pesoDigitado").value.trim();
    let altura = +document.querySelector(".alturaDigitada").value.trim();

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


function conversorDeTemperatura () {

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