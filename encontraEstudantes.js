const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){
    //find é um objeto de array 
    return lista.find((estudante) => estudante[chave].includes(valor));//includes se for string ele vai procura  sequencia e se for array ele vai entra no array e procurar 
}

const estudanteEcontrado = buscaInformacao(estudantes,'nome','Juliet')
console.log(estudanteEcontrado)


const telefoneEstudante = buscaInformacao(estudantes,'telefone','7919437785')
console.log(telefoneEstudante)