'use strict';

const words = document.querySelectorAll('.words');
const btnsFurther = document.querySelectorAll('.further');

words.forEach((word, i) => {
  if (i > 0) {
    word.style.cssText = 'display: none';
  }
});

btnsFurther.forEach((btn, i) => {
  if (i > 0) {
    btn.style.cssText = 'display: none';
  }
});

let count = 0;

const btnsRight = document.querySelectorAll('.btn--right');
const btnsWrong = document.querySelectorAll('.btn--wrong');
const score = document.querySelector('.score');

btnsRight.forEach(btn =>
  btn.addEventListener('click', function(e) {
    const button = e.target;
    const picture = button.parentElement.querySelector('.words_picture');
    const sadSmile = button.parentElement.querySelector('.words_sad');
    const missedLetter = button.parentElement.querySelector('.words_missed');

    if (!picture.classList.contains('first')) {
      count++;
      picture.classList.add('first');
    }

    picture.classList.remove('wrong');
    sadSmile.classList.remove('active');
    picture.classList.add('active');
    missedLetter.classList.add('active');
    score.innerText = `Правильно: ${count}`;
  })
);

btnsWrong.forEach(btn =>
  btn.addEventListener('click', function(e) {
    const button = e.target;
    const picture = button.parentElement.querySelector('.words_picture');
    const sadSmile = button.parentElement.querySelector('.words_sad');
    const missedLetter = button.parentElement.querySelector('.words_missed');

    picture.classList.add('first');
    picture.classList.add('wrong');
    sadSmile.classList.add('active');
    missedLetter.classList.remove('active');
  })
);

btnsFurther.forEach(btn =>
  btn.addEventListener('click', function(e) {
    const button = e.target;
    const currentBlock = button.previousElementSibling;
    const nextBlock = button.nextElementSibling;

    currentBlock.style.cssText = 'display: none;';
    nextBlock.style.cssText = 'display: block;';
    button.style.cssText = 'display: none;';
    nextBlock.nextElementSibling.style.cssText = 'display: inline-block;';
  })
);
