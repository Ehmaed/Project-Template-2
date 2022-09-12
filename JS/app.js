// Slide:


let slideImage = Array.from(document.querySelectorAll('slider-container img'));

let current = 0;
let length = slideImage.length;

let right = document.getElementById('right');
let left = document.getElementById('left');

let bullets = document.getElementById('bullets');

right.addEventListener("click", function () {
    slideImage[current % length].classList.remove('active');
    current++;
    slideImage[current % length].classList.add('active');
});

left.addEventListener("click", function () {
    slideImage[current].classList.remove('active');
    slideImage[current + 1].classList.add('active');
});
// function check() {
//     slideImage[current - 1].classList.add('active');

//     bullets.classList.add('active');
//     // removeClass()
// }

// function removeClass() {
//     slideImage.forEach(function (img) {
//         img.classList.remove('active');
//     });
    
//     bullets.forEach(function (bullets) { 
//         bullets.classList.remove('active');
//     });
// }