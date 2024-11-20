"use strict"

const $ = selector => document.querySelector(selector);

const processEntries = () => {
      const email = $("#email");
      const password = $("#password");
      

      

      document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting

        // Simulate checking email and password
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Example credentials (you can replace this with your own logic for validation)
        const correctEmail = "admin@example.com";
        const correctPassword = "password";

        // Check if the entered credentials are correct
        if (email !== correctEmail || password !== correctPassword) {
            // Show error message if credentials are incorrect
            document.getElementById("errorMessage")
            errorMessage.textContent = "That email and password doesn't seem to be right. Try again.";
            const element = document.getElementById("errorMessage");
            element.style.color = "red";
        } 
    });

      let isValid = true;
      if (email.value==""){
            email.nextElementSibling.textContent = "This field is required.";
            isValid= false;
      }else{
            email.nextElementSibling.textContent = "";
      }

      if (password.value ==""){
            password.nextElementSibling.textContent="You seem to have forgotten your username and password.";
            isValid=false;
      }
      
      if (password.value =="password" && email.value=="admin@example.com"){
        password.nextElementSibling.textContent="Welcome back Admin!"
        isValid=true;
      }else{
            password.nextElementSibling.textContent = "";
      }

      document.addEventListener("DOMContentLoaded", () => {
            $("#register").addEventListener("click", processEntries);
            $("#reset_form").addEventListener("click", resetForm);  
            $("#email_address").focus();   
        });
      

      

}