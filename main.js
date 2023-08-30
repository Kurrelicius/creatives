const menuBurguer = document.getElementById("nav__hamburguer");
const menuNav= document.getElementById("nav__links");
menuBurguer.addEventListener("click", function(){
    menuNav.classList.toggle("nav__links--show");
});