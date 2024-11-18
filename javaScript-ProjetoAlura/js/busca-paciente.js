const botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function(){
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        const resposta = xhr.responseText;
        const pacientes = JSON.parse(resposta);

        console.log(pacientes);
        
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        })
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        const erroAjax = document.querySelector("#erro-ajax");
        erroAjax.classList.remove("invisivel")
    }
    })

    xhr.send()
})
