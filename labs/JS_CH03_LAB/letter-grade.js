let grade= document.getElementById('input').value;
let result= document.getElementById('output');

if (grade >= 90 && grade<=100){
  result.innerHTML = "You got an 'A'. Excellent! ";
}
else if(grade >= 80 && grade<=90){
  result.innerHTML= "You got a 'B'. Great! ";
}
else if (grade>= 70 && grade<= 80){
  result.innerHTML = "You got a 'B'. Great!";
}