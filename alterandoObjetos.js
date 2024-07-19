const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript'
}
console.log(estudante.telefone);

estudante.telefone = '5511999999999'

console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'Albert Igo';
console.log(estudante);

const estudante2 = {};

estudante2.nome = 'Vanuza dos santos'
estudante2.idade = 58
estudante2.turma = 'Python'

console.log(estudante2)