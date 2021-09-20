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