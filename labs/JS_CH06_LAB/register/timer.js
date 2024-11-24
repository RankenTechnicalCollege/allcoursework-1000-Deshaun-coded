
const $ = selector => document.querySelector(selector);



let timer = null;

 let count = 10;
const updateCounter = () => {

    $("#counter").firstChild.nodeValue = count;
     if (count <= 0) {
         clearInterval(timer);

        $("#counter").firstChild.nodeValue = "Blastoff!";

    } 

    count--;

};  




document.addEventListener("DOMContentLoaded", () => {

   updateCounter();

  timer = setInterval(updateCounter, 1000);

});