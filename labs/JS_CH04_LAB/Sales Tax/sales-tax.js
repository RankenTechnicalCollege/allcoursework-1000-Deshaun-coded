"use strict";

const $ = selector => document.querySelector(selector);


//create the calculator


const processEntries = () => {
  //get values user entered in textboxes
  const subTotal = parseFloat($("#subtotal").value);
  const rate = parseFloat($("#rate").value);
  const salesTax = parseInt($("#salestax").value);
  const total= parseFloat($("#total"))

  let errorMsg = "";

  function isInvalidValue() {
    if (subtotal > 0 && subtotal < 10000) {
      return true;
    }
    else {
      return false;
    }
  
    if(rate > 0 && rate < 12){
      return true;
    } 
      else false;
  }



  //check user entries for errors or invalid inputs
  if (isInvalidValue(subTotal)) {
    errorMsg += "Interest rate must be a valid number greater than zero.\n"
    $("#subtotal").focus();
  }

  if (isInvalidValue(rate)) {
    errorMsg += "Interest rate must be a valid number greater than zero.\n";
    $("#rate").focus();
  }



 
    //display error message
    alert(errorMsg);

  // set focus on first text box on initial load
  $("#subtotal").focus();
};

let clearEntries =() => {
  $("#subtotal").value ="";
  $("#total").value="";
  $("#salestax").value="";
  $("#rate").value="";
}

const calculateTax = (subTotal,salesTax,rate) => {
 
    let salesTax = subTotal * (rate / 100);
    let total = subTotal + salesTax;
    return total.toFixed(2);
}
  
  


document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculateTax);
  
  // clear any previous calculation
  $("#reset").addEventListener("click").reset();
})