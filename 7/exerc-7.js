/*7 - Escreva uma função chamada classificaNota que recebe um número representando a nota de um aluno e retorna 
uma mensagem informando a classificação da nota com base nos seguintes critérios:

Se a nota for maior ou igual a 90, retorna "A".
Se a nota for maior ou igual a 80, retorna "B".
Se a nota for maior ou igual a 70, retorna "C".
Caso contrário, retorna "D".
*/

let nota = document.querySelector('.nota').value;

function classificaNota(nota) {
    if (nota >= 90) {
        document.querySelector('.resposta').innerHTML = "Sua nota é -> A";
    }else if(nota >= 80){
        document.querySelector('.resposta').innerHTML = "Sua nota é -> B";
    }else if(nota >= 70){
        document.querySelector('.resposta').innerHTML = "Sua nota é -> C";
    }else{    
        document.querySelector('.resposta').innerHTML = "Sua nota é -> D";
    }
}