let img = Array.from(document.querySelectorAll(".landing .img img"));
let MainBullets = document.querySelector(".BulletsList");


let current = 0;
let length = img.length;
Bullets();

let right = document.querySelector(".fa-angle-right");
let left = document.querySelector(".fa-angle-left");
let BulletsList = Array.from(document.querySelectorAll(".BulletsList li"));


img[current].classList.add("active");
BulletsList[current].classList.add("active");

right.addEventListener("click", function () {
    img[current].classList.remove("active");
    BulletsList[current].classList.remove("active");
    if (current >= length - 1) {
        current = 0;
    } else {
        current++;
    }

    img[current].classList.add("active");
    BulletsList[current].classList.add("active");    
});

left.addEventListener("click", function () {
    img[current].classList.remove("active");
    BulletsList[current].classList.remove("active");

    if (current <= 0) {
        current = length - 1;
    } else {
        current--;
    }

    img[current].classList.add("active");
    BulletsList[current].classList.add("active");    
});


function Bullets() {
    img.forEach(function () {
        let bullet = document.createElement("li");
        bullet.className = 'bullet';
        MainBullets.appendChild(bullet);
    });
}


MainBullets.addEventListener('click', function (event) { 
    if (event.target.classList.contains('bullet')) {
        BulletsList[current].classList.remove('active');
        img[current].classList.remove("active");
    
        current = BulletsList.indexOf(event.target);

        BulletsList[current].classList.add('active');
        img[current].classList.add("active");
    

        console.log(BulletsList.indexOf(event.target));
    }
});


setInterval(() => {
    BulletsList[current].classList.remove('active');
    img[current].classList.remove("active");
    if (current >= length - 1) {
        current = 0;
    } else {
        current++;
    }

    BulletsList[current].classList.add('active');
    img[current].classList.add("active");
}, 3500);


let ul = document.querySelectorAll('.portfolio .port-section ul a');
let boxes = Array.from(document.querySelectorAll('.port-img .box'));
console.log(ul);


ul.forEach((li) => { 
    li.addEventListener('click', (event) => {
        ul.forEach((li) => { 
            li.classList.remove('active');
        });
        event.target.parentElement.classList.add("active");
    });

    li.addEventListener('click', () => { 
        boxes.forEach((box) => { 
            box.style.display = 'none';
        });
        document.querySelectorAll(li.dataset.atr).forEach((element) => { 
            element.style.display = "flex";
            element.style.flexBasis = "50%"
            element.style.flexBasis = "50%"
        });
    });
});
















// right.onclick = function () {
//     console.log("right");
// };
// left.addEventListener(function () {
//     console.log("left");
// });
// let bullets = document.getElementById('bullets');

// right.addEventListener("click", function () {
//     slideImage[current % length].classList.remove('active');
//     current++;
//     slideImage[current % length].classList.add('active');
// });

// left.addEventListener("click", function () {
//     slideImage[current].classList.remove('active');
//     slideImage[current + 1].classList.add('active');
// });
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
