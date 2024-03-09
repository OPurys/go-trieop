const items = document.querySelectorAll('.gallery__item');
const pictures = document.querySelectorAll('.img');
const modal = document.querySelector('.modal');
const modalDialog = document.querySelector('.modal__dialog');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const closeBtn = document.getElementById('close');
const body = document.body;


let cardIndex = 0;
let pictureFull = null;
let newPictureFull = null;


prevBtn.addEventListener('click', () => changePicture('left'));

nextBtn.addEventListener('click', () => changePicture('rigth'));

closeBtn.addEventListener('click', () => closeSlider());

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        cardIndex = index;
        showPicture();
    });
});

const showPicture = () => {
    pictureFull = pictures[cardIndex].cloneNode();
    pictureFull.style.width = '100%';
    modalDialog.append(pictureFull);
    modal.classList.remove('hidden');
    body.classList.add('no-scroll');
}

const changePicture = (dir) => {
    if (dir === 'left') {
        cardIndex > 0 ? cardIndex-- : cardIndex = items.length - 1;
    } else if (dir === 'rigth') {
        cardIndex < items.length - 1 ? cardIndex++ : cardIndex = 0;
    } else {
        return;
    }

    newPictureFull = pictures[cardIndex].cloneNode();
    newPictureFull.style.width = '100%';

    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;
}

const closeSlider = () => {
    pictureFull && pictureFull.remove();

    newPictureFull && newPictureFull.remove();

    modal.classList.add('hidden');
    body.classList.remove('no-scroll');
}

document.onkeydown = (evt) => {
    if (evt.key === 'Escape') {
        closeSlider();
    }
}

modal.onclick = (evt) => {
    if (!modalDialog.contains(evt.target)) {
        closeSlider();
    }
}

