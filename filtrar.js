const alunos = ['Ana', 'Marcos','Maria', 'Mauro'];
const medias = [7, 4.5 ,8 ,7.5];

//filtros 

const tamanhoNome = alunos.filter((aluno) => { //filter retonra verdadeiro ou falso, o segundo parametro poder se o indice que esta sendo utilizado 
    return aluno.length < 4; //retorna o nome dos alunos que te 4 letras 
})

console.log(tamanhoNome);

const reprovados = alunos.filter((aluno,indice) => { //filter retonra verdadeiro ou falso, o segundo parametro poder se o indice que esta sendo utilizado 
    return  medias[indice] < 7 ;
});

console.log(reprovados);