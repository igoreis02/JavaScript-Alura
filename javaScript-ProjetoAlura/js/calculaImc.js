let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

let paciente = document.querySelectorAll(".paciente");

for (let cont = 0; cont < paciente.length; cont++) {

    let peso = paciente[cont].querySelector(".info-peso").textContent;
    let altura = paciente[cont].querySelector('.info-altura').textContent;
    let imctd = paciente[cont].querySelector(".info-imc");


    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);


    if (!pesoEhValido) {
        pesoEhValido = false;
        imctd.textContent = "Peso Inválido";
        paciente[cont].classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        alturaEhValida = false;
        imctd.textContent = "Altura inválida";
        paciente[cont].classList.add("paciente-invalido");

    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        imctd.textContent = imc;
    }

}

function validaNome(nome) {
    if (!nome == "") {
        return true
    } else {
        return false
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000 ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0.5 && altura < 3.0 ) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    return imc = (peso / (altura * 2)).toFixed(2);
}

