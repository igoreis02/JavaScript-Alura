const  estudandeReprovou =  (notaFinal, faltas) =>{
    if (notaFinal < 7 && faltas > 4){
        return  true;
    }else{
        return false;
    }
}

const exibirMesagem = (nome, notaFinal, faltas) => {
    if(estudandeReprovou(notaFinal,faltas) == true){
        return ` Parabéns ${nome}, Aprovado`
    }else{
        return `Ops ${nome} voce foi reprovado`
    }
}; 

console.log(exibirMesagem('Albert', 6, 5));

//console.log(estudandeReprovou(6, 5));
//console.log(estudandeReprovou(10, 2));


const palindromo = (palavra) => {
    let palavraReversa = palavra.split("").reverse().join("");
    if (palavra === palavraReversa){
        return true
    }else{
        return false
    }
}

console.log(palindromo('ala'))