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







/* flipping automation*/

const cards = document.querySelectorAll('.floppy__inner');

const flipCard = (card, direction) => {
    switch (direction) {
      case 'forward':
        card.children[0].classList.add("rotated");
        break;
      case 'back':
        card.children[0].classList.remove("rotated");
        break;
      default:
        card.children[0].classList.toggle("rotated");
    }
  };

  const skipFlip = (cardIndex) => {
    return cards[cardIndex].getAttribute('data-isHovered') || false;
  }

  cards.forEach((card, index) => {

    card.addEventListener('mouseenter', (event) => {
        flipCard(card, 'forward');
        card.setAttribute('data-isHovered', true);
      });
    
      card.addEventListener('mouseleave', (event) => {
        flipCard(card, 'back');
        card.removeAttribute('data-isHovered', false);
      });
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
