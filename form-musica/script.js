const generoMusical = document.querySelector('#genero');
const musica = document.querySelector('#musica');
const musicaDisplay = document.querySelector('.musica');
const btnOuvir = document.querySelector('#btn-ouvir');

generoMusical.addEventListener('change', () => { 
    

    if (!generoMusical.value) {
        musicaDisplay.style.display = 'none';
        musicaDisplay.value = '';
    } else if (generoMusical.value === "rock") {
        musicaDisplay.style.display = 'flex';
        musica.value = "Kashimir - Led Zeppelin";
    } else if (generoMusical.value === "mpb") {
        musicaDisplay.style.display = 'flex';
        musica.value = "Como nossos pais - Elis Regina";
    } else if (generoMusical.value === "samba") {
        musicaDisplay.style.display = 'flex';
        musica.value = "Eu bebo sim - Elza Soares";
    } 
});

btnOuvir.addEventListener('click', (event)=> {
    if (!musicaDisplay.style.display){
       event.preventDefault();
    }
})

