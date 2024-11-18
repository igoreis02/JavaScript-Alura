let botaoAdiciona = document.querySelector("#adicionar-paciente");

botaoAdiciona.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona")

    let paciente = obtendoInformacoesDoForm(form);


    let erros = validaPaciente(paciente);
    console.log(erros);
    
    if (erros.length > 0){
        exibeMensagemDeErro(erros);
        return
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();
    
    const mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML =""

})

function obtendoInformacoesDoForm(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente ){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(imcTd);


    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    let erros = [];
    
    if(!validaPeso(paciente.peso) ){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A porcentagem de gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }


    return erros;
}

function exibeMensagemDeErro(erros){
    const ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })


}