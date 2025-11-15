const buttonTrigger = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.menu-container');

buttonTrigger.addEventListener('click', function(){
    menuContainer.classList.toggle('open');
    buttonTrigger.classList.toggle('menu-active')
});