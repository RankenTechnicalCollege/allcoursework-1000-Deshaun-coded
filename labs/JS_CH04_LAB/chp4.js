"use strict";

    // get miles driven from user
    const miles= parseFloat (prompt("Enter miles driven"));

    //get gallons used from user
    const gallons= parseFloat(prompt("Enter gallons of gas used"));

    //calculate mpg
    const mpg= parseFloat (miles/gallons);

       const  html=`<p><label>Miles: ${miles.toFixed(2)}</p>
                <p><label>Gallons: ${gallons.toFixed(2)}</p>
                <p><label>MPG: ${mpg.toFixed(2) }</p>`;
                document.write(html);


            let investment = 0;
            let years = 0;
            let interest = 0;
      
            //get interest rate amount- loop until user enters a number
            do 
              {
                rate = parseFloat(prompt('Enter interest rate amount as xxxxx.xx', 7.5));
              }
              while (isNaN(rate) || rate <= 0);
      
              //get investment amount- loop until user enters a number
              do {
                investment = parseFloat(prompt('Enter investment amount as xxxxx.xx', 10000));
              } while (isNaN(investment) || investment <= 0);
      
              //get number of years to prompt until a number is entered
              do {
                years = parseInt(prompt('Enter number of years', 10));
              } while (isNaN(years) || years <= 0);
              
              //write entries
      
              document.write(`<h4> investment amount = ${investment} interest rate = ${rate} Years = ${years}</h4>`);
      
              let futureValue = investment;
              for (let i = 1; i <= years; i++) {
                let interest = futureValue += futureValue * rate / 100;
      
                
              }
      
      
              futureValue=futureValue.toFixed(2)
              
              
              
                  
      
      
            //write results
            document.write(`<h4>Future Value with Yearly Interest</h4>`)
      
            document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
            document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
            document.write(`<p><label>Years:</label> ${years}</p>`);
            document.write(`<p><label>Future Values:</label> ${futureValue}</p>`);
      
            document.write(`<h4>Future Value with Monthly Interest</h4>`)
      
            document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
            document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
            document.write(`<p><label>Years:</label> ${years}</p>`);
            document.write(`<p><label>Future Values:</label> ${futureValue}</p>`);