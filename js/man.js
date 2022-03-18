
const hambur = document.querySelector('.header__mobile-menu');
const menu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__closed--button');
// const curtain = document.querySelector('.curtain');

hambur.addEventListener('click', (e) => {
    menu.classList.add('header__menu--on');
    // curtain.classList.add('curtain--on')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__menu--on')
    // curtain.classList.remove('curtain--on')
})


const fbtn = document.querySelector('.footer__btn');
const moda = document.querySelector('.modal');
// const closeBtn = document.querySelector('.header__closed--button');
const curtain = document.querySelector('.curtain');

fbtn.addEventListener('click', (e) => {
    moda.classList.add('modal--on');
    curtain.classList.add('curtain--on')
})

// closeBtn.addEventListener('click', () => {
//     menu.classList.remove('modal--on')
//     curtain.classList.remove('curtain--on')
// })