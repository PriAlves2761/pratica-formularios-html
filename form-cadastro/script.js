const formulario = document.querySelector('form');
const senha = document.querySelector('#senha');
const repitaSenha = document.querySelector('#repita-senha');
const alertaSenha = document.querySelector('.alerta')

formulario.addEventListener('submit', (event) => {
    if (senha.value !== repitaSenha.value) {
        event.preventDefault();
        alertaSenha.classList.remove('escondido');  
        alertaSenha.textContent = 'A senha não confere'
    } else {
        alertaSenha.classList.add('escondido')
    }
})