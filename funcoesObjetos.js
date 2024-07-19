const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript',
    bolsista: true,
    telefones: ['551199998888', '55988885555'],
    media : 7.5,
    estaAprovado: function (mediaBase){ //nao posso coloca aroow function nao econtra o contexto 
        return this.media >= mediaBase ? true: false;
    }
} 

console.log(estudante.estaAprovado(7));
