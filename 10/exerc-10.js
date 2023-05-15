/*10 - Crie uma página HTML com uma imagem. Ao passar o mouse sobre a imagem, exiba uma mensagem no console.*/

var img = document.querySelector('.imgH');

img.addEventListener("mouseover", function mensagem() {
    console.log("Dê um joinha para o Hamster Luis!");
})