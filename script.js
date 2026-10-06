// Desafio Intermediário: Menu Hambúrguer
const btnHamburger = document.getElementById('btn-hamburger');
const navLinks = document.getElementById('nav-links');

btnHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Desafio Intermediário: Botão Dark / Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Altera o ícone do botão dependendo do tema
    const icon = themeToggleBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});