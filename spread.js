const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript',
    bolsista: true,
    telefones: ['551199998888', '55988885555'],
   //array de objetos 
    enderecos: [{
        rua: 'Av augusta',
        numero: '445',
        complemento: 'apt 403'
    },
    {
        rua: 'Av 8',
        numero: '4',
        complemento: ''
    }]
}

function exibirTelefones(telefone1,telefone2){
    console.log(`Liga para ${telefone1}`);
    console.log(`Liga para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0],estudante.telefones[1]);
//espalha o s telefones  usa bastante 
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    //endereco: estudante.enderecos
    //rua: estudante.enderecos[0].rua,
    //numero:estudante.numero[0].numero,

    ...estudante.enderecos[0]
}

console.log(dadosEnvio)