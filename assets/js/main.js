const burgerButton = document.querySelector('.header-button');

burgerButton.addEventListener('click', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.classList.toggle('open');
  this.classList.toggle('open');
});

const burgerButton2 = document.querySelector('.burger-button');

burgerButton2.addEventListener('click', function () {
  const burgerMenu2 = document.querySelector('.burger-menu');
  burgerMenu2.classList.remove('open');
  this.classList.remove('open');
});
