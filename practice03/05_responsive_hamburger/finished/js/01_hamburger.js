{
  const buttonTrigger = document.querySelector('.buttonTrigger');
  const topNavigation = document.querySelector('.topNavigation');
  
  buttonTrigger.addEventListener( 'click' , function(){
    buttonTrigger.classList.toggle('active');
    topNavigation.classList.toggle('open');
  });
  
}