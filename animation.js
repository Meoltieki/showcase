const floppy = document.querySelector('.floppy__inner');

floppy.addEventListener('click', function () {
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

let currCardIndex = 0;
window.setInterval(() => {
  const prevCardIndex = (currCardIndex === 0 && cards.length - 1) || currCardIndex - 1;

  if (!skipFlip(prevCardIndex)) {
    flipCard(cards[prevCardIndex], 'back');
  }
  if (!skipFlip(currCardIndex)) {
    flipCard(cards[currCardIndex], 'forward');
  }

  currCardIndex = currCardIndex === cards.length - 1 ? 0 : currCardIndex + 1;
}, 2000);
