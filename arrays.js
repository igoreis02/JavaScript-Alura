//adiciodando elementos ao final da lista 

const notas = [10, 6, 8];

notas.push(7);
notas.push(10); //adicionando no ultimo elemento do array

console.log(notas);

//Removendo elementos ao final da lista 

notas.pop();//retirando o ultimo elemento do arrya

console.log(notas);

//Recortando a lista em duas

const listaDeEstudante = ['João','Juliana','Ana','Caio','Lara',
                'Marjorie','Guilherme','Aline',
                'Fabiana','André','Carlos','Pauloa',
                'Bia', 'Vivian','Isabela','Vinícius',
                'Renan','Renata','Daisy','Camilo'];
;
console.log(listaDeEstudante);

const sala1 = listaDeEstudante.slice(0,listaDeEstudante.length / 2 ); //corta uma lista com parametro de inicio e final 
const sala2 = listaDeEstudante.slice(listaDeEstudante.length/2);

console.log(sala1);
console.log(sala2);

//Atualizando a Lista 
 
const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','Leo'];

listaDeChamada.splice(1,2,'Rodrigo'); // O numero 1 indica o indice que vai comecar e o 2  indica a quantidade que vai apagar (nao é a posição) e Rodrigo é onde vai ser adicional o que foi excluido

console.log(listaDeChamada);


//concatenando arrays

const salaJS = ['Evaldo','Camis','Mari'];
const salaPython = ['Ju','Leo','Raquel'];

console.log(salaJS);
console.log(salaPython);

const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas);


//Array de duas dimensoes 

const nomesEstudantes = ['João','Juliana','Caio','Ana'];
const mediaEstudante = [10, 8, 7.5, 9];

const lista = [nomesEstudantes, mediaEstudante];

console.log(lista)

//Procurando na lista


function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){ //includes esta verificando de a lista tem o nome que foi repassado 
        const indice = lista[0].indexOf(aluno); //esta pegando qual e a posicao do aluno para pegar sabermos a posicao da nota 
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a media ${mediaAluno}`)
    }else{
        console.log('Estudande nao existe na lista e alunos')
    }
}

exibeNomeENota('Caio');






