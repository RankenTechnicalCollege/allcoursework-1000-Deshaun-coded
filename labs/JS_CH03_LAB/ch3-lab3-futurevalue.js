
      let investment = 0;
      let years = 0;
      let interest = 0;

      //get interest rate amount- loop until user enters a number
      do {
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
          let interest = (futureValue += (futureValue * rate) / 100);

          //write results
          document.write(`<p> year=${i} Interest=${interest.toFixed(2)} Value= ${futureValue.toFixed(2)}</P>`);
        }
        again = prompt(' Repeat entries? (y/n)', 'y');
      } while (again === 'y');