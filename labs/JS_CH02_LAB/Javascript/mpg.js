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