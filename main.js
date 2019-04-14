let a = prompt("pick a number");
let blocks = a * a;
let blackBorder = "1px solid black";
let black = "black";


const container = document.querySelector('#container');

var declaration = document.styleSheets[0].rules[0].style;
declaration.setProperty('grid-template-columns', 'repeat(' + a + ', auto)');
declaration.setProperty('grid-template-rows', 'repeat(' + a + ', auto)');


for (i = 0; i < blocks; i++) {
    const createSquares = document.createElement('div');
    container.classList.add('squares');
    container.appendChild(createSquares);
}

const x = document.querySelectorAll('#container > div');
console.log(x);

x.forEach(function (e) {
    e.addEventListener('mouseover', function () {
        changeBG(e)
    })
});
document.querySelector('#clear').addEventListener('click', clearBoard)
document.querySelector('#color').addEventListener('click', colorChange);
// document.querySelector('#color').addEventListener('click', changeButtonText)
document.querySelector('#default').addEventListener('click', defaultColor)


function changeButtonText() {
    document.querySelector('#color').toggleAttribute = "Default";

} 

function clearBoard() {
    x.forEach(function(e) {
        e.style.backgroundColor = "white";
      });
}

function changeBG(div) {
    div.style.backgroundColor = "black";
}

function defaultColor() {
    x.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            changeBG(e)
        })
    });
}

function colorChange() {
    x.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            randomColor(e)
        })
    });
}

function randomColor(div) {
    div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * (255 - 1) + 1) + "," + Math.floor(Math.random() * (255 - 1) + 1) + "," + Math.floor(Math.random() * (255 - 1) + 1) + ")";
}