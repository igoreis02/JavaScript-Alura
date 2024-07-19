/**1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console. */

const livro = {
    titulo: 'Hábitos Atômicos',
    autor: 'desconhecido',
    anoPublicacao: 1996,
    genero: 'Psicologia'
}

console.log(livro)

/**Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente. */


const anoAtual = new Date().getFullYear();


livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(livro)

livro.mostraDetalhes = "Detalhes do Livro: \n" +
    "Titulo: " + livro.titulo + "\n" +
    "Autor: " + livro.autor + "\n" +
    "Ano de publicação: " + livro.anoPublicacao + "\n" +
    "Gênero: " + livro.genero + "\n" +
    "Idade de Publicação: " + livro.idadePublicacao + " anos";

console.log(livro.mostraDetalhes);


/**Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro. */
console.log( "\n Exercicio 3")
console.log(`Titulo: ${livro.titulo}`)
console.log(`Autor: ${livro.autor}`)
console.log(`Ano Publicação: ${livro.anoPublicacao}`)
console.log(`Gênero: ${livro.genero}`)
console.log(`Idade de Publicação: ${livro.idadePublicacao}`)

/**Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação. */

livro.avaliacao = null;

const novaAvaliacao = {nota: 5, comentario :'Ótimo'}
if(livro.avaliacao=== null){
    livro.avaliacao = novaAvaliacao;
}else{
    console.log('O livro já possui avaliação')
}

console.log( "\n Exercicio 4")
console.log(`Titulo: ${livro.titulo}`)
console.log(`Autor: ${livro.autor}`)
console.log(`Ano Publicação: ${livro.anoPublicacao}`)
console.log(`Gênero: ${livro.genero}`)
console.log(`Idade de Publicação: ${livro.idadePublicacao}`)
console.log(`Avaliação ${livro.avaliacao === null ? 'Nenhuma avaliação disponivel' :'Nota: ' + livro.avaliacao.nota + ',Comentário: ' +livro.avaliacao.comentario}`)

/**Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura". */

livro.genero = 'Aventura';

console.log( "\n Exercicio 4")
console.log(`Titulo: ${livro.titulo}`)
console.log(`Autor: ${livro.autor}`)
console.log(`Ano Publicação: ${livro.anoPublicacao}`)
console.log(`Gênero: ${livro.genero}`)
console.log(`Idade de Publicação: ${livro.idadePublicacao}`)
console.log(`Avaliação ${livro.avaliacao === null ? 'Nenhuma avaliação disponivel' :'Nota: ' + livro.avaliacao.nota + ',Comentário: ' +livro.avaliacao.comentario}`)

/**Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente. */

delete livro.avaliacao

console.log(livro)


/**1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto. */


/**2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console. */

const infoPessoa = {
    nome: 'Albert Igo',
    idade: '27',
    solteiro: true,
    hobbies:['Park', 'Academia','Shopping'],
    endereço:{
        rua:'Av liverpool',
        cidade:'Aparecida de Goiânia',
        estado:'Góias'
    }
}

function mostraInfoPessoa(pessoa){
    return `Nome: ${pessoa.nome} \t Tipo: ${typeof pessoa.nome}\n 
    Idade: ${pessoa.idade}\t Tipo: ${typeof pessoa.idade}\n 
    Solteiro: ${pessoa.solteiro === true ? 'Solteiro' : 'Casado'} \t Tipo: ${typeof pessoa.solteiro} \n 
    Hobbies: ${pessoa.hobbies.join(', ')} \t Tipo: ${typeof pessoa.hobbies}\n
    Endereço: Rua: ${pessoa.endereço.rua} Cidade: ${pessoa.endereço.cidade}  Estado: ${pessoa.endereço.estado}` //ele pega todos os elementos dentro do array 
}


console.log(mostraInfoPessoa(infoPessoa))


/**3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

nome (string): nome da pessoa.
idade (number): idade da pessoa.
cidade (string): cidade de residência da pessoa.
Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido. */

const pessoas =[
  { nome: 'Albert Igor',idade: 27,cidade:'Aparecida de Goiânia'},
  { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
]

function mostraListaPessoas(pessoa){
    pessoa.forEach(pessoas => {
        console.log(`Nome: ${pessoas.nome} Idade: ${pessoas.idade} Cidade: ${pessoas.cidade}`)
    });
}

console.log(mostraListaPessoas(pessoas))

pessoas.push({ nome: 'Vanuza',idade: 58,cidade:'Aparecida de Goiânia'})

console.log(mostraListaPessoas(pessoas))

function filtraPorCidade(pessoas,cidade){
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

console.log(filtraPorCidade(pessoas,'Aparecida de Goiânia'));

/** - Crie um objeto chamado calculadora que terá os seguintes métodos:

soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido. */


const calculadora = {
    soma: function(valor1, valor2){
        return valor1+valor2;
    },
    subtracao: function(valor1,valor2){
        return valor1-valor2;
    },
    multiplicacao:function(valor1,valor2){
        return valor1*valor2;
    },
    divisao:function (valor1,valor2){
        return valor1/valor2
    }
}

console.log(calculadora.soma(5,6));
console.log(calculadora.subtracao(5,6));
console.log(calculadora.multiplicacao(5,6));
console.log(calculadora.divisao(2,10));

calculadora.calculaMedia =function (array){
    const somaNotas = array.reduce((acomulado,nota) => acomulado + nota,0);
    return somaNotas / array.length;
};
const notas=[7, 5.5 , 6.6, 8]

console.log(calculadora.calculaMedia(notas))


/**5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

titular: uma string representando o titular da conta.
saldo: um número representando o saldo da conta.
depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

nome: uma string representando o nome do cliente.
conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console. */

const contaBancaria = {
    titular: 'Albert Igor',
    saldo: 500,
    depositar: function(valorDeposito){
        this.saldo += valorDeposito;
    },
    sacar: function(valorsaque){
        if (valorsaque > this.saldo){
            console.log('Saldo insuficiente');
        }else{
            this.saldo -= valorsaque;
        }
    }
}

const cliente = {
    nome: 'Albert Igor',
    conta: contaBancaria
}

function mostraSaldo(cliente){
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}


mostraSaldo(cliente);

cliente.conta.depositar(500);

mostraSaldo(cliente);

cliente.conta.sacar(1050);

mostraSaldo(cliente);

cliente.conta.sacar(1000);

mostraSaldo(cliente);

