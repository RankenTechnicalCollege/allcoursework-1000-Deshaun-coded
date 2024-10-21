"use strict";


let again = "y";

do {
  // get miles driven from user
  const miles = parseFloat(prompt("Enter miles driven"));
  //get gallons used from user
  const gallons = parseFloat(prompt("Enter gallons of gas used"));


  if (miles > 0 && gallons > 0) {
    //calculate mpg
    const mpg = parseFloat(miles / gallons);

    const html = `<p> ${miles.toFixed(2)} miles on</p>
                <p>${gallons.toFixed(2)} gallons =</p>
                <p>${mpg.toFixed(2) } MPG</p>`;
    document.write(html);
  } 
    
  else {
    alert("One or both entries are invalid");
  }

  again = prompt("Repeat entries? (y/n)", "y");

  
  }while (again == "y");