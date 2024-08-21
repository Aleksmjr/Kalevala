const burgerButton = document.querySelector('.header-button');

burgerButton.addEventListener('click', function () {
  const burgerMenu = document.querySelector('.burger-menu');

  burgerMenu.classList.toggle('open');

  // Вот это действие у тебя ни к чему не приводит, зачем оно? Что оно делает?
  this.classList.toggle('open');
});

// Называй кнопки чтобы было понятно за что они отвечают. Типа closeBtn
// и добавь туда класс какой нб типа burger-button--close чтобы было понятно что есть что, а то сейчас пока разберешься заебешься))
const burgerButton2 = document.querySelector('.burger-button');

burgerButton2.addEventListener('click', function () {
  // Если два раза используешь одну и ту же переменную, вынеси ее за скобки и используй переменную во всех нужных местах, не надо плодить повторы
  const burgerMenu2 = document.querySelector('.burger-menu');

  burgerMenu2.classList.remove('open');

  // тоже не понятно что это за действие, что оно делает? для чего оно?
  this.classList.remove('open');
});
