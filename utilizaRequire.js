/**Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

Imprima no console o conteúdo importado utilizando a função console.log().

Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

Imprima no console o objeto JavaScript resultante da leitura do arquivo.

3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.

Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.*/

const dados = require('./dados.json');

console.log(dados)

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

const convertendoProduto = JSON.stringify(produto)

console.log(convertendoProduto)