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

for (let chave in estudante){
    const tipo = typeof estudante[chave]; //analizando qual o tipo de dado]
    if (tipo != 'object' && tipo != 'function'){ //esta verificando o tipo porque se for objeto ele nao vai mostra na templade string
        console.log(`A Chave ${chave} tem o valor ${estudante[chave]}`)
    }
   
}   