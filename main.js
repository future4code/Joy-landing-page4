var btnAbrir = document.querySelector('.burger');
const linha = document.querySelector('.linha')
const nav = document.getElementById('nav')

btnAbrir.addEventListener('click', () => {
   nav.classList.toggle('esconder')
   linha.classList.toggle('esconde')
});
