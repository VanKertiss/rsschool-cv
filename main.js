const navLink = document.getElementById('links');
const linkContent = document.querySelectorAll('.link');

navLink.addEventListener('click', e => {
    console.log(navLink)
    const currLink = e.target.dataset.btn;
    for (let i = 0; i < linkContent.length; i++) {
        linkContent[i].classList.remove('link-active')
        if (linkContent[i].dataset.btn === currLink) {
            linkContent[i].classList.add('link-active');
        }
    }
})

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav');

menuButton.addEventListener('click', click)

function click() {
    menuButton.classList.toggle('menu-button-active')
    menu.classList.toggle('nav-active');
    console.log('клик')
}

console.log(
    'Самооценка CV:'+
    `Верстка валидная = 10,
    верстка семантичная = 18,
    css стили пв оформлении = 10,
    контент в горизонтально центрированном блоке = 10,
    вёрстка адаптивная = 10,
    есть адаптивное бургер-меню = 10,
    присутствует изображение = 10,
    контакты в списке = 10,
    контакты+ скилы в полном объеме = 10,
    есть подсветка синтаксиса = 10,
    CV на английском языке = 10,
    pull request = 10,
    Ну и выгляди помоему не плохо :) = 10,
    итого = 138 баллов`
)