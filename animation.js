
const floppy = document.querySelector('.floppy__inner');

floppy.addEventListener('touchstart',function () {
    floppy.classList.toggle('is-flipped');
});




const compaq = document.querySelector('.compaq__inner');

compaq.addEventListener('click', function () {
    compaq.classList.toggle('is-flipped');
});

const sony = document.querySelector('.sony__inner');

sony.addEventListener('click', function () {
    sony.classList.toggle('is-flipped');
});


