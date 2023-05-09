/*5 - Crie uma função chamada multiplicaArray que recebe um array de números como 
parâmetro e retorna o resultado da multiplicação de todos os elementos desse array.*/

var num = [5, 7, 8, 23, 13, 54, 76, 32];
var mult = 1;

function multiplicaArray(num) {
    for (let i = 0; i < num.length; i++) {
        mult = mult * num[i];
    }

    document.querySelector('.multNum').innerHTML = "A multiplicação fica -> " + mult;
}
