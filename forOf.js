const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let nota of notas ){
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media.toFixed(2)}`);


//Quando usar For e O For Of

//Ao executar os códigos, Caroline percebeu que o laço feito com for retorna um array atualizado com os descontos:

[ 4.95, 5.58, 12.6, 17.55 ]

const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos);


//const precos = [5.5, 6.2, 14, 19.5];

//let desconto = 0.90;

//for (let preco of precos) {
 //preco = preco * desconto;
//}

//console.log(precos);