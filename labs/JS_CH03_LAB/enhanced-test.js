"use strict"

//initialize total variable
let total=0;
let count=0;

const scores=[];

let score=0;

//use do while-loop get scores from the user and store in the array

do{
  // get a score from the user
  score= parseInt(
    prompt("Enter a test score, or enter -1 to end scores.",-1));

    // if it's valid, add to total, increment count, and display score 
    if (score>= 0 && score <= 100){
     scores [scores.length]=score;
    }
    // if user isn't ending scores, notify them of invalid data
    else if (score !=-1){
      alert("Score must be Valid number from 0 through 100.")
    }
} 

while(score !=-1);

if(score.length>0){
let total=0
  for (let i in scores){
    total= total + scores[i];
    console.log(`<p>Score ${parseInt(i)+1}:${scores[i]}</p>`);
  }
}

//calculate and display average score
const average= parseInt(total/scores);
document.write(`<p> Average score is ${average}</p>`);