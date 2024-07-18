//Array de duas dimensoes 

const nomesEstudantes = ['João','Juliana','Caio','Ana'];
const mediaEstudante = [10, 8, 7.5, 9];

const lista = [nomesEstudantes, mediaEstudante];

console.log(lista)

//Procurando na lista


function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){ //includes esta verificando de a lista tem o nome que foi repassado 
        const[alunos,medias] = lista;
        const indice = alunos.indexOf(aluno); //esta pegando qual e a posicao do aluno para pegar sabermos a posicao da nota 
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}`)
    }else{
        console.log('Estudande nao existe na lista e alunos')
    }
}

exibeNomeENota('Caio');