let colordiv = document.querySelector('.colordiv');
let shapediv = document.querySelector('.shapediv');

let colorbtn = document.querySelector('.color-btn');
let shapebtn = document.querySelector('.shape-btn');

let colorsArray = ['blue', 'green', 'yellow', 'violet', 'black']

let shapesArray = [
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
    'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
    'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    'circle(50% at 50% 50%)'
];


let i = 0;
let j = 0;

colorbtn.addEventListener('click', function () {

    colordiv.style.backgroundColor = colorsArray[i];

    if (i < colorsArray.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

});



shapebtn.addEventListener('click', function () {

    shapediv.style.clipPath = shapesArray[j];
    
    if (j < shapesArray.length - 1) {
        j++;
    }
    else {
        j = 0;
    }


});



