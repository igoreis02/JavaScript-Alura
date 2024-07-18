const elementos = [10, 9.5, 8, 7, 6];

elementos.forEach(elemento => {
    console.log(elemento);
});


// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(array, funcaoCallback){
    return array.map(funcaoCallback);
}

function dobraNumero(num){
    return num*2;
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros,dobraNumero);

console.log(listaNumerosDobrados);

//Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numeros = [10, 20, 30, 40, 50];
let posicao = -1

function verificarNumero (numero){
    for(let i =0; i< numeros.length; i++){
        if(numeros[i] === numero){
            posicao = i;
            break;
        }
    }
}

verificarNumero(40)

console.log(`O número da posição é  ${posicao}`);


/*Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.*/

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todasAsTurmas =  nomesTurmaA.concat(nomesTurmaB);

  const alunoProcurado = todasAsTurmas.find(nome => nome === 'Ana Souza');

  if(alunoProcurado){
    console.log(`Aluno encontrado: ${alunoProcurado}`);
  }else{
    console.log(`Aluno nao econtrado`);
  }

  /* Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.*/
  const numero = [6, 9, 12, 15, 18, 21];

  numero.forEach(multiplica => {
    const resultado = multiplica * 3;
    console.log(resultado);
  });

  const indice = numero.findIndex(num => num === 18); // se retornar -1 nao econtrou 
  
  if(indice!== -1){
    console.log(`O número 18 está no indice ${indice}`)
  }else{
    console.log('Número não encontrado no array');
  }

  /*- Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).*/ 

function variosArrays(...array){
  return [].concat(...array)
}

const array1 = [1, 2 , 30];
const array2 = [2, 3 ,40];

const contatenado = variosArrays
(...array1, ...array2);

console.log(contatenado);

/*2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.*/

const valores = [10, 20 , 30 , 40, 50, 60];

const somar = valores.reduce((acomulador, valor) => acomulador + valor, 0);

console.log(somar)


/*Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.*/

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const coresListasJuntas = [...new Set(coresLista1.concat(coresLista2))];

console.log(coresListasJuntas);

/*Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.*/

function filtrarNumerosPares(numArray){
    return numArray.filter(num => num %2 ==0);
}

const numArray = [1, 2, 3, 4, 5, 6];
const numerosPares = filtrarNumerosPares(numArray);

console.log(numerosPares);

function filtrasNumeros(numArrays){
   return numArrays.filter(num1 => num1 %3 == 0 > 5);
}

const numArrays = [1, 2, 3, 4, 5, 6];
const numerosMultiposEMaiores5 = filtrasNumeros(numArrays);

console.log(numerosMultiposEMaiores5);

/** Crie uma função que receba um array de números e retorne a soma de todos os elementos. */
const numArrays1 = [1, 2, 3, 4, 5, 6];

const somaElementos = numArrays1.reduce((acomula,num) => num + acomula, 0);

console.log(somaElementos);

