function openNav() {
    let menuAberto = document.querySelector(".menu");
    if (menuAberto.className === "menu") {
        menuAberto.className += " menujs";
        document.querySelector(".menu-abrido").style.display="none";
    } else {
        menuAberto.className = "menu";
        document.getElementById(".menu-abrido").style.display="block"
    }
}