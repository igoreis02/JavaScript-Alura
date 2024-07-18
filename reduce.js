const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(listaDeNotas){
    //reduce faz reduz todos os elementos de array a um elemento so.
    /*const somaDasNotas = listaDeNotas.reduce((acomulador, nota) => {
        return acomulador + nota;
    },0 //o valor inicial para ser acomulado
    );*/

    const somaDasNotas = listaDeNotas.reduce((acomulador, nota) => acomulador + nota,0); //o valor inicial para ser acomulado
    const media = somaDasNotas/listaDeNotas.length;
    return media;
}

console.log(calcularMedia(salaJS))
console.log(calcularMedia(salaJava))
console.log(calcularMedia(salaPython))

const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170