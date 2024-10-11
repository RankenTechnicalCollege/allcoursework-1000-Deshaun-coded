"use strict"

//initialize total variable

 
 
 
 

let fahrenheit = prompt('Enter Fahrenheit Temperature');
 
let celsius = parseFloat((fahrenheit-32)*(5 / 9));

 

//get 3 scores from user and add them together


const  html=`<p>${fahrenheit}F=${celsius.toFixed(2)}C</p>`;
        
     document.write(html);