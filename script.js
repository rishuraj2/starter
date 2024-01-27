'use strict';

function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}

let score = 0;
let highScore = 0;
let gameState = true;
let finalAnswer = getRandomInt(21).toString();

function again()
{
  gameState = true;
  finalAnswer = getRandomInt(21);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
}

function gameIsOn()
{
  if(gameState)
  {
    let num = parseInt(document.querySelector('.guess').value);
    if(!num)
    {
      document.querySelector('.message').textContent = 'No Number!';
    }
    else if(num > finalAnswer)
    {
      document.querySelector('.message').textContent = 'Too High!';
      score -= 3;
      document.querySelector('.score').textContent = score.toString();
    }
    else if(num < finalAnswer)
    {
      document.querySelector('.message').textContent = 'Too Low!';
      score -= 3;
      document.querySelector('.score').textContent = score.toString();
    }
    else
    {
      document.querySelector('.message').textContent = 'Correct!';
      score += 10;
      if(score > highScore)
        highScore = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.score').textContent = score.toString();
      document.querySelector('.highscore').textContent = highScore.toString();
      document.querySelector('.number').textContent = finalAnswer;

      gameState = false;
    }
  }
}

document.querySelector('.again').addEventListener('click', again);
document.querySelector('.check').addEventListener('click', gameIsOn);