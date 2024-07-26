const estudantes = require('./estudantes.json');

function filtrarPropriedade(lista, propriedade){
    return lista.filter((estudantes) => {
        //verifica se tem a propriedade dele mesmo 
        return !estudantes.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosInconpletos = filtrarPropriedade(estudantes, 'cep')
console.log(listaEnderecosInconpletos);