const navLink = document.getElementById('links');
const linkContent = document.querySelectorAll('.link');



navLink.addEventListener('click', e => {
    console.log(navLink)
    const currLink = e.target.dataset.btn;
    for(let i = 0; i< linkContent.length; i++){
        linkContent[i].classList.remove('link-active')
        if(linkContent[i].dataset.btn === currLink){
            linkContent[i].classList.add('link-active');
        }
    }
})