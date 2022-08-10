window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menuBtn");
    const navside = document.querySelector(".navside");
    const closeNav = document.querySelector(".close_btn");

    menuBtn.addEventListener("click", () => {
        if (!navside.classList.contains("nav-active")) {
            navside.classList.add("nav-active");
        }
    });

    closeNav.addEventListener("click", () => {
        if (!navside.classList.contains("nav-active")) {
            navside.classList.remove("nav-active");
        }
    });

    document.addEventListener("mouseup", (e) => {
        if (e.target !== menuBtn && e.target !== navside) {
            navside.classList.remove("nav-active");
        }
    });

    function orderSelected() {
        const selectItem = document.querySelectorAll(".order__select_item")

        selectItem.forEach(sel => {
            sel.addEventListener("click", () => {
                if (!sel.classList.contains("arrowUp")) {
                    sel.classList.add("arrowUp");
                } else {
                    sel.classList.remove("arrowUp");
                }
            });
        });
    }
    orderSelected();
});

new Swiper(".customers", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});