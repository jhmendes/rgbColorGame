//VARIABLES

var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(colors);
var colorDisplay = document.querySelector('.pickedColor');
var message = document.querySelector('.message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('.reset');
var modeButtons = document.querySelectorAll('.mode');
var mode = 'hard';
colorDisplay.textContent = pickedColor;


//EVENT LISTENERS


resetBtn.addEventListener('click', function () {
    // document.location.reload();
    //generate all new colors
    this.textContent = 'New Colors';
    if (mode === 'hard') {
        colors = generateRandomColors(6);
    } else {
        colors = generateRandomColors(3);
    }
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    message.textContent = '';
    this.textContent = 'New Colors';
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

});

for (var i = 0; i < modeButtons.length; i++) {

    modeButtons[i].addEventListener('click', function () {

        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        var that = this;
        reset.call(that);
    });
}

//LOOP

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares

    squares[i].addEventListener('click', function () {
        //grab color of picked square
        var color = this.style.backgroundColor;

        if (color === pickedColor) {
            correct();

        } else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
        }
    });
}

// FUNCTION DECLARATIONS

function correct() {
    message.textContent = 'Correct!';
    resetBtn.textContent = 'Play Again?';
    h1.style.backgroundColor = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(arr) {
    var num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

function generateRandomColors(x) {
    var arr = [];


    for (var i = 0; i < x; i++) {
        arr.push(randomColor());
    }

    //return arr

    return arr;
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()})`;
}

function reset() {
    if (this.textContent === 'Easy') {
        mode = 'easy';
        colors = generateRandomColors(3);
    } else {
        mode = 'hard';
        colors = generateRandomColors(6);
        console.log(colors);
    }
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    for (var i = 0; i < squares.length; i++) {
    
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}