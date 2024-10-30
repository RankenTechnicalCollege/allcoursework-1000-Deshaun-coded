'use strict';

//initialize total variable

const scores = [];

let score = 0;

//use do while-loop get scores from the user and store in the array

do {
  // get a score from the user
  score = parseFloat(prompt("Enter a test score, or enter -1 to end scores.", -1));

  // if it's valid, add to total, increment count, and display score
  if (score >= 0 && score <= 100) {
    scores[scores.length] = score;
  }
  // if user isn't ending scores, notify them of invalid data
  else if (score != -1) {
    alert('Score must be Valid number from 0 through 100.');
  }
} while (score != -1);

if (scores.length > 0) {
  console.log('above the for in loop');
  //use a for-in loop to add each score to total and display it
  let total = 0;
  for (let i in scores) {
    console.log('in the for loop');
    total = total+scores[i];
    document.write(`<p>Score ${parseFloat(i)+1}: ${scores[i]}</p>`);
  }

  //calculate and display average score
  const average = parseFloat(total/scores.length);
  document.write(`<p> Average score is ${average}</p>`);
}
