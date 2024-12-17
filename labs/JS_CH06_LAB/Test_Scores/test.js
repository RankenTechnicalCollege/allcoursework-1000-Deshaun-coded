var names = ["Ben", "Joel", "Judy", "Anne"]; //decalre array name


var scores = [88, 98, 77, 88]; //decalre array score


var n = 4; //set the array size


var size = 20; //set the array limit variable


var $ = function(id) {


return document.getElementById(id);


};


function addScore() { //addScore function


var name = $('name').value; //take the value from input box


var score = $('score').value; //take the value from input box


if (name === "" || score === "" || isNaN(score)) //check for the empty data


alert("Invalid data ");


else if (n < size) { //check for the array size


names[n] = name; //add the name to the array


scores[n] = score; //add score to the array


n++; //increment the n size


} else


alert("Array already full"); //alert when increse the array size


}


function displayResults() {


//declare the variable


var high, average, name;


high = scores[0];


name = names[0];


average = 0;


for (z = 0; z < n; z++) { //loop to find the highest score of array


if (scores[z] > high) {


high = scores[z]; //store in h variable highest score


name = names[z]; //store in name variable with highest score


}


average = average + parseInt(scores[z]); //add score recently added to the average


}


average = average / n; //calculate the average


var output = "<h2>Results </h2><br> Average Score= " + average + "<br>High Score = " + name + " with a score of " + high;


$('results').innerHTML = output; //display to the html


}


function displayScores() { //display score


var output = "<tr><td colspan='2'><h2>Scores</h2></td></tr><tr><td><b>Name</b></td><td><b>Score</b></td></tr> ";


//loop to create a table rows and cols for the name and the score


for (z = 0; z < n; z++) {


output = output + "<tr><td>" + names[z] + "</td><td>" + scores[z] + "</td></tr>"


}


$('scores_table').innerHTML = output;


}


//onload function


window.onload = function() {


$("add").onclick = addScore; //create an onclick event for the add


$("display_results").onclick = displayResults; //create an onclick event for the display result


$("display_scores").onclick = displayScores; //create an onclick event for the display score


};