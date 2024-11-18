const pacientes = document.querySelectorAll(".paciente");


const tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("click", function (event) {
   
    if (event.target.tagName == "TD") {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500)
    }
})


/*
pacientes.forEach(function (paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
})*/