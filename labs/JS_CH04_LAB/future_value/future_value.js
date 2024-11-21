"use strict";

const $ = selector => document.querySelector(selector);

function isInvalidValue(value) {
  if (value == NaN || value <= 0) {
    return true;
  }
  else {
    return false;
  }
}
//create the calculator


const processEntries = () => {
  //get values user entered in textboxes
  const investment = parseFloat($("#investment").value);
  const rate = parseFloat($("#rate").value);
  const years = parseInt($("#years").value);

  let errorMsg = "";

  //check user entries for errors or invalid inputs
  if (isInvalidValue(investment)) {
    errorMsg += "Interest rate must be a valid number greater than zero.\n"
    $("#investment").focus();
  }

  if (isInvalidValue(rate)) {
    errorMsg += "Interest rate must be a valid number greater than zero.\n";
    $("#rate").focus();
  }

  if (isInvalidValue(years)) {
    errorMsg += "Number of years must be a valid number greater than zero.";
    $("#years").focus();
  }

  if (errorMsg == "") {
    $("#future_value").value = `${calculateFV(investment,rate,years)}`
  } else {
    //display error message
    alert(errorMsg);
  }
  // set focus on first text box on initial load
  $("#investment").focus();
};

const calculateFV = (investment, rate, years) => {
  let futureValue = investment;
        for (let i = 1; i <= years; i++) {
          let interest = futureValue += futureValue * rate / 100;

          
        }
  
  return futureValue.toFixed(2);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  // clear any previous calculation
  $("#future_value").value = "";
})