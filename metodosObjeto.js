const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript',
    bolsista: true,
    telefones: ['551199998888', '55988885555'],
    //array de objetos 
    //enderecos: [{
        //rua: 'Av augusta',
        //numero: '445',
        //complemento: 'apt 403'
    //},
    //{
     //   rua: 'Av 8',
     //   numero: '4',
     //   complemento: ''
    //}]
}

//pesquisar uma propriedade, e como ver se ela existe ou nao e te sem valor, com o object.keys

const chavesObjeto = Object.keys(estudante);

console.log(chavesObjeto)

//verificar se existe uma propriedade do objeto ou não
if(!chavesObjeto.includes('endereços')){
    console.error('Necessario ter um endereço')
}


Object.values() //retornoa o array com valores 


const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

Object.entries() //cria um array com array 

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]

const meuObjeto1 = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

Object.assign()//usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

/**Propriedades não enumeráveis
Propriedades não enumeráveis não são consideradas durante operações de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns. */

const meuObjeto2 = {};

Object.defineProperty(meuObjeto2, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto2) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}