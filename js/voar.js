

const foguete = document.querySelector('.foguete');
const botaozinho = document.getElementById('botao');

const voar = () => {
    foguete.classList.add('voar');
}


botaozinho.addEventListener("click", voar);
