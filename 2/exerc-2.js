/*2 - Crie uma função chamada contaPalavras que recebe uma string como parâmetro e retorna o número de palavras nessa string. 
Considere que as palavras são separadas por espaços.*/

let string = 'Otorrinolaringologista';

function contaPalavras(string) {
    let caractere = string.length;

    document.querySelector('.contaP').innerHTML = "O número de caractere da string "+string+" é "+caractere;
}