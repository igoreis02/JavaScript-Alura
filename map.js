const notas = [10, 9.5, 8, 7, 6];

//incluindo a soma de 1  a mais nos array 

const notasAtualizadas = notas.map(nota =>  nota + 1 >= 10 ? 10 : nota +1 ); //Operador ternario se o retonro(nota+1) >= 10  ?(retorna true) 10 :(se nao for o caso )retorna(false) nota+1 (poderia)

    /*if (nota + 1 > 10) {
        return nota
    } else {
        return nota + 1;
    }*/


console.log(notasAtualizadas)


const arrayNums = [1, 2, 3, 4];

const multiplicarArray = arrayNums.map(numero => numero *= 10);

console.log(multiplicarArray);