const buttonTrigger = document.querySelector('.hamburger');
const topNavigation = document.querySelector('.topNav');

buttonTrigger.addEventListener('click', function(){
    topNavigation.classList.toggle('open');
    buttonTrigger.classList.toggle('active')
});