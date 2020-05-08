function miniCartStatus() {
    const toggleBtn = document.getElementById("open-mini-cart");
    const miniCart = document.getElementById("mini-cart");

    toggleBtn.onclick = () => {
        miniCart.classList.toggle("active");
        toggleBtn.classList.toggle("open");
    }
}

function langStatus() {
    const langBtn = document.getElementById("lang__box");
    langBtn.onclick = (e) => {
        langBtn.classList.toggle("active");
    }
}

function hamburgerStatus() {
    const hamburgerBtn = document.getElementById("hamburger");
    const hamburgerMenu = document.getElementById("menu");

    hamburgerBtn.onclick = () => {
        hamburgerBtn.classList.toggle("active");
        hamburgerMenu.classList.toggle("active")
    }
}

function modalClose(elem, className) {
    elem.classList.remove(className);
}

function clickHandler() {
    const hamburgerBtn = document.getElementById("hamburger");
    const hamburgerMenu = document.getElementById("menu");
    const miniCart = document.getElementById("mini-cart");
    const miniCartBtn = document.getElementById("open-mini-cart");

    document.addEventListener('click', (e) => {

        if (e.target.closest('.hamburger') === hamburgerBtn || e.target.closest('#menu') === hamburgerMenu) {
        } else {
            modalClose(hamburgerBtn, "active");
            modalClose(hamburgerMenu, "active");
        }

        if (e.target.closest('.mini-cart') === miniCart || e.target.closest(".cart-small") === miniCartBtn) {
        } else {
            modalClose(miniCart, "active");
            modalClose(miniCartBtn, "open");
        }

        if (e.target.closest(".product__calc-button")) {
            productCount(e.target.closest(".product__calc-button"))
        }
    })
}

function productCount(btn) {
    let productInput = btn.parentElement.querySelector(".product__calc-input"); 
    if (btn.classList.contains("product__calc-plus")) {
        productInput.value ++;
    }
    if (btn.classList.contains("product__calc-minus")) {
        productInput.value --;
        if (productInput.value < 1) {
            productInput.value = 1;
        }
    }
}

function productInputHandler() {
    const productsInputs = document.querySelectorAll(".product__calc-input");

    productsInputs.forEach(input => input.addEventListener('change', () => {
        input.value = input.value.replace (/\D/g, '');
        if (input.value === '' || input.value < 1) {
            input.value = 1;
        }
    }))
}

function addSticlyClass() {
    document.getElementById("header").classList.add('sticly');
    document.getElementById("main").classList.add('sticly');
    document.getElementById("menu").classList.add('sticly');
}
function removeSticlyClass() {
    document.getElementById("header").classList.remove('sticly');
    document.getElementById("main").classList.remove('sticly');
    document.getElementById("menu").classList.remove('sticly');
}

function scrollHandler() {
    document.addEventListener('scroll', () => {
        let topOffset = window.pageYOffset;
        if (topOffset > 1) {
            addSticlyClass();
        } else {
            removeSticlyClass();
        }
        
    })
}

document.addEventListener("DOMContentLoaded", () => {
    miniCartStatus();
    langStatus();
    hamburgerStatus();
    clickHandler();
    scrollHandler()
    productInputHandler()
});