
function Calculate() { 
                    const months = document.querySelector("#months").value; 
                    const interest = (50000 * (18 * 0.01)) / months;  
                    const total = ((50000 / months) + interest).toFixed(2); 
  
                    document.querySelector("#total") .innerHTML = "EMI : (₹)" + total; 
}