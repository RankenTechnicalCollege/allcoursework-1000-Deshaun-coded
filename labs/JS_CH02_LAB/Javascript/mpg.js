"use strict";

    // get miles driven from user
    const miles= parseInt (prompt("Enter miles driven"));

    //get gallons used from user
    const gallons= parseInt(prompt("Enter gallons of gas used"));

    //calculate mpg
    const mpg= parseFloat (prompt(miles/gallons));

       const  html=`<p>Miles: ${mile}</p>
                <p>Gallons: ${gallons}</p>
                <p>MPG: ${mpg.toFixed(2) }</p>`;
            document.write(html);