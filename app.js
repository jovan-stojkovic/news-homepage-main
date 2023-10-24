const menuButton = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-nav")

menuButton.addEventListener('click', e => {
    menuButton.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})