"use strict"

const $ = selector => document.querySelector(selector);

const processEntries = () => {
      const email = $("#email_address");
      const phone = $("#phone");
      const country =$("#country");
      const terms = $("#terms");

      let isValid = true;
      if (email.value==""){
            email.nextElementSibling.textContent = "This field is required.";
            isValid= false;
      }else{
            email.nextElementSibling.textContent = "";
      }

      if (phone.value ==""){
            phone.nextElementSibling.textContent="This field is required.";
            isValid=false;
      }else{
            phone.nextElementSibling.textContent = "";
      }

      if (country.value == ""){
            country.nextElementSibling.textContent="This field is required.";
            isValid=false;
      }else{
            country.nextElementSibling.textContent="";
      }

      if (terms.value==""){
            terms.nextElementSibling.textContent="";
      }else{
            terms.nextElementSibling.textContent="";
      }
      if (isValid==true){
            $("form").submit()
      }

}