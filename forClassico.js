const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for(let indice=0; indice < notas.length; indice++){
    console.log(`Indice: ${indice} nota: ${notas[indice]}`);
}

let soma = 0;
for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}

const media = soma / notas.length;
console.log(`A média das notas é ${media.toFixed(2)}`);


const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3];

let medias = 0;

for(let i = 0; i < notasGerais.length; i++){
    for(let c = 0; c < notasGerais[i].length; c++){
        medias += notasGerais[i][c]/notasGerais[i].length
    }
}

medias= medias/notasGerais.length

console.log(medias)

