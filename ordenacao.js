const estudantes = require('./estudantes.json');

function ordena(lista, propriedade){

    return lista.sort((a , b) => {
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade])return 1;
        return 0 ;
    })
}


function ordenaDecrescente (lista, propriedade, decrescente = false){
    return lista.sort((a,b) =>{
        let valorA = a[propriedade];
        let valorB = b[propriedade];
        if (typeof valorA === 'string' && typeof valorB==='string'){
            valorA = valorA.toUpperCase();
            valorB = valorB.toUpperCase();
        }
        if(valorA < valorB){
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB){
            return decrescente ? -1 : 1;
        }
        return 0;
    })
}
const listaOrdenada = ordena(estudantes,'nome');
console.log(listaOrdenada);

const listaDecrescente = ordenaDecrescente(estudantes,'nome',true);
console.log(listaDecrescente)