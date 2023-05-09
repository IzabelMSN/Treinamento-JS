/*6 - Escreva uma função chamada verificaIdade que recebe um número representando
a idade de uma pessoa e retorna uma mensagem informando se a pessoa é maior de idade ou menor de idade.*/
let idade = document.querySelector('.idade').value;


function verificaIdade(idade) {
    if (idade >= 18) {
        document.querySelector('.resposta').innerHTML = "Você é maior de idade";
    }else{
        document.querySelector('.resposta').innerHTML = "Você é menor de idade";
    }
}