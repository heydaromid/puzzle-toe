"use strict";

const main = document.querySelector('#main');
let n = 3;
let boxNum = [''];
let winBox = ['1', '2', '3', '4', '5', '6', '7', '8', ''];

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
for (let i = 0; i < boxes.length; i++) {
    boxes[0].classList.add('empty');
    boxes[i].innerHTML = boxNum[i];
    boxes[i].addEventListener('click', () => {
        if (i % 3 === 2) {
            if ((boxes[i - 3] !== undefined && boxes[i - 3].innerHTML === "")
            || (boxes[i - 1] !== undefined && boxes[i - 1].innerHTML === "")
            || (boxes[i + 3] !== undefined && boxes[i + 3].innerHTML === "")) {
                const empty = document.querySelector('.empty');
                empty.innerHTML = boxes[i].innerHTML;
                boxes[i].innerHTML = "";
                empty.classList.remove('empty');
                boxes[i].classList.add('empty');
                for (let j = 0; j < boxes.length; j++) {
                    boxNum[j] = boxes[j].innerHTML;
                }
                if (boxNum.toString() === winBox.toString()) {
                    win();
                }
            }
        }
        if (i % 3 === 0) {
            if ((boxes[i - 3] !== undefined && boxes[i - 3].innerHTML === "")
            || (boxes[i + 1] !== undefined && boxes[i + 1].innerHTML === "")
            || (boxes[i + 3] !== undefined && boxes[i + 3].innerHTML === "")) {
                const empty = document.querySelector('.empty');
                empty.innerHTML = boxes[i].innerHTML;
                boxes[i].innerHTML = "";
                empty.classList.remove('empty');
                boxes[i].classList.add('empty');
                for (let j = 0; j < boxes.length; j++) {
                    boxNum[j] = boxes[j].innerHTML;
                }
                if (boxNum.toString() === winBox.toString()) {
                    win();
                }
            }
        }
        if (i % 3 === 1) {
            if ((boxes[i - 3] !== undefined && boxes[i - 3].innerHTML === "")
            || (boxes[i - 1] !== undefined && boxes[i - 1].innerHTML === "")
            || (boxes[i + 1] !== undefined && boxes[i + 1].innerHTML === "")
            || (boxes[i + 3] !== undefined && boxes[i + 3].innerHTML === "")) {
                const empty = document.querySelector('.empty');
                empty.innerHTML = boxes[i].innerHTML;
                boxes[i].innerHTML = "";
                empty.classList.remove('empty');
                boxes[i].classList.add('empty');
                for (let j = 0; j < boxes.length; j++) {
                    boxNum[j] = boxes[j].innerHTML;
                }
                if (boxNum.toString() === winBox.toString()) {
                    win();
                }
            }
        }
    });
}

const resetGame = document.querySelector('#reset');
resetGame.addEventListener('click' , () => {
    location.reload()
});

function win() {
    const message = document.querySelector('#message');
    message.innerHTML = 'Great you won!';
    const empty = document.querySelector('.empty');
    empty.innerHTML = '9';
    empty.classList.remove('empty');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) +1;
}
