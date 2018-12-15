var colors = generateRandomColors(6);



var squares = document.querySelectorAll('.square');
var pickedColor = pickColor(colors);
var colorDisplay = document.querySelector('.pickedColor');
var message = document.querySelector('.message');
var h1 = document.querySelector('h1');
colorDisplay.textContent = pickedColor;




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


function correct() {
    message.textContent = 'Correct!';
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

  //add x random colors to array
//3
    for(var i = 0; i < x; i++){
        arr.push(randomColor());
    }

  //return arr

    return arr;
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()}, ${Math.floor(Math.random() * 256).toString()})`;
}