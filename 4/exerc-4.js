/*4 - Crie uma função chamada maiorNumero que recebe um array de números como parâmetro 
e retorna o maior número desse array.*/

var num = [3, 6, 5, 254, 23, 50, 129, 98, 123, 22, 124, 78, 56];
var maior = 0;

function maiorNumero(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maior) {
            maior = num[i]
        }   
    }

    document.querySelector('.maiorNum').innerHTML = "O maior número -> " + maior;
}