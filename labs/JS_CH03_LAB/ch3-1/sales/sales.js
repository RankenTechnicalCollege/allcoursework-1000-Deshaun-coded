 "use strict"

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//region totals
let region1total = region1[0] + region1[1] + region1[2] + region1[3];
let region2total = region2[0] + region2[1] + region2[2] + region2[3];
let region3total = region3[0] + region3[1] + region3[2] + region3[3];
let region4total = region4[0] + region4[1] + region4[2] + region4[3];
let region5total = region5[0] + region5[1] + region5[2] + region5[3];

//quarterly totals
let quarter1total = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
let quarter2total = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
let quarter3total = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
let quarter4total = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];


document.write(`<h2>Sales by Quarter</h2>`)
document.write(`<p>Q1: $${quarter1total} </p>`);
document.write(`<p>Q2: $${quarter2total} </p>`);
document.write(`<p>Q3: $${quarter3total} </p>`);
document.write(`<p>Q4: $${quarter4total} </p>`);


document.write(`<h2>Sales by Region</h2>`)
document.write(`<p>Region 1: $${region1total} </p>`);
document.write(`<p>Region 2: $${region2total} </p>`);
document.write(`<p>Region 3: $${region3total} </p>`);
document.write(`<p>Region 4: $${region4total} </p>`);
document.write(`<p>Region 5: $${region5total} </p>`);


let total=0; 

total=region1total+region2total+region3total+region4total+region5total;






document.write(`<h2>Total Sales</h2>`)
document.write(`$${total} </p>`);

//calculate and display average score
