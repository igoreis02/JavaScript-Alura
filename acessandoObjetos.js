const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript'
}

//notação de cochetes 

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(estudante['idade'])

console.log(exibeInfoEstudante(estudante,'nome')); //se estiver sem asparas entende que pode ser uma variavel 
console.log(exibeInfoEstudante(estudante,'cpf'));