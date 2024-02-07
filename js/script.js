document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    //for project presentations
    var leftBtn = document.querySelector('.prevBtn');
    var rightBtn = document.querySelector('.nextBtn');
    var boxs = document.querySelector('.box');
    var boxsWidth = boxs.clientWidth;
    leftBtn.addEventListener('click', function () {
        boxs.scrollBy(-300, 0);
    });
    rightBtn.addEventListener('click', function () {
        boxs.scrollBy(300, 0);
    });
    var boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => {
        box.addEventListener('click', function (event) {
            event.stopPropagation();
            this.style.width = boxsWidth + 'px';
            this.classList.toggle('spread');
            this.children[0].children[0].children[0].children[1].classList.toggle('show');
            this.children[0].children[0].children[0].children[0].classList.toggle('d-flex');
            boxs.scrollTo({
                left: box.offsetLeft,
                behavior: 'smooth',
            });
        });
    }); document.body.addEventListener('click', function () {
        boxes.forEach(box => {
            box.style.width = '';
            box.classList.remove('spread');
            box.children[0].children[0].children[0].children[1].classList.remove('show');
            box.children[0].children[0].children[0].children[0].classList.remove('d-flex');
        });
    });//end for project presentations

    function myFunction() { //for progress bar
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    window.onscroll = function () { myFunction() };

    var bloomsai = document.querySelector('.bloomsai h1');
    bloomsai.addEventListener('touchstart', () => {
        bloomsai.style.textShadow = "5px 10px 10px grey";
    });
    //for testimonial
});