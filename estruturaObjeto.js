const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '01010101011',
    turma: 'javaScript'
}

// utilizamos a notação de ponto para acessar o objeto  e dentro dele acessar cada uma das propriedades 

console.log(estudante.nome)
console.log(`O nome do estudandte é ${estudante.nome}`)
console.log(`O três primeiros numeros do cpf são ${estudante.cpf.substring(0,3)}`) //subString passa o indici de inicio e o final para pegar somente uma parte da string