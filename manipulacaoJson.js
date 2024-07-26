/**4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

Exemplo de animais.json:
Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.

*/

const animais = require('./animais.json');

const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};

animais.animais.push(novoAnimal);

console.log(animais)


//Modifica o habitat de um animal 
const animalmodificar = animais.animais.find(animal => animal.id === 2 ) 
if(animalmodificar){
    animalmodificar.habitat = "Oceano Antártico";
}

console.log(animais)

//removendo um animal
const removeAnimal = animais.animais.findIndex(animal => animal.id === 1);
if(removeAnimal !== 1){
    animais.animais.splice(removeAnimal,1);
}

console.log(animais)

const novaStringJsonAnimais = JSON.stringify(animais,null,2)

console.log(novaStringJsonAnimais)