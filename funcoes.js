//Parâmetros/ argumentos
//retorno

function exibirInfosEstudante(nome, nota){
    console.log(`O nome é ${nome} a nota é ${nota}`);
}

exibirInfosEstudante('Albert', 5);

function somarDoisNumeros(numA, numB){
    return numA + numB;
}

const resultado = somarDoisNumeros(2,4)

console.log(`A soma é ${resultado}`)

function dividir(dividendo, divisor){
    if (divisor !== 0){
        return dividendo/divisor
    }else{
        return 'Favor não dividir por zero'
    }
}

const resultadoD = dividir(10, 0);
console.log(`O resultado da divisão é ${resultadoD}`)

function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
  }
  
  const resultado1 = calculaProduto(3);
  const resultado2 = calculaProduto(2, 4);
  const resultado3 = calculaProduto(1, 2, 3);
  const resultado4 = calculaProduto(2, undefined, 5);
  
  console.log("Resultado 1:", resultado1);
  console.log("Resultado 2:", resultado2);
  console.log("Resultado 3:", resultado3);
  console.log("Resultado 4:", resultado4);