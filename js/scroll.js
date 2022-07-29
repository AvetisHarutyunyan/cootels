window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header__section");
    navbar.classList.toggle("change-nav", window.scrollY > 70);
});