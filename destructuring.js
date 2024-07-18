const numerosPares = [2, 4 ,6];
const numerosImpares = [1,3,5];

const numero = [...numerosPares,...numerosImpares]; //os tres pontos no destructuring é para pegar o array e joga na variavel em um unico array

console.log(numero);

//const num1 = 1
//const num2 = 2

const [num1, num2,...outrosNumeros] = [1,2,3,4,5]; //declara a variavel separada com destructuring, os outros numeros com os tres pontos pega o resto do array  e coloca dentro dele 

console.log(num1,num2,outrosNumeros)

const [nome1 = 'Juliana'] = [1] //adiciona o valor padrao 

console.log(nome1)

//trabalhando com objeto 

const pessoa ={
    nome: 'Albert',
    idade: 27
}

const pessoaTelefone = {
    ...pessoa,
    telefone: 993094343
}
 
console.log(pessoa,pessoaTelefone);

const {nome} = pessoa; // mostra o ultimo valor do objeto 

console.log(nome)


function imprimeDados ({nome,idade}){ //pode ser que os dados venhas o que nao queremos 
    //const {nome,idade}= dados //assim fica especifico mas pode fazer direto no parametro da funcao 
    console.log(nome,idade)
}

imprimeDados(pessoa)

