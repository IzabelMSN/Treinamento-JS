//1 - Crie uma função chamada somaNumeros que recebe dois números como parâmetros e retorna a soma desses números.

function somaNumeros() {
    let n1 = document.querySelector('.num1').value;
    let n2 = document.querySelector('.num2').value;
    let resultado = parseInt(n1) + parseInt(n2);
    document.querySelector('.resultado').innerHTML = "O resultado é "+resultado;
}