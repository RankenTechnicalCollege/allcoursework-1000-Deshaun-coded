document.getElementById('btnClick').onclick = () => {
     // Get the values of the input fields
     const burger = parseFloat(document.getElementById("burger").value) || 0;
     const fries = parseFloat(document.getElementById("fries").value) || 0;
     const sodas = parseFloat(document.getElementById("sodas").value) || 0;
 
     // Calculate the total cost
     const totalCost = burger + fries + sodas;
 
     // Display the total cost
     document.getElementById('btnClick').textContent = totalCost.toFixed(2);
 };
document.write