const nomes = ['Ana', 'Clara','Maria','Maria','João','João','João'];

const nomesAtualizados = new Set(nomes); //todos elementos repetidos foram excluidos 
//set é um conjunto  so pode ter valores unicos, nao é um array nao da para alterar para utilicar precisa trasformar em um array

//const listaNomesAtualizados = [...nomesAtualizados];

//da para fazer isso em um unico codigo;

const listaNomesAtualizados = [...new Set(nomes)]//aqui ele remove com o set todos os nomes duplicados e ja cria um array com os novo 

console.log(listaNomesAtualizados)