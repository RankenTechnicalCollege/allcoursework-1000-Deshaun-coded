"use strict"

//initialize total variable
let total=0;

//get 3 scores from user and add them together
const score1= parseInt(prompt("Enter test scores"));
total += score1;

const score2=parseInt(prompt("Enter test score"));
total+= score2;

const score3= parseInt(prompt("Enter test Score"));
total+= score3;

const average= parseFloat(total/3);

const html= `<p>Score 1 =${score1}</p>
             <p>Score 2 =${score2}</p>
             <p>Score 3 =${score3}</p>
             <p>Average score= ${average.toFixed(2) }</p>`;
        document.write(html);