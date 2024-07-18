const  estudandeReprovou =  function (notaFinal, faltas){
    if (notaFinal < 7 && faltas > 4){
        return  true;
    }else{
        return false;
    }
}


console.log(estudandeReprovou(6, 5));
