const menuOpenButton = document.querySelector(".hamburger-menu-open");
const closeMenuButton = document.querySelector(".close-icon");

menuOpenButton.addEventListener('click', ()=> {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper")
    mobileMenu.classList.add("open")
})
closeMenuButton.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".hamburger-menu-wrapper")
    mobileMenu.classList.remove("open")
})