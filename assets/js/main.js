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
// console.log(technologyTab);
// const technologyTabs = document.querySelectorAll('.technology-wrapper-box');
// console.log(technologyTabs);
// technologyTab.addEventListener('click', function () {
//   technologyTab.classList.add('active');
// });
let arr = ['a', 'b', 'c'];

let arr2 = ['first', 'letter', 'third'];

let buttons = document.querySelectorAll('.rgb');
let colors = document.querySelectorAll('.color');

// console.log(buttons);
// console.log(colors);

buttons.forEach(function (el, index) {
  console.log(el, colors[index]);

  el.addEventListener('click', function () {
    colors.forEach(function (elem) {
      elem.classList.remove('active');
    });

    buttons.forEach(function (elem) {
      elem.classList.remove('active');
    });

    el.classList.add('active');

    colors[index].classList.add('active');
  });
});

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 6);

// console.log(arr);

// Массив кнопок
// Массив картинок
// объект.метод
// массив.метод
// массив.forEach
