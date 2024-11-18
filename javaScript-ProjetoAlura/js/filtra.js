const campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {

    const paciente = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < paciente.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;

            let expressao = new RegExp(this.value, "i")


            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel')
            } else {
                paciente.classList.remove("invisivel")
            }

        }
    }else{
        for(let i = 0; i < paciente.length; i++){
            paciente[i].classList.remove("invisivel")
        }
    }


})
