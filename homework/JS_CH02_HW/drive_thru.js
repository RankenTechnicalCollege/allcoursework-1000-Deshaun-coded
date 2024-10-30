
    document.getElementById('btnClick').onclick = () => {
        const burgers = parseInt(document.getElementById('burgers').value) || 0;
        const fries = parseInt(document.getElementById('fries').value) || 0;
        const sodas = parseInt(document.getElementById('sodas').value) || 0;

        const totalCost = (burgers * 1) + (fries * 2) + (sodas * 2.5);
       
        document.getElementById('orderSummary').innerHTML = `Total Cost: $ ${totalCost.toFixed(2)}`;
    };
