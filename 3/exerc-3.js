/*3 - Crie uma função chamada inverteArray que recebe 
um array como parâmetro e retorna um novo array com os elementos na ordem inversa.*/

var array = ["carro", "telefone", "maça", "porta", "mesa"];
var inversa;

function inverteArray(array) {
   for (let i = 0; i < (array.length -1) / 2; i++) {
        inversa = array[i];
        array[i] = array[(array.length - 1) - i];
        array[(array.length -1) -i] = inversa;
    }    
    /*Outra maneira
    array.reverse();*/ 

    document.querySelector('.arrayInvertida').innerHTML = "Array invertida fica: " + array;
}
