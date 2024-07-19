const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript',
    bolsista: true,
    telefones: ['551199998888', '55988885555'],
    //array de objetos 
    endereco: [{
        rua: 'Av augusta',
        numero: '445',
        complemento: 'apt 403'
    }]
}

console.log(estudante.endereco)
console.log(estudante.endereco[0].rua)

estudante.endereco.push({
    rua: 'Av 8',
    numero: '4',
    complemento: ''
});

console.log(estudante.endereco)
console.log(estudante.endereco[0])
console.log(estudante.endereco[1])

const listaEnderecosComComplemento = estudante.endereco.filter((endereco => endereco.complemento));

console.log(listaEnderecosComComplemento)