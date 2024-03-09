// Burger
const burger = document.querySelector('.js--burger');
const nav = document.querySelector('.js--nav');
const headerInner = document.querySelector('.js--header__inner');

burger.onclick = () => {
    nav.classList.toggle('show');
}

document.onkeydown = (evt) => {
    if (evt.key === 'Escape') {
        remove();
    }
}

document.onmouseup = (evt) => {
    if (!burger.contains(evt.target) && !nav.contains(evt.target)) {
        remove();
    }
}

function remove() {
    nav.classList.remove('show');
}

// Header fixed
window.onscroll = () => {
    if (window.scrollY > headerInner.clientHeight) {
        headerInner.classList.add('fixed');
    } else { headerInner.classList.remove('fixed'); }
}







