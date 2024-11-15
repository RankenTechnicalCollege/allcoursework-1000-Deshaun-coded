"use strict";


const $ = selector => document.querySelector(selector);

const isInvalidValue= val=> isNaN (val) || val <= 0;
//create the calculator
const calculateFV= (investment, rate, years)=> {
  let futureValue= investment;
  for(let i=1; i<=years; i++) {
    futureValue+= futureValue * rate / 100;
  }
  return futureValue;
};

const processEntries = () => {

}

document.addEventListener("DOMContentLoaded", ()=>{

  $("#calculate").addEventListener("click", (evt) => {
    // clear any previous calculation
    $("#future_value").value
  })
})