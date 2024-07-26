
//copiar objetos json
function copiarObj(objeto){
    return JSON.parse(JSON.stringify(objeto))
}

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

const pessoaModificada = copiarObj(pessoaOriginal)

pessoaModificada.idade = 31;

console.log('Objeto Original');
console.log(pessoaOriginal);

console.log('Objeto modificado');
console.log(pessoaModificada);