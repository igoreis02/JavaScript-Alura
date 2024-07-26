const estudante =  require('./estudante.json');

//CONVERTENDO PARA STRING PRA FAZER A COMUNICACAO 
const stringEstudante = JSON.stringify(estudante);

console.log(estudante);
console.log(stringEstudante);

//para usar o arquivo Json 
const objEstudante = JSON.parse(stringEstudante)

console.log(objEstudante);

//depois que usa o parse consigo usar o objeto
console.log(objEstudante.nome)

for ( let chave in objEstudante){
    console.log(objEstudante[chave])
}


//clonagem Profunda 

const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor