
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

// Fecha o menu hambúrguer ao clicar em um link
const navLinksList = document.querySelectorAll('.nav-link');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show'); // Remove a classe 'show' para fechar o menu
    });
});
