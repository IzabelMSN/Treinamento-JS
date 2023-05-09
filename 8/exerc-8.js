/*8 - Crie uma página HTML com um botão. Ao clicar no botão, exiba uma mensagem no console.*/

var btn = document.querySelector('.botao');

btn.addEventListener("click", function mensagem() {
    alert("Você clicou no botão!");
})