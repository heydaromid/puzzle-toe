"use strict";

const main = document.querySelector('#main');
let n = 3;
let boxNum = [''];

// draw boxes
for (let i = 0; i < n * n; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('data-name' , i);
    main.appendChild(div);
}

while (boxNum.length < 9) {
    let random = `${getRandomInt(8)}`;
    if (boxNum.length === 0) {
        boxNum.push(random);
    } else if (boxNum.includes(random) === false) {
        boxNum.push(random);
    }
}

const boxes = document.querySelectorAll('.box');
for (let j = 0; j < boxes.length; j++) {
    boxes[0].classList.add('empty');
    boxes[j].innerHTML = boxNum[j];
    boxes[j].addEventListener('click', () => {
        if ((boxes[j - 3] !== undefined && boxes[j - 3].innerHTML === "") || (boxes[j - 1] !== undefined && boxes[j - 1].innerHTML === "") || (boxes[j + 1] !== undefined && boxes[j + 1].innerHTML === "") || (boxes[j + 3] !== undefined && boxes[j + 3].innerHTML === "")) {
            const empty = document.querySelector('.empty');
            empty.innerHTML = boxes[j].innerHTML;
            boxes[j].innerHTML = ""
            empty.classList.remove('empty');
            boxes[j].classList.add('empty');
        } else {}
    });
}

let winBox = ['1', '2', '3', '4', '5', '6', '7', '8'];

// console.log(boxNum);
// function random() {
//     const box = document.querySelector(`[data-id="${getRandomInt(8)}"]`);
//     box.innerHTML = `${getRandomInt(8)}`;
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max) +1;
}
