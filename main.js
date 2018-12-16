//variables

var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(colors);
var colorDisplay = document.querySelector('.pickedColor');
var message = document.querySelector('.message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('.reset');
var easyBtn = document.querySelector('.easy');
var hardBtn = document.querySelector('.hard');
var mode = 'hard';
colorDisplay.textContent = pickedColor;


//Event Listeners

resetBtn.addEventListener('click', function() {
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
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
   
});

easyBtn.addEventListener('click', function() {
    this.classList.add('selected');
    hardBtn.classList.remove('selected');
    colors = generateRandomColors(3);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    mode = 'easy';
});

hardBtn.addEventListener('click', function(){
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    colors = generateRandomColors(6);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    mode = 'hard';
});





//Loop

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

// function declarations

function correct() {
    message.textContent = 'Correct!';
    resetBtn.textContent = 'Play Again?';
    h1.style.backgroundColor = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(arr){
    var num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

function generateRandomColors(x) {
    var arr = [];


    for(var i = 0; i < x; i++){
        arr.push(randomColor());
    }

  //return arr

    return arr;
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()})`;
}