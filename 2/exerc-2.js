/*2 - Crie uma função chamada contaPalavras que recebe uma string como parâmetro e retorna o número de palavras nessa string. 
Considere que as palavras são separadas por espaços.*/

let string = 'O dia esta chuvoso';

function contaPalavras(string) {
    let palavra = string.split(' ').length;
    
    document.querySelector('.contaP').innerHTML = "A quantidade de palavras da string "+string+" é "+palavra;
}