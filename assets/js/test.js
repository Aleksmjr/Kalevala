const button = document.querySelector('button');

console.log(button);

// const boxes = document.getElementsByClassName('box');

// console.log(boxes);

function calculateArrayLength(array) {
  return array.length;
}
// let boxesLenght = calculateArrayLength(boxes);

// console.log(boxesLenght);

let stringArray = ['Иван', 'Алекс', 'Петух', 'Залупкин'];
let numArray = [5, 6, 7, 666];

// let firstBox = boxes[2];
// console.log(firstBox);

function setBackgroundColor(el, color) {
  el.style.backgroundColor = color;
}

//  firstBox.style.backgroundColor = 'green';

function delaySettingBackgroundColor(el, color, timeout) {
  setTimeout(() => setBackgroundColor(el, color), timeout);
}

// delaySettingBackgroundColor(firstBox, 'blue', 1000);

function colorAllElements(array, color, timeout) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(
      () => delaySettingBackgroundColor(array[i], color, timeout),
      i * timeout,
    );
  }
}

button.addEventListener('click', function () {
  let dataBlocks = this.getAttribute('data-blocks');
  let dataColor = this.getAttribute('data-color');
  console.log(dataColor);
  let boxes = document.querySelectorAll(`.${dataBlocks}`);
  console.log(dataBlocks);
  colorAllElements(boxes, dataColor, 1000);

  // colorAllElements(boxes, 'green', 1000);
});
