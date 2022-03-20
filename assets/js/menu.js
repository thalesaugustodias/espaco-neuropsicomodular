const menuAberto = document.querySelector(".menu-aberto");

function toggleMenu() {
    const nav = document.querySelector("#nav");
    nav.classList.toggle('active');
}

menuAberto.addEventListener('click', toggleMenu);