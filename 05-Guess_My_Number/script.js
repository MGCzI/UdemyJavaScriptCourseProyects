'use strict';

/*
document.querySelector('tag name/class/id') -> to select the tag, class or id
.textContent -> to select the text content
*/
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 30;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

//  Math.floor(Math.random() *20);
// Otra froma de generar numers random enteros entre 1 y 20. trunc elimina la parte decimal del numero.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log('secretNumber', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //No input
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    //You Win
    document.querySelector('.message').textContent = ' 🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    //Let change the css.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 To high!';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 To low!';
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You Loose';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log('secretNumber', secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset the css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
