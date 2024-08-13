const burgerButton = document.querySelector('.header-button');

burgerButton.addEventListener('click', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.classList.toggle('open');
  this.classList.toggle('open');
});
