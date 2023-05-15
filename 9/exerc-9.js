/*9 - Crie uma página HTML com um campo de entrada (input) e exiba 
uma mensagem no console toda vez que o valor do campo de entrada for alterado.*/

var inpt = document.querySelector('.inputM');

inpt.addEventListener("change", function mensagem() {
    var mensg = document.querySelector('.inputM');
    console.log(mensg.value);
})