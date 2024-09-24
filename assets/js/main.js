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

// let buttons = document.querySelectorAll('.rgb');
// let colors = document.querySelectorAll('.color');

// // console.log(buttons);
// // console.log(colors);

// buttons.forEach(function (el, index) {
//   console.log(el, colors[index]);

//   el.addEventListener('click', function () {
//     colors.forEach(function (elem) {
//       elem.classList.remove('active');
//     });

//     buttons.forEach(function (elem) {
//       elem.classList.remove('active');
//     });

//     el.classList.add('active');

//     colors[index].classList.add('active');
//   });
// });

let tabs = document.querySelectorAll('.technology-box');
let tabsImgs = document.querySelectorAll('.technology__img');

tabs.forEach(function (el, index) {
  el.addEventListener('click', function () {
    tabs.forEach(function (elem) {
      elem.classList.remove('active');
    });
    el.classList.add('active');
    tabsImgs.forEach(function (el, index) {
      el.classList.remove('active');
    });
    tabsImgs[index].classList.add('active');
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
const modalBtnOpen = document.querySelectorAll('.modalOpen');
console.log(modalBtnOpen);
const modalMenu = document.querySelector('.modal');

modalBtnOpen.forEach((elem) => {
  elem.addEventListener('click', () => {
    modalMenu.classList.add('open');
  });
});

const modalBtnClose = modalMenu.querySelector('.modal-closeBtn');

modalBtnClose.addEventListener('click', function () {
  modalMenu.classList.remove('open');
});

// НИЖЕ СКРОЛЛ КО ВСЕМУ САЙТУ
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
// СКРОЛЛ КО ВСЕМУ САЙТУ OFF
