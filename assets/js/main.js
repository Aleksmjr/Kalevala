// тут создается переменную для кнопки бургера (header)
const burgerBtnOpen = document.querySelector('.header-burger');
// создается переменная для Бургер Меню
const burgerMenu = document.querySelector('.menu-mobile');

// Вешаем обработчик события клика на бургер (header)
burgerBtnOpen.addEventListener('click', function () {
  // к бургер меню присваивается класс ОПЕН
  burgerMenu.classList.add('open');
  // (this) кнопке бургера присвается тоже класс ОПЕН
  // this.classList.toggle('open'); нужно было для преобразования гамбургера в крестик
});

// тут создается переменная для закрывающей кнопки (крестик)
const burgerBtnClose = document.querySelector('.menu-mobile-close');
// Вешаем обработчик события клика на закрывающую кнопку (крестик)
burgerBtnClose.addEventListener('click', function () {
  // у бургер меню убирается  класс Open
  burgerMenu.classList.remove('open');
});

// const technologyTab = document.querySelector('.technology-wrapper-box');

// technologyTab.addEventListener('click', function () {
//   technologyTab.classList.add('technology-wrapper-box--active');
// });
